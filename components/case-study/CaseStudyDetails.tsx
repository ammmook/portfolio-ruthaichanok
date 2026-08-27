"use client";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

/** Features, screenshots, architecture and development process. */
export function CaseStudyDetails({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <>
      <CaseStudySection
        label={uiTranslations.caseStudy.featuresLabel}
        heading={uiTranslations.caseStudy.featuresHeading}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <article
              key={feature.title.en}
              className="grid content-start gap-2.5 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent-soft"
            >
              <span aria-hidden="true" className="font-mono text-[13px] tracking-[0.08em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[17px] leading-[1.3] font-semibold">{t(feature.title)}</h3>
              <p className="text-sm text-muted text-pretty">{t(feature.description)}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.screenshotsLabel}
        heading={uiTranslations.caseStudy.screenshotsHeading}
      >
        <p className="mb-5 font-mono text-[11.5px] text-muted">
          {t(uiTranslations.caseStudy.scrollHint)}
        </p>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3.5">
          {project.screenshots.map((screenshot, index) => (
            <ScreenshotFrame
              key={screenshot.label.en}
              hue={project.hue}
              degrees={110 + index * 12}
              label={t(screenshot.label)}
              imageUrl={screenshot.imageUrl}
              sizes="(max-width: 768px) 84vw, 560px"
              className="aspect-16/10 flex-[0_0_min(560px,84vw)] snap-center overflow-hidden rounded-[14px] border border-line"
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.architectureLabel}
        heading={uiTranslations.caseStudy.architectureHeading}
      >
        <ol className="grid gap-3 rounded-[18px] border border-line bg-surface p-[clamp(20px,3vw,32px)]">
          {project.architecture.map((layer) => (
            <li
              key={layer.number}
              className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-xl border border-line bg-bg p-4"
            >
              <span className="pt-0.5 font-mono text-[11px] text-accent">{layer.number}</span>
              <div>
                <p className="mb-1.5 text-[15.5px] font-semibold">{t(layer.title)}</p>
                <p className="text-[13.8px] text-muted">{t(layer.description)}</p>
              </div>
            </li>
          ))}
        </ol>
      </CaseStudySection>

      <CaseStudySection
        label={uiTranslations.caseStudy.processLabel}
        heading={uiTranslations.caseStudy.processHeading}
      >
        <ol className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-7">
          {project.process.map((step) => (
            <li
              key={step.number}
              className="grid content-start gap-2 rounded-xl border border-line p-4"
            >
              <span className="font-mono text-[10.5px] text-muted">{step.number}</span>
              <span className="text-[14.5px] font-semibold">{t(step.title)}</span>
              <span className="text-[12.5px] text-muted">{t(step.description)}</span>
            </li>
          ))}
        </ol>
      </CaseStudySection>
    </>
  );
}
