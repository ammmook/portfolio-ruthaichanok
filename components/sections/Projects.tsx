"use client";

import { useMemo, useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { personalInformation } from "@/data/portfolio";
import { portfolioProjects, projectFilters } from "@/data/projects";
import { uiTranslations } from "@/data/translations";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";

export function Projects() {
  const { t } = useLanguage();
  const [activeFilterId, setActiveFilterId] = useState("all");

  const visibleProjects = useMemo(
    () =>
      portfolioProjects.filter(
        (project) => activeFilterId === "all" || project.filters.includes(activeFilterId),
      ),
    [activeFilterId],
  );

  const { railRef, trackRef, showNext, showPrevious, canShowPrevious, canShowNext } =
    useProjectCarousel(visibleProjects.length);

  return (
    <Section id="projects">
      <Reveal>
        <p className="mb-3.5 font-mono text-xs tracking-[0.18em] text-accent">
          {t(uiTranslations.projects.label)}
        </p>
      </Reveal>

      <div className="mb-7 max-w-[46em]">
        <Reveal>
          <h2 className="mb-3 text-[clamp(28px,4vw,44px)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance">
            {t(uiTranslations.projects.heading)}
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-[15.5px] text-muted">{t(uiTranslations.projects.description)}</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="mb-5.5 flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = filter.id === activeFilterId;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilterId(filter.id)}
                className={`cursor-pointer rounded-full border px-4 py-2.5 font-mono text-xs tracking-[0.06em] transition-all duration-250 ${
                  isActive
                    ? "border-accent bg-accent text-bg"
                    : "border-line text-muted hover:border-accent hover:text-text"
                }`}
              >
                {t(filter.label)}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="relative">
        <CarouselButton
          direction="previous"
          label={t(uiTranslations.projects.previous)}
          onClick={showPrevious}
          isEnabled={canShowPrevious}
        />
        <CarouselButton
          direction="next"
          label={t(uiTranslations.projects.next)}
          onClick={showNext}
          isEnabled={canShowNext}
        />

        <div ref={railRef} data-rail="" className="-mx-0.5 overflow-hidden px-0.5 pt-1.5 pb-4.5">
          <div ref={trackRef} className="flex gap-[18px] will-change-transform">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                artworkAngle={118 + (index % 2) * 8}
              />
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <p className="mt-3.5 font-mono text-xs text-muted">
          {t(uiTranslations.projects.footnote)}{" "}
          <a
            href={personalInformation.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:brightness-110"
          >
            {personalInformation.githubHandle} ↗
          </a>
        </p>
      </Reveal>
    </Section>
  );
}

function CarouselButton({
  direction,
  label,
  onClick,
  isEnabled,
}: {
  direction: "previous" | "next";
  label: string;
  onClick: () => void;
  /** False at the matching end of the list, where there is nowhere left to page. */
  isEnabled: boolean;
}) {
  const isPrevious = direction === "previous";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={!isEnabled}
      className={`absolute top-1/2 z-9 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/70 font-mono text-[17px] text-text shadow-[var(--shadow-soft)] backdrop-blur-[10px] transition-[transform,border-color,color,opacity] duration-250 ${
        isEnabled
          ? `cursor-pointer hover:border-accent hover:text-accent ${
              isPrevious ? "hover:-translate-x-1" : "hover:translate-x-1"
            }`
          : "cursor-not-allowed opacity-35"
      } ${isPrevious ? "-left-1.5" : "-right-1.5"}`}
    >
      <span aria-hidden="true">{isPrevious ? "←" : "→"}</span>
    </button>
  );
}
