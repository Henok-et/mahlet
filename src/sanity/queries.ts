import { client } from "./client";
import {
  fallbackSiteSettings,
  fallbackHero,
  fallbackExperience,
  fallbackEducation,
  fallbackPublications,
  fallbackVoluntary,
  fallbackReferees,
  fallbackCompetencies,
  fallbackBooks,
  SiteSettingsData,
  HeroData,
  ExperienceItem,
  EducationItem,
  PublicationItem,
  VoluntaryItem,
  RefereeItem,
  CompetencyItem,
  BookItem
} from "./fallbackData";

export { fallbackLanguages } from "./fallbackData";

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const data = await client.fetch<SiteSettingsData | null>(`*[_type == "siteSettings"][0]`);
    if (!data) return fallbackSiteSettings;
    return {
      ...fallbackSiteSettings,
      ...data,
      languages: data.languages && data.languages.length > 0 ? data.languages : fallbackSiteSettings.languages
    };
  } catch (error) {
    console.warn("Sanity fetch error for 'siteSettings', returning mock fallback:", error);
    return fallbackSiteSettings;
  }
}

export async function getHero(): Promise<HeroData> {
  try {
    const data = await client.fetch<HeroData | null>(
      `*[_type == "hero"][0]{
        name,
        nationality,
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
      name: data.name || fallbackHero.name,
      nationality: data.nationality || fallbackHero.nationality,
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

export async function getExperience(): Promise<ExperienceItem[]> {
  try {
    const data = await client.fetch<ExperienceItem[] | null>(
      `*[_type == "experience"] | order(order desc)`
    );
    if (!data || data.length === 0) return fallbackExperience;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'experience', returning mock fallback:", error);
    return fallbackExperience;
  }
}

export async function getEducation(): Promise<EducationItem[]> {
  try {
    const data = await client.fetch<EducationItem[] | null>(
      `*[_type == "education"] | order(order desc)`
    );
    if (!data || data.length === 0) return fallbackEducation;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'education', returning mock fallback:", error);
    return fallbackEducation;
  }
}

export async function getPublications(): Promise<PublicationItem[]> {
  try {
    const data = await client.fetch<PublicationItem[] | null>(
      `*[_type == "publication"] | order(order desc)`
    );
    if (!data || data.length === 0) return fallbackPublications;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'publication', returning mock fallback:", error);
    return fallbackPublications;
  }
}

export async function getVoluntary(): Promise<VoluntaryItem[]> {
  try {
    const data = await client.fetch<VoluntaryItem[] | null>(
      `*[_type == "voluntary"] | order(order desc)`
    );
    if (!data || data.length === 0) return fallbackVoluntary;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'voluntary', returning mock fallback:", error);
    return fallbackVoluntary;
  }
}

export async function getBooks(): Promise<BookItem[]> {
  try {
    const data = await client.fetch<BookItem[] | null>(
      `*[_type == "book"] | order(order desc){
        _id,
        title,
        "coverUrl": cover.asset->url,
        publishDate,
        purchaseUrl,
        description
      }`
    );
    if (!data || data.length === 0) return fallbackBooks;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'book', returning mock fallback:", error);
    return fallbackBooks;
  }
}

export async function getCompetencies(): Promise<CompetencyItem[]> {
  try {
    const data = await client.fetch<CompetencyItem[] | null>(
      `*[_type == "competency"] | order(order asc)`
    );
    if (!data || data.length === 0) return fallbackCompetencies;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'competency', returning mock fallback:", error);
    return fallbackCompetencies;
  }
}

export async function getReferees(): Promise<RefereeItem[]> {
  try {
    const data = await client.fetch<RefereeItem[] | null>(
      `*[_type == "referee"] | order(order asc)`
    );
    if (!data || data.length === 0) return fallbackReferees;
    return data;
  } catch (error) {
    console.warn("Sanity fetch error for 'referee', returning mock fallback:", error);
    return fallbackReferees;
  }
}
