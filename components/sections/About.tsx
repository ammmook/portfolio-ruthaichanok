"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutHighlights, aboutParagraphs } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function About() {
  const { t, tList } = useLanguage();

  return (
    <Section id="about">
      <Reveal>
        <p className="mb-3.5 font-mono text-xs tracking-[0.18em] text-accent">
          {t(uiTranslations.about.label)}
        </p>
      </Reveal>

      <div className="grid gap-[clamp(32px,5vw,64px)] min-[900px]:grid-cols-2">
        <Reveal>
          <h2 className="mb-6 text-[clamp(28px,4vw,44px)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance">
            {t(uiTranslations.about.heading)}
          </h2>
          {tList(aboutParagraphs).map((paragraph) => (
            <p key={paragraph} className="mb-4.5 max-w-[38em] text-[17px] text-muted text-pretty">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="grid content-start gap-3.5 sm:grid-cols-2">
          {aboutHighlights.map((highlight) => (
            <Reveal key={highlight.title.en}>
              <InfoCard
                accent={highlight.accent}
                title={highlight.title}
                description={highlight.description}
                badge={
                  <span
                    aria-hidden="true"
                    className={`font-mono text-[19px] ${
                      highlight.accent === "primary" ? "text-accent" : "text-accent-2"
                    }`}
                  >
                    {highlight.mark}
                  </span>
                }
              />
            </Reveal>
          ))}

          <Reveal className="sm:col-span-2">
            <div className="grid gap-3.5 rounded-[14px] border border-dashed border-line p-5">
              <div>
                <p className="mb-1.5 font-mono text-[11px] tracking-[0.14em] text-muted">
                  {t(uiTranslations.about.currentlyLearningLabel)}
                </p>
                <p className="text-[14.5px] text-text">
                  {t(uiTranslations.about.currentlyLearning)}
                </p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] tracking-[0.14em] text-muted">
                  {t(uiTranslations.about.careerGoalLabel)}
                </p>
                <p className="text-[14.5px] text-text">{t(uiTranslations.about.careerGoal)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
