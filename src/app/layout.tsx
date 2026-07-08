import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import { getSiteSettings } from "@/sanity/queries";

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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: settings.siteTitle || "Mahlet Teshome | Science Policy and Sustainable Development Leader",
    description: settings.siteDescription || "Official website of Mahlet Teshome Kebede, Science Policy and Sustainable Development Leader.",
    keywords: [
      "Mahlet Teshome",
      "Science Policy",
      "Sustainable Development",
      "African Union",
      "Ethiopia",
      "Biodiversity",
    ],
    authors: [{ name: settings.headerName || "Mahlet Teshome" }],
    openGraph: {
      title: settings.siteTitle || "Mahlet Teshome | Science Policy and Sustainable Development Leader",
      description: settings.siteDescription || "Official website of Mahlet Teshome Kebede, Science Policy and Sustainable Development Leader.",
      type: "website",
    },
  };
}

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
