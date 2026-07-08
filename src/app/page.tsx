import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { 
  getSiteSettings, 
  getHero, 
  getExperience, 
  getEducation, 
  getPublications 
} from "@/sanity/queries";

export default async function Home() {
  const settings = await getSiteSettings();
  const heroData = await getHero();
  const experienceData = await getExperience();
  const educationData = await getEducation();
  const publicationsData = await getPublications();

  return (
    <>
      <Header headerName={settings.headerName} />
      <main style={{ flex: 1 }}>
        <HeroSection data={heroData} />
        <ExperienceSection data={experienceData} />
        <EducationSection data={educationData} />
        <PublicationsSection data={publicationsData} />
        <ContactSection settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
