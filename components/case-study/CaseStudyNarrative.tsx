"use client";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

/** Overview, problem, goals and the solution flow. */
export function CaseStudyNarrative({ project }: { project: Project }) {
  const { t, tList } = useLanguage();

  return (
    <>
      <CaseStudySection
        label={uiTranslations.caseStudy.overviewSectionLabel}
        heading={project.overviewTitle}
      >
        {tList(project.overview).map((paragraph) => (
          <p key={paragraph} className="mb-4 max-w-[40em] text-[17px] text-muted text-pretty">
            {paragraph}
          </p>
        ))}
        <div className="mt-6 border-l-2 border-accent py-1 pl-4.5">
          <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-muted">
            {t(uiTranslations.caseStudy.usersLabel)}
          </p>
          <p className="max-w-[38em] text-base text-text">{t(project.users)}</p>
        </div>
      </CaseStudySection>

      <Reveal className="mb-[clamp(48px,7vw,84px)]">
        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-warn">
          {t(uiTranslations.caseStudy.problemLabel)}
        </p>
        <div className="rounded-[18px] border border-[oklch(0.4_0.09_35)] bg-gradient-to-b from-[oklch(0.75_0.14_35/.07)] to-transparent p-[clamp(24px,3.5vw,38px)]">
          <h2 className="mb-4.5 max-w-[26em] text-[clamp(22px,3.1vw,32px)] font-semibold tracking-[-0.02em] text-balance">
            {t(project.problemTitle)}
          </h2>
          <ul className="grid gap-3">
            {tList(project.problems).map((problem) => (
              <li key={problem} className="flex max-w-[42em] gap-3 text-base text-muted">
                <span aria-hidden="true" className="font-mono text-warn">
                  ×
                </span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <CaseStudySection
        label={uiTranslations.caseStudy.goalLabel}
        heading={uiTranslations.caseStudy.goalHeading}
      >
        <div className="grid gap-3.5 sm:grid-cols-2 min-[1000px]:grid-cols-4">
          {project.goals.map((goal) => (
            <article
              key={goal.number}
              className="rounded-[14px] border border-line bg-surface p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent-soft"
            >
              <p className="mb-2.5 font-mono text-[11px] text-accent">{goal.number}</p>
              <h3 className="mb-1.5 text-base font-semibold">{t(goal.title)}</h3>
              <p className="text-[13.5px] text-muted">{t(goal.description)}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.solutionLabel}
        heading={project.solutionTitle}
      >
        <p className="mb-8 max-w-[40em] text-[17px] text-muted text-pretty">{t(project.solution)}</p>
        <ol className="flex flex-wrap items-stretch gap-2.5">
          {project.flow.map((step) => (
            <li
              key={step.number}
              className="grid flex-[1_1_130px] content-start gap-1.5 rounded-xl border border-line bg-surface p-4"
            >
              <span className="font-mono text-[10.5px] text-accent">{step.number}</span>
              <span className="text-[14.5px] font-semibold">{t(step.title)}</span>
              <span className="text-[12.5px] text-muted">{t(step.description)}</span>
            </li>
          ))}
        </ol>
      </CaseStudySection>
    </>
  );
}
