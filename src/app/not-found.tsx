import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-96 bg-background">
      <Link href="/" className="group/link">
        <div className="text-4xl font-bold group-hover/link:font-mono">404</div>
        <div className="text-4xl font-bold group-hover/link:underline group-hover/link:font-mono">
          go back to /
        </div>
      </Link>
    </div>
  );
}
