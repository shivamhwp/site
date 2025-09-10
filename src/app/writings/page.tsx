import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function writingsListPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-2">
        {posts.map((post) => (
          <Link
            href={`/writings/${post.slug}`}
            prefetch
            key={post.slug}
            className="group transition-colors hover:bg-accent hover:border-primary cursor-pointer rounded-lg border px-4 py-2 min-h-0 h-12 flex items-center"
          >
            <div className="flex items-center justify-between w-full h-full">
              <div className="font-medium text-primary truncate flex-1">
                {post.title}
              </div>
              {post.published && (
                <time className="text-xs text-muted-foreground ml-3 shrink-0">
                  {new Date(post.published).toLocaleDateString(undefined, {
                    month: "short",
                    day: "2-digit",
                  })}
                </time>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
