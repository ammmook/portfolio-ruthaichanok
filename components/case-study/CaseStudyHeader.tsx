"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { StripeArt } from "@/components/ui/StripeArt";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

/** Title, tagline, links, cover artwork and the meta grid of a case study. */
export function CaseStudyHeader({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <header>
      <Link
        href="/#projects"
        className="mb-9 inline-flex items-center gap-2.5 font-mono text-[12.5px] text-muted transition-colors hover:text-accent"
      >
        {t(uiTranslations.caseStudy.backToProjects)}
      </Link>

      <p className="mb-4 font-mono text-xs tracking-[0.18em] text-accent">
        {t(uiTranslations.caseStudy.overviewLabel)}
      </p>
      <h1 className="mb-4.5 max-w-[22em] text-[clamp(32px,5.6vw,62px)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance">
        {t(project.name)}
      </h1>
      <p className="mb-8 max-w-[38em] text-[clamp(17px,2.1vw,21px)] text-muted text-pretty">
        {t(project.tagline)}
      </p>

      <div className="mb-9 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-3 text-[14.5px] font-semibold text-bg transition-[filter] hover:brightness-110"
          >
            {t(uiTranslations.caseStudy.liveDemo)}
          </a>
        ) : null}
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-5 py-3 text-[14.5px] text-text transition-colors hover:border-accent"
        >
          {t(uiTranslations.caseStudy.github)}
        </a>
      </div>

      <Reveal>
        <StripeArt
          hue={project.hue}
          className="mb-5 aspect-16/8 overflow-hidden rounded-[18px] border border-line"
          label={t(project.coverLabel)}
        />
      </Reveal>

      <dl className="mb-[clamp(48px,7vw,84px)] grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
        {project.meta.map((entry) => (
          <div key={entry.key.en} className="bg-bg p-4.5">
            <dt className="mb-1.5 font-mono text-[10.5px] tracking-[0.12em] text-muted">
              {t(entry.key)}
            </dt>
            <dd className="text-[14.5px] text-text">{t(entry.value)}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
