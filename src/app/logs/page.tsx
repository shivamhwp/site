import fs from "node:fs/promises";
import path from "node:path";
import { Md } from "@m2d/react-markdown";

async function getUpdatesMarkdown() {
  const updatesPath = path.join(process.cwd(), "src", "content", "updates.md");
  const content = await fs.readFile(updatesPath, "utf-8");
  return content;
}

export default async function LogsPage() {
  const markdown = await getUpdatesMarkdown();
  return (
    <div className="prose prose-invert max-w-none">
      <Md>{markdown}</Md>
    </div>
  );
}
