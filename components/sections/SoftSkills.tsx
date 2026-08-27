"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoftSkillCard } from "@/components/ui/SoftSkillCard";
import { softSkills } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function SoftSkills() {
  return (
    <Section id="how">
      <SectionHeading
        label={uiTranslations.softSkills.label}
        heading={uiTranslations.softSkills.heading}
        description={uiTranslations.softSkills.description}
        className="mb-11"
      />
      <div className="grid gap-4 sm:grid-cols-2 min-[1000px]:grid-cols-3">
        {softSkills.map((softSkill) => (
          <Reveal key={softSkill.name.en}>
            <SoftSkillCard softSkill={softSkill} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
