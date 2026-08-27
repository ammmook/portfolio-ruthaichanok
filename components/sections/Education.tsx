"use client";

import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { Timeline } from "@/components/ui/Timeline";
import { additionalLearning, educationHistory } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        label={uiTranslations.education.label}
        heading={uiTranslations.education.heading}
        description={uiTranslations.education.description}
        className="mb-11"
      />
      <Timeline entries={educationHistory} />

      <div className="mt-[clamp(48px,7vw,80px)] border-t border-dashed border-line pt-[clamp(36px,5vw,52px)]">
        <SectionHeading
          label={uiTranslations.education.additionalLabel}
          heading={uiTranslations.education.additionalHeading}
          description={uiTranslations.education.additionalDescription}
          accent="secondary"
          headingLevel="h3"
          className="mb-8"
        />
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {additionalLearning.map((topic) => (
            <Reveal key={topic.name.en}>
              <InfoCard
                accent="secondary"
                title={topic.name}
                description={topic.description}
                badge={<TechIcon name={topic.initials} iconSlug={topic.iconSlug} size={26} accent="secondary" />}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
