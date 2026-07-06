import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import ThinkingSection from "@/components/ThinkingSection";
import SpeakingSection from "@/components/SpeakingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { getHero, getBooks, getPosts, getSpeaking } from "@/sanity/queries";

export default async function Home() {
  // Fetch content dynamically from Sanity CMS (with fallback structures)
  const heroData = await getHero();
  const booksData = await getBooks();
  const postsData = await getPosts();
  const speakingData = await getSpeaking();

  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <HeroSection data={heroData} />
        
        {/* Books Showcase */}
        <BooksSection books={booksData} />
        
        {/* Insights / Thinking Blog Feed */}
        <ThinkingSection posts={postsData} />
        
        {/* Speaking Keynotes & Advisory Details */}
        <SpeakingSection data={speakingData} />
        
        {/* Dynamic Contact & Newsletter Signup Form */}
        <ContactSection contactEmail={speakingData.contactEmail} />
      </main>
      <Footer />
    </>
  );
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
