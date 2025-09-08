import { socials } from "@/data";
import Link from "next/link";

export const dynamic = "error";

export default async function Home() {
  return (
    <div className="flex flex-col h-[calc(80vh)] w-full justify-between">
      <div className="flex flex-col h-full">
        <div>hi i am shivam.</div>
        <div>
          built{" "}
          <Link
            href="https://github.com/shivamhwp/git-acm"
            title="open git-acm ↗"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
          >
            git-acm
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/shivamhwp/isup"
            title="open isup ↗"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
          >
            isup.
          </Link>
        </div>
        <Link
          href="https://github.com/0bs-chat"
          title="open 0bs.chat ↗"
          className="text-blue-500 hover:text-blue-600"
          target="_blank"
        >
          0bs.chat.
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-end gap-4">
        {socials.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            {social.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
