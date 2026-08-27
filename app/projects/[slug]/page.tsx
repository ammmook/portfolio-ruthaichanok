import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/case-study/ProjectCaseStudy";
import { findNextProject, findProjectBySlug, portfolioProjects } from "@/data/projects";

/** Pre-render one page per project at build time. */
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name.en,
    description: project.tagline.en,
    openGraph: {
      type: "article",
      title: project.name.en,
      description: project.tagline.en,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = findProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} nextProject={findNextProject(slug)} />;
}
