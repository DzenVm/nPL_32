import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { DemoSection } from "@/components/home/DemoSection";
import { MechanicsSteps } from "@/components/home/MechanicsSteps";
import { DeepDescription } from "@/components/home/DeepDescription";
import { ProgressionMap } from "@/components/home/ProgressionMap";
import { AccessibilitySection } from "@/components/home/AccessibilitySection";
import { ForWhom } from "@/components/home/ForWhom";
import { DevLog } from "@/components/home/DevLog";
import { GuidesTeaser } from "@/components/home/GuidesTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "przeglądarkowa łamigłówka ze świetlnymi pierścieniami",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    genre: "Puzzle",
    inLanguage: "pl",
    isAccessibleForFree: true,
    playMode: "SinglePlayer",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <DemoSection />
      <MechanicsSteps />
      <DeepDescription />
      <ProgressionMap />
      <AccessibilitySection />
      <ForWhom />
      <DevLog />
      <GuidesTeaser />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
