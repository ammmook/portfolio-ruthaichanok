"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { githubHighlights, personalInformation } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function GithubShowcase() {
  const { t } = useLanguage();

  return (
    <Section>
      <Reveal>
        <p className="mb-3.5 font-mono text-xs tracking-[0.18em] text-accent">
          {t(uiTranslations.github.label)}
        </p>
      </Reveal>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-semibold tracking-[-0.025em]">
            {t(uiTranslations.github.heading)}
          </h2>
        </Reveal>
        <Reveal>
          <a
            href={personalInformation.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-line px-4.5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-accent"
          >
            {personalInformation.githubHandle} ↗
          </a>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 min-[1000px]:grid-cols-3">
        {githubHighlights.map((highlight) => (
          <Reveal key={highlight.repository}>
            <a
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-[14px] border border-line bg-surface p-5.5 text-text transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent-soft"
            >
              <p className="mb-2.5 font-mono text-[14.5px] text-accent">{highlight.repository}</p>
              <p className="mb-4.5 text-sm text-muted">{t(highlight.description)}</p>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] text-muted">
                <span
                  aria-hidden="true"
                  className="h-[9px] w-[9px] rounded-full"
                  style={{ background: highlight.languageColor }}
                />
                {highlight.languageLabel}
              </span>
            </a>
          </Reveal>
        ))}

        <Reveal>
          <div className="flex h-full flex-col justify-center gap-2 rounded-[14px] border border-dashed border-line p-5.5">
            <p className="font-mono text-[11px] tracking-[0.12em] text-muted">
              {t(uiTranslations.github.noteLabel)}
            </p>
            <p className="text-sm text-muted">{t(uiTranslations.github.note)}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
