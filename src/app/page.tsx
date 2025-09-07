import Link from "next/link";

export const dynamic = "error";

export default async function Home() {
  return (
    <div className="flex flex-col h-full">
      <div>hi i am shivam.</div>
      <Link href="https://github.com/0bs-chat" title="open 0bs.chat ↗">
        currently 0bs.chat.
      </Link>
    </div>
  );
}
