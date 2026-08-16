import ArticleLayout, { ArticleSection } from "@/components/ArticleLayout";
import content from "./content.json";

export const metadata = {
  title:
    "Efterårshygge: Indretningstips til en varm og hyggelig efterårsstemning | Studio Brinch",
  description: content.intro,
};

const IMAGE_LABELS: Record<string, string> = {
  "art-hygge-1": "Stue i varm blommefarve",
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

export default function ArtikelEfteraarshyggePage() {
  return (
    <ArticleLayout
      kicker="INSPIRATION  ·  16. SEPTEMBER 2024"
      titleLead="Efterårshygge."
      titleRest="Indretningstips til en varm og hyggelig efterårsstemning"
      hero="/assets/slots/art-hygge-hero.webp"
      heroLabel="Efterårsstue, bred beskæring"
      intro={content.intro}
      lead={content.lead}
      sections={sections}
    />
  );
}
