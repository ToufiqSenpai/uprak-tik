import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Web Project</title>
      </head>
      <body className={inter.className}>
        <header className="fixed top-0 right-0 left-0 flex justify-between items-center bg-white h-10 px-4 py-6 z-50">
          <div className="flex justify-between items-center">
            <img src={"/next.svg"} />
            <h1 className="">Toufiq Projects</h1>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link className="cursor-pointer" href='/'>Home</Link>
            <Link className="cursor-pointer" href='/about'>About</Link>
            <Link className="cursor-pointer" href='/articles'>Articles</Link>
            <Link className="cursor-pointer" href='/projects'>Projects</Link>
          </div>
        </header>
        <main className="mt-12 mx-auto max-w-5xl">
          {children}
        </main>
        <footer className="flex justify-between items-center mx-auto max-w-5xl mt-10">
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
              <Link href='#' className="transition hover:text-teal-500 dark:hover:text-teal-400">About</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
              <Link href='#' className="transition hover:text-teal-500 dark:hover:text-teal-400">Projects</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
              <Link href='#' className="transition hover:text-teal-500 dark:hover:text-teal-400">Speaking</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
              <Link href='#' className="transition hover:text-teal-500 dark:hover:text-teal-400">Uses</Link>
            </div>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">© {new Date().getFullYear().toString()} Muhammad Taufiqurrahman. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
