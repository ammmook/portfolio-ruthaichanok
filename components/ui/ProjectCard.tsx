"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { StripeArt } from "@/components/ui/StripeArt";
import { TagPill } from "@/components/ui/TagPill";
import { uiTranslations } from "@/data/translations";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  /** Varies the placeholder artwork between repeated copies in the carousel. */
  artworkAngle?: number;
  /** Duplicated carousel copies must stay out of the tab order. */
  isDuplicate?: boolean;
}

/** Card linking to the full case study at /projects/[slug]. */
export function ProjectCard({ project, artworkAngle = 118, isDuplicate = false }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-card=""
      tabIndex={isDuplicate ? -1 : undefined}
      aria-hidden={isDuplicate || undefined}
      className="group block flex-[0_0_clamp(258px,29vw,320px)] overflow-hidden rounded-2xl border border-line bg-surface text-text transition-[transform,border-color] duration-400 ease-out hover:-translate-y-1 hover:border-accent-soft"
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-[oklch(0.19_0.007_70)]">
        <StripeArt hue={project.hue} degrees={artworkAngle} className="absolute inset-0" />
        <span className="absolute top-3 left-3 rounded-full border border-line bg-bg/85 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.1em] text-muted">
          {t(project.category)}
        </span>
      </div>
      <div className="p-4">
        <div className="mb-2.5 flex justify-between gap-2.5 font-mono text-[10px] tracking-[0.08em] text-muted">
          <span>{project.year}</span>
          <span>{t(project.status)}</span>
        </div>
        <h3 className="mb-2 text-[17.5px] leading-[1.3] font-semibold tracking-[-0.015em]">
          {t(project.shortName)}
        </h3>
        <p className="mb-3.5 text-[13.5px] text-muted text-pretty">{t(project.blurb)}</p>
        <div className="mb-3.5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((technology) => (
            <TagPill key={technology} size="xs">
              {technology}
            </TagPill>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
          {t(uiTranslations.projects.viewProject)}
          <span
            aria-hidden="true"
            className="font-mono transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
