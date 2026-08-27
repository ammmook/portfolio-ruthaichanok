"use client";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

/** Challenges, results, takeaways and roadmap. */
export function CaseStudyOutcome({ project }: { project: Project }) {
  const { t, tList } = useLanguage();

  return (
    <>
      <CaseStudySection
        label={uiTranslations.caseStudy.challengesLabel}
        heading={uiTranslations.caseStudy.challengesHeading}
      >
        <div className="grid gap-4">
          {project.challenges.map((challenge) => (
            <article
              key={challenge.challenge.en}
              className="overflow-hidden rounded-[18px] border border-line"
            >
              <div className="border-b border-line bg-gradient-to-b from-warn-tint to-transparent p-5.5">
                <p className="mb-2 font-mono text-[10.5px] tracking-[0.12em] text-warn">
                  {t(uiTranslations.caseStudy.challengeTag)}
                </p>
                <p className="text-[16.5px] font-semibold">{t(challenge.challenge)}</p>
              </div>
              <div className="grid gap-px bg-line sm:grid-cols-3">
                <div className="bg-bg p-5">
                  <p className="mb-2 font-mono text-[10.5px] tracking-[0.12em] text-muted">
                    {t(uiTranslations.caseStudy.investigationTag)}
                  </p>
                  <p className="text-sm text-muted">{t(challenge.investigation)}</p>
                </div>
                <div className="bg-bg p-5">
                  <p className="mb-2 font-mono text-[10.5px] tracking-[0.12em] text-accent">
                    {t(uiTranslations.caseStudy.solutionTag)}
                  </p>
                  <p className="text-sm text-text">{t(challenge.solution)}</p>
                </div>
                <div className="bg-bg p-5">
                  <p className="mb-2 font-mono text-[10.5px] tracking-[0.12em] text-muted">
                    {t(uiTranslations.caseStudy.resultTag)}
                  </p>
                  <p className="text-sm text-muted">{t(challenge.result)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.resultsLabel}
        heading={uiTranslations.caseStudy.resultsHeading}
      >
        <ul className="grid gap-3">
          {tList(project.results).map((result) => (
            <li
              key={result}
              className="flex items-start gap-3.5 rounded-xl border border-line bg-surface p-4.5"
            >
              <span aria-hidden="true" className="font-mono text-sm leading-6 text-accent">
                ✓
              </span>
              <p className="text-[15.5px] text-text">{result}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4.5 font-mono text-[11.5px] text-muted">
          {t(uiTranslations.caseStudy.resultsNote)}
        </p>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.learnedLabel}
        heading={uiTranslations.caseStudy.learnedHeading}
      >
        <div className="grid gap-3.5 sm:grid-cols-2 min-[1000px]:grid-cols-4">
          {project.learned.map((takeaway) => (
            <article
              key={takeaway.key.en}
              className="rounded-[14px] border border-line bg-gradient-to-b from-surface to-surface-alt p-5"
            >
              <p className="mb-2.5 font-mono text-[10.5px] tracking-[0.12em] text-accent-2">
                {t(takeaway.key)}
              </p>
              <p className="text-[14.5px] text-muted text-pretty">{t(takeaway.description)}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.futureLabel}
        heading={uiTranslations.caseStudy.futureHeading}
      >
        <div className="grid gap-3.5 sm:grid-cols-3">
          {project.future.map((phase) => (
            <article key={phase.phase.en} className="rounded-[14px] border border-line p-5">
              <p className="mb-3 font-mono text-[10.5px] tracking-[0.12em] text-accent">
                {t(phase.phase)}
              </p>
              <ul className="grid gap-2.5">
                {tList(phase.items).map((item) => (
                  <li key={item} className="text-sm text-muted">
                    — {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </CaseStudySection>
    </>
  );
}
