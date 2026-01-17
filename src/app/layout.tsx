import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BlogCMS - Modern Blogging Platform",
    template: "%s | BlogCMS",
  },
  description: "A modern blogging platform with content management system, rich text editing, and multi-author support.",
  keywords: ["blog", "cms", "content management", "writing", "publishing"],
  authors: [{ name: "BlogCMS" }],
  creator: "BlogCMS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogcms.com",
    title: "BlogCMS - Modern Blogging Platform",
    description: "A modern blogging platform with content management system, rich text editing, and multi-author support.",
    siteName: "BlogCMS",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogCMS - Modern Blogging Platform",
    description: "A modern blogging platform with content management system, rich text editing, and multi-author support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

