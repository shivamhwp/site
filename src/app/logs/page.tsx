import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import remarkGfm from "remark-gfm";

async function getUpdatesMarkdown() {
  const updatesPath = path.join(process.cwd(), "src", "content", "updates.mdx");
  const content = await fs.readFile(updatesPath, "utf-8");
  return content;
}

export default async function LogsPage() {
  const markdown = await getUpdatesMarkdown();
  const { content } = await compileMDX({
    source: markdown,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
    components: { Image },
  });
  return <div className="prose prose-invert max-w-none">{content}</div>;
}
