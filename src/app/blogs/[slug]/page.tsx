import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { getAllSlugs } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Md } from "@m2d/react-markdown";

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
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6  sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-invert mx-auto">
          <header className="mb-8 not-prose">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {post.published && (
                <time className="font-medium">
                  {new Date(post.published).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      variant="secondary"
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post.director && <Badge>{post.director}</Badge>}
                </div>
              )}
            </div>
          </header>
          <div className="prose prose-invert max-w-none leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-90 [&_p]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-10 [&_h3]:mt-8 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1 [&_code]:rounded-sm [&_code]:px-1 [&_code]:py-0.5 [&_code]:bg-muted/50">
            <Md>{post.contentHtml}</Md>
          </div>
        </article>
      </div>
    </div>
  );
}
