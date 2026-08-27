"use client";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StripeArt } from "@/components/ui/StripeArt";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

/** Features, screenshots, architecture and development process. */
export function CaseStudyDetails({ project }: { project: Project }) {
  const { t, tList } = useLanguage();

  return (
    <>
      <CaseStudySection
        label={uiTranslations.caseStudy.featuresLabel}
        heading={uiTranslations.caseStudy.featuresHeading}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {project.features.map((feature, index) => (
            <article
              key={feature.title.en}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <StripeArt
                hue={project.hue}
                degrees={100 + index * 14}
                className="aspect-16/7 border-b border-line"
              />
              <div className="p-5">
                <h3 className="mb-2 text-[17px] font-semibold">{t(feature.title)}</h3>
                <p className="text-sm text-muted text-pretty">{t(feature.description)}</p>
              </div>
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
          {tList(project.screenshots).map((label, index) => (
            <StripeArt
              key={label}
              hue={project.hue}
              degrees={110 + index * 12}
              label={label}
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
