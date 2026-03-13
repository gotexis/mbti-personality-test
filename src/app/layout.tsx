import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

const SITE = "Free MBTI Personality Test";
const DESC = "Discover your personality type with our free 60-question MBTI test. Explore all 16 personality types with detailed profiles, strengths, careers, and compatibility.";
const URL = "https://mbti.rollersoft.com.au";

export const metadata: Metadata = {
  title: { default: SITE, template: `%s | ${SITE}` },
  description: DESC,
  openGraph: { title: SITE, description: DESC, url: URL, siteName: SITE, locale: "en_AU", type: "website" },
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="nord">
      <body className="min-h-screen bg-base-100 flex flex-col">
        <header className="navbar bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link className="text-xl font-bold tracking-tight" href="/">🧠 MBTI Test</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-purple-200 transition">Home</Link>
              <Link href="/test" className="hover:text-purple-200 transition">Take Test</Link>
              <Link href="/types" className="hover:text-purple-200 transition">16 Types</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="footer footer-center p-6 bg-base-200 text-base-content text-sm">
          <p>© {new Date().getFullYear()} Free MBTI Personality Test — a <a href="https://rollersoft.com.au" className="link link-primary" target="_blank" rel="noopener">Rollersoft</a> project.</p>
          <p className="text-xs opacity-60">MBTI® is a trademark of The Myers-Briggs Company. This site is not affiliated with or endorsed by them.</p>
        </footer>
      </body>
    </html>
  );
}
