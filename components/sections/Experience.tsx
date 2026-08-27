"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { workExperiences } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        label={uiTranslations.experience.label}
        heading={uiTranslations.experience.heading}
        description={uiTranslations.experience.description}
        className="mb-11"
      />
      <Timeline entries={workExperiences} />
    </Section>
  );
}
