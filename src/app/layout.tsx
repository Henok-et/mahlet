import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Lynda Gratton | Author, Academic & Future of Work Expert",
  description:
    "Official website of Professor Lynda Gratton. Professor of Management Practice at London Business School, founder of HSM Advisory, and author of Redesigning Work and The 100-Year Life.",
  keywords: [
    "Lynda Gratton",
    "Future of Work",
    "Redesigning Work",
    "The 100-Year Life",
    "London Business School",
    "HSM Advisory",
    "Hybrid Work",
  ],
  authors: [{ name: "Lynda Gratton" }],
  openGraph: {
    title: "Lynda Gratton | Author, Academic & Future of Work Expert",
    description:
      "Official website of Professor Lynda Gratton. Professor of Management Practice at London Business School, founder of HSM Advisory, and author of Redesigning Work and The 100-Year Life.",
    type: "website",
  },
};

import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      style={{ height: "100%" }}
      suppressHydrationWarning
    >
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
export const dynamic = "force-dynamic";
