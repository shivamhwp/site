import fs from "node:fs/promises";
import path from "node:path";

export type PostFrontmatter = {
  title?: string;
  url?: string;
  tags?: string[];
  published?: string;
  updated?: string;
};

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  published?: string;
  updated?: string;
  contentHtml: string;
  director?: string;
};

function getPostsDirectory(): string {
  return path.join(process.cwd(), "src", "content", "posts");
}

function parseFrontmatter(raw: string): PostFrontmatter {
  const frontmatter: PostFrontmatter = {};
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const line of lines) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        // Attempt to parse array-like values
        frontmatter[key as keyof PostFrontmatter] = JSON.parse(value);
        continue;
      } catch {
        // Fall through to treat as string
      }
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    (frontmatter as Record<string, unknown>)[key] = value;
  }

  return frontmatter;
}

async function readPostFile(
  filePath: string,
): Promise<{ frontmatter: PostFrontmatter; body: string } | null> {
  const raw = await fs.readFile(filePath, "utf8");
  if (!raw.startsWith("---")) {
    return { frontmatter: {}, body: raw };
  }

  const endIndex = raw.indexOf("\n---", 3);
  if (endIndex === -1) {
    return { frontmatter: {}, body: raw };
  }

  const fmBlock = raw.slice(3, endIndex).trim();
  const body = raw.slice(endIndex + 4).trim();
  const frontmatter = parseFrontmatter(fmBlock);
  return { frontmatter, body };
}

function deriveSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/i, "");
}

export async function getAllSlugs(): Promise<string[]> {
  const dir = getPostsDirectory();
  const entries = await fs.readdir(dir);
  return entries.filter((f) => f.endsWith(".md")).map(deriveSlugFromFilename);
}

export async function getAllPosts(): Promise<Post[]> {
  const dir = getPostsDirectory();
  const entries = await fs.readdir(dir);
  const posts: Post[] = [];

  for (const entry of entries) {
    if (!entry.endsWith(".md")) continue;
    const filePath = path.join(dir, entry);
    const parsed = await readPostFile(filePath);
    if (!parsed) continue;

    const slug = deriveSlugFromFilename(entry);
    const title = parsed.frontmatter.title ?? slug;
    const tags = Array.isArray(parsed.frontmatter.tags)
      ? parsed.frontmatter.tags
      : [];
    const published = parsed.frontmatter.published;
    const updated = parsed.frontmatter.updated;
    const contentHtml = parsed.body;
    const director = parsed.frontmatter.director;
    posts.push({ slug, title, tags, published, updated, contentHtml });
  }

  posts.sort((a, b) => {
    const aTime = a.published ? new Date(a.published).getTime() : 0;
    const bTime = b.published ? new Date(b.published).getTime() : 0;
    return bTime - aTime;
  });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const dir = getPostsDirectory();
  const filePath = path.join(dir, `${slug}.md`);
  try {
    const parsed = await readPostFile(filePath);
    if (!parsed) return null;
    const title = parsed.frontmatter.title ?? slug;
    const tags = Array.isArray(parsed.frontmatter.tags)
      ? parsed.frontmatter.tags
      : [];
    const published = parsed.frontmatter.published;
    const updated = parsed.frontmatter.updated;
    const contentHtml = parsed.body;
    const director = parsed.frontmatter.director;
    return { slug, title, tags, published, updated, contentHtml, director };
  } catch {
    return null;
  }
}
