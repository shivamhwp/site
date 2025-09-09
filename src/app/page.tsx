import { socials } from "@/data";
import Link from "next/link";

export const dynamic = "error";

export default async function Home() {
  return (
    <div className="flex flex-col h-[calc(80vh)] gap-4 w-full">
      <div className="flex flex-col">
        <div>hi i am shivam.</div>
        <div>
          built{" "}
          <Link
            href="https://github.com/shivamhwp/git-acm"
            title="open git-acm ↗"
            className="underline-offset-2 underline"
            target="_blank"
          >
            git-acm
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/shivamhwp/isup"
            title="open isup ↗"
            className="underline-offset-2 underline"
            target="_blank"
          >
            isup.
          </Link>{" "}
          currently{" "}
          <Link
            href="https://github.com/0bs-chat"
            title="open 0bs.chat ↗"
            className="underline-offset-2 underline"
            target="_blank"
          >
            0bs.chat.
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center gap-4">
        links:
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <Link
              href={social.link}
              key={social.id}
              target="_blank"
              className="underline-offset-2 underline"
            >
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
