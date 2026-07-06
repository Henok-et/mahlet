import { client } from "./client";
import {
  fallbackHero,
  fallbackBooks,
  fallbackPosts,
  fallbackSpeaking,
  HeroData,
  BookItem,
  PostItem,
  SpeakingData,
} from "./fallbackData";

// Fetch Hero Singleton Content
export async function getHero(): Promise<HeroData> {
  try {
    const data = await client.fetch<HeroData | null>(
      `*[_type == "hero"][0]{
        title,
        subtitle,
        bio,
        "profileImageUrl": profileImage.asset->url,
        ctaPrimaryText,
        ctaPrimaryUrl,
        ctaSecondaryText,
        ctaSecondaryUrl
      }`
    );
    
    if (!data) return fallbackHero;
    
    return {
      title: data.title || fallbackHero.title,
      subtitle: data.subtitle || fallbackHero.subtitle,
      bio: data.bio || fallbackHero.bio,
      profileImageUrl: data.profileImageUrl || fallbackHero.profileImageUrl,
      ctaPrimaryText: data.ctaPrimaryText || fallbackHero.ctaPrimaryText,
      ctaPrimaryUrl: data.ctaPrimaryUrl || fallbackHero.ctaPrimaryUrl,
      ctaSecondaryText: data.ctaSecondaryText || fallbackHero.ctaSecondaryText,
      ctaSecondaryUrl: data.ctaSecondaryUrl || fallbackHero.ctaSecondaryUrl,
    };
  } catch (error) {
    console.warn("Sanity fetch error for 'hero', returning mock fallback:", error);
    return fallbackHero;
  }
}

// Fetch Books List
export async function getBooks(): Promise<BookItem[]> {
  try {
    const books = await client.fetch<BookItem[] | null>(
      `*[_type == "book"] | order(publishDate desc){
        _id,
        title,
        "coverUrl": cover.asset->url,
        publishDate,
        purchaseUrl,
        description,
        framework[]{
          stepNumber,
          title,
          description
        }
      }`
    );
    
    if (!books || books.length === 0) return fallbackBooks;
    
    return books.map((book, idx) => ({
      _id: book._id,
      title: book.title || `Book ${idx + 1}`,
      coverUrl: book.coverUrl || fallbackBooks[idx]?.coverUrl || fallbackBooks[0].coverUrl,
      publishDate: book.publishDate,
      purchaseUrl: book.purchaseUrl,
      description: book.description || "",
      framework: book.framework,
    }));
  } catch (error) {
    console.warn("Sanity fetch error for 'book', returning mock fallback:", error);
    return fallbackBooks;
  }
}

// Fetch Posts/Articles
export async function getPosts(): Promise<PostItem[]> {
  try {
    const posts = await client.fetch<PostItem[] | null>(
      `*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        "mainImageUrl": mainImage.asset->url,
        category,
        publishedAt,
        excerpt,
        body
      }`
    );
    
    if (!posts || posts.length === 0) return fallbackPosts;
    
    return posts.map((post, idx) => ({
      _id: post._id,
      title: post.title || "",
      slug: post.slug || { current: "" },
      mainImageUrl: post.mainImageUrl || fallbackPosts[idx]?.mainImageUrl || fallbackPosts[0].mainImageUrl,
      category: post.category || "General",
      publishedAt: post.publishedAt || new Date().toISOString(),
      excerpt: post.excerpt || "",
      body: post.body,
    }));
  } catch (error) {
    console.warn("Sanity fetch error for 'post', returning mock fallback:", error);
    return fallbackPosts;
  }
}

// Fetch Speaking Section Singleton Content
export async function getSpeaking(): Promise<SpeakingData> {
  try {
    const data = await client.fetch<SpeakingData | null>(
      `*[_type == "speakingSection"][0]{
        title,
        intro,
        topics[]{
          title,
          description
        },
        contactEmail
      }`
    );
    
    if (!data) return fallbackSpeaking;
    
    return {
      title: data.title || fallbackSpeaking.title,
      intro: data.intro || fallbackSpeaking.intro,
      topics: data.topics || fallbackSpeaking.topics,
      contactEmail: data.contactEmail || fallbackSpeaking.contactEmail,
    };
  } catch (error) {
    console.warn("Sanity fetch error for 'speakingSection', returning mock fallback:", error);
    return fallbackSpeaking;
  }
}
