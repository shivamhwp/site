import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNav } from "@/components/topnav";

export const metadata: Metadata = {
  title: "shivam",
  description: "an ipv4 address on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="50047cd7-0f24-4458-900a-a1c99a60782e"
        ></script>
      </head>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            enableColorScheme
          >
            <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
              <header className="flex items-center justify-between py-8">
                <TopNav />
              </header>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
