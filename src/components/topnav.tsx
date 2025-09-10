"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();
  const logoUrl =
    "https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7gz3sS49jhBA7aDxcElbpQXquP9kMnvOLZ6Ci";

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="flex items-center justify-between w-full h-full py-4 sm:py-2">
      <Link href="/" className="flex items-center">
        {logoUrl && (
          <Image
            src={logoUrl}
            priority
            title="tatakae"
            width={32}
            height={32}
            alt="logo"
            className="h-11 w-11 cursor-pointer"
          />
        )}
      </Link>
      <div className="flex items-center gap-1">
        <Link
          href="/cinema"
          className={`hover:bg-accent rounded-md px-2 py-1 ${
            isActive("/cinema") ? "bg-accent" : ""
          }`}
        >
          cinema
        </Link>
        <Link
          href="/writings"
          className={`hover:bg-accent rounded-md px-2 py-1 ${
            isActive("/writings") ? "bg-accent" : ""
          }`}
        >
          writings
        </Link>
        <Link
          href="/updates"
          className={`hover:bg-accent rounded-md px-2 py-1 ${
            isActive("/updates") ? "bg-accent" : ""
          }`}
        >
          updates
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
