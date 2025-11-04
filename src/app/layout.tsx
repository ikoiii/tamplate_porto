import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angger Bayu Sentiko - Full Stack Developer Portfolio",
  description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies. Check out my projects and get in touch!",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Angger Bayu Sentiko" }],
  openGraph: {
    title: "Angger Bayu Sentiko - Full Stack Developer Portfolio",
    description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    siteName: "Angger Bayu Sentiko Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angger Bayu Sentiko - Full Stack Developer Portfolio",
    description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
