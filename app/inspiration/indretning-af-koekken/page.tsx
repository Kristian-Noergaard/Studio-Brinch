import ArticleLayout, { ArticleSection } from "@/components/ArticleLayout";
import content from "./content.json";

export const metadata = {
  title:
    "Indretning af køkken: Sådan får du et køkken, hvor form og funktion mødes — Studio Brinch",
  description: content.intro,
};

const IMAGE_LABELS: Record<string, string> = {
  "art-koekken-1": "Køkkenopbevaring med åbne hylder",
  "art-koekken-2": "Køkken med personlige detaljer",
};

const sections: ArticleSection[] = content.sections.map((s) => ({
  n: s.n,
  title: s.title!,
  paragraphs: s.paragraphs,
  quote: s.quote ?? undefined,
  image: s.image
    ? { src: `/assets/slots/${s.image}.webp`, label: IMAGE_LABELS[s.image] }
    : undefined,
}));

export default function ArtikelKoekkenPage() {
  return (
    <ArticleLayout
      kicker="GUIDE  ·  16. SEPTEMBER 2024"
      titleLead="Indretning af køkken."
      titleRest="Sådan får du et køkken, hvor form og funktion mødes"
      hero="/assets/slots/art-koekken-hero.webp"
      heroLabel="Snedkerkøkken, bred beskæring"
      intro={content.intro}
      lead={content.lead}
      sections={sections}
    />
  );
}
