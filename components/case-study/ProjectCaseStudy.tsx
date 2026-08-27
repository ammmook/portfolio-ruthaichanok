"use client";

import Link from "next/link";

import { CaseStudyDetails } from "@/components/case-study/CaseStudyDetails";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyNarrative } from "@/components/case-study/CaseStudyNarrative";
import { CaseStudyOutcome } from "@/components/case-study/CaseStudyOutcome";
import { CaseStudyStack } from "@/components/case-study/CaseStudyStack";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

interface ProjectCaseStudyProps {
  project: Project;
  nextProject: Project;
}

/** Full case-study page for a single project. */
export function ProjectCaseStudy({ project, nextProject }: ProjectCaseStudyProps) {
  const { t } = useLanguage();

  return (
    <article className="mx-auto max-w-[1080px] px-6 pt-[clamp(30px,5vw,56px)] pb-[clamp(60px,8vw,110px)]">
      <CaseStudyHeader project={project} />
      <CaseStudyStack stack={project.stack} />
      <CaseStudyNarrative project={project} />
      <CaseStudyDetails project={project} />
      <CaseStudyOutcome project={project} />

      <nav
        aria-label="Case study"
        className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line pt-8 font-mono text-[13px]"
      >
        <Link href="/#projects" className="text-muted transition-colors hover:text-accent">
          {t(uiTranslations.caseStudy.backToProjects)}
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="text-accent">
          {t(uiTranslations.caseStudy.nextProject)}: {t(nextProject.shortName)} →
        </Link>
      </nav>
    </article>
  );
}
