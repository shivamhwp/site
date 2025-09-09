import fs from "node:fs/promises";
import path from "node:path";

export type PostFrontmatter = {
  title?: string;
  tags?: string[];
  published?: string;
  updated?: string;
  director?: string;
};

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  published?: string;
  updated?: string;
  director?: string;
};

function getPostsDirectory(): string {
  return path.join(process.cwd(), "src", "content", "posts");
}

// MDX migration: frontmatter is now parsed by MDX compiler at render time.

// Reading of raw files is only used for slug discovery in MDX mode.

function deriveSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/i, "");
}

export async function getAllSlugs(): Promise<string[]> {
  const dir = getPostsDirectory();
  const entries = await fs.readdir(dir);
  return entries.filter((f) => f.endsWith(".mdx")).map(deriveSlugFromFilename);
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
        (frontmatter as Record<string, unknown>)[key] = JSON.parse(value);
        continue;
      } catch {
        // ignore JSON parse errors and fall through
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

async function readFrontmatterFromMdx(
  filePath: string,
): Promise<PostFrontmatter> {
  const raw = await fs.readFile(filePath, "utf8");
  if (!raw.startsWith("---")) return {};
  const endIndex = raw.indexOf("\n---", 3);
  if (endIndex === -1) return {};
  const fmBlock = raw.slice(3, endIndex).trim();
  return parseFrontmatter(fmBlock);
}

export async function getAllPosts(): Promise<Post[]> {
  const dir = getPostsDirectory();
  const entries = await fs.readdir(dir);
  const posts: Post[] = [];

  for (const entry of entries) {
    if (!entry.endsWith(".mdx")) continue;
    const slug = deriveSlugFromFilename(entry);
    const filePath = path.join(dir, entry);
    const fm = await readFrontmatterFromMdx(filePath);
    const title: string = fm.title ?? slug;
    const tags: string[] = Array.isArray(fm.tags) ? fm.tags : [];
    const published: string | undefined = fm.published;
    const updated: string | undefined = fm.updated;
    const director: string | undefined = fm.director;
    posts.push({ slug, title, tags, published, updated, director });
  }

  posts.sort((a, b) => {
    const aTime = a.published ? new Date(a.published).getTime() : 0;
    const bTime = b.published ? new Date(b.published).getTime() : 0;
    return bTime - aTime;
  });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(getPostsDirectory(), `${slug}.mdx`);
    const fm = await readFrontmatterFromMdx(filePath);
    const title: string = fm.title ?? slug;
    const tags: string[] = Array.isArray(fm.tags) ? fm.tags : [];
    const published: string | undefined = fm.published;
    const updated: string | undefined = fm.updated;
    const director: string | undefined = fm.director;
    return { slug, title, tags, published, updated, director };
  } catch {
    return null;
  }
}
