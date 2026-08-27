"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { personalInformation } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function ResumeCallout() {
  const { t } = useLanguage();

  return (
    <Section id="resume">
      <Reveal>
        <p className="mb-3.5 font-mono text-xs tracking-[0.18em] text-accent">
          {t(uiTranslations.resume.label)}
        </p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] border border-line bg-surface bg-[radial-gradient(120%_140%_at_100%_0%,oklch(0.82_0.16_150/.1),transparent_60%)] p-[clamp(26px,4vw,44px)]">
          <div>
            <h2 className="mb-2 text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em]">
              {t(uiTranslations.resume.heading)}
            </h2>
            <p className="text-[15.5px] text-muted">{t(uiTranslations.resume.description)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={personalInformation.resumeUrl} external variant="outline" size="sm">
              {t(uiTranslations.resume.view)}
            </Button>
            <Button
              href={personalInformation.resumeUrl}
              download={personalInformation.resumeFileName}
              size="sm"
            >
              {t(uiTranslations.resume.download)}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
