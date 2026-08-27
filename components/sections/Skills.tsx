"use client";

import { useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillTile } from "@/components/ui/SkillTile";
import { technicalSkillGroups } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function Skills() {
  const { t } = useLanguage();
  // Only one tile stays open at a time — matters on touch devices, where the
  // panel is opened by tapping instead of hovering.
  const [openSkillName, setOpenSkillName] = useState<string | null>(null);

  return (
    <Section id="skills">
      <SectionHeading
        label={uiTranslations.skills.label}
        heading={uiTranslations.skills.heading}
        description={uiTranslations.skills.description}
        className="mb-12"
      />

      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technicalSkillGroups.map((group) => (
          <Reveal key={group.title.en}>
            <div className="mb-3 flex items-baseline gap-2.5 border-b border-line pb-2.5">
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {t(group.title)}
              </h3>
              <span className="font-mono text-[10.5px] text-line">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-[7px]">
              {group.items.map((skill) => (
                <SkillTile
                  key={`${group.title.en}-${skill.name}`}
                  skill={skill}
                  isOpen={openSkillName === `${group.title.en}-${skill.name}`}
                  onToggle={() =>
                    setOpenSkillName((current) =>
                      current === `${group.title.en}-${skill.name}`
                        ? null
                        : `${group.title.en}-${skill.name}`,
                    )
                  }
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
