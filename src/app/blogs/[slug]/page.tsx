import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getAllSlugs } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamic = "error";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "posts",
    `${slug}.mdx`,
  );
  let source: string | null = null;
  try {
    source = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<{
    title?: string;
    tags?: string[];
    published?: string;
    updated?: string;
    director?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
    components: { Image },
  });

  const title = frontmatter.title ?? slug;
  const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];
  const published = frontmatter.published as string | undefined;
  const director = frontmatter.director as string | undefined;

  return (
    <div className="min-h-full px-6 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-invert mx-auto">
          <header className="mb-8 not-prose">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {published && (
                <time className="font-medium">
                  {new Date(published).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      variant="secondary"
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {director && <Badge>{director}</Badge>}
                </div>
              )}
            </div>
          </header>
          <div className="prose prose-invert max-w-none leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-90 [&_p]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-10 [&_h3]:mt-8 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1 [&_code]:rounded-sm [&_code]:px-1 [&_code]:py-0.5 [&_code]:bg-muted/50 pb-16">
            {content}
          </div>
        </article>
      </div>
    </div>
  );
}
