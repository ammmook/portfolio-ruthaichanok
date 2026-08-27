"use client";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TechIcon } from "@/components/ui/TechIcon";
import { uiTranslations } from "@/data/translations";
import type { ProjectStackGroup } from "@/types/portfolio";

/** "What it's built with" — the stack grouped by layer. */
export function CaseStudyStack({ stack }: { stack: ProjectStackGroup[] }) {
  const { t } = useLanguage();

  return (
    <CaseStudySection
      label={uiTranslations.caseStudy.stackLabel}
      heading={uiTranslations.caseStudy.stackHeading}
      description={uiTranslations.caseStudy.stackDescription}
    >
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.title.en}>
            <div className="mb-3 flex items-baseline gap-2.5 border-b border-line pb-2.5">
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {t(group.title)}
              </h3>
              <span className="font-mono text-[10.5px] text-line">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="grid gap-[7px]">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  data-chip=""
                  title={`${t(item.role)} — ${t(item.usage)}`}
                  className="flex min-w-0 items-center gap-3 rounded-[10px] border border-line px-3.5 py-3"
                >
                  <TechIcon name={item.name} iconSlug={item.iconSlug} />
                  <span data-name="" className="truncate text-[14.2px] font-medium text-text">
                    {item.name}
                  </span>
                  <span className="ml-auto shrink-0 font-mono text-[10px] text-muted">
                    {t(item.role)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
