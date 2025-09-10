import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const dynamic = "error";

export default async function PostsListPage() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-4 pb-16">
      <h1 className="text-2xl font-semibold tracking-tight">writings</h1>
      <div className="space-y-2">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-medium">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  {post.title}
                </Link>
              </h2>
              {post.published ? (
                <time className="text-sm text-muted-foreground">
                  {new Date(post.published).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </time>
              ) : null}
            </div>
            {post.tags.length > 0 ? (
              <div className="mt-1 flex flex-wrap gap-1.5 text-muted-foreground">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-md bg-secondary text-secondary-foreground px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
