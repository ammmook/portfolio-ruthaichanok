"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { workExperiences } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading
        label={uiTranslations.experience.label}
        heading={uiTranslations.experience.heading}
        description={uiTranslations.experience.description}
        className="mb-11"
      />
      <Timeline entries={workExperiences} />

      {/* Entry point to the photo archive at /activities — deliberately not in the nav. */}
      <Reveal>
        <div className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button href="/activities">
            <span aria-hidden="true" className="font-mono">
              ▦
            </span>
            {t(uiTranslations.experience.viewActivities)}
            <span aria-hidden="true" className="font-mono">
              →
            </span>
          </Button>
          <p className="text-[13.5px] text-muted">{t(uiTranslations.experience.viewActivitiesHint)}</p>
        </div>
      </Reveal>
    </Section>
  );
}
