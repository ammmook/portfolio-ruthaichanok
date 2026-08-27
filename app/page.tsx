import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { GithubShowcase } from "@/components/sections/GithubShowcase";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ResumeCallout } from "@/components/sections/ResumeCallout";
import { Skills } from "@/components/sections/Skills";
import { SoftSkills } from "@/components/sections/SoftSkills";

/** Single-page portfolio; each section is anchored for the navigation. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Experience />
      <Education />
      <GithubShowcase />
      <ResumeCallout />
      <Contact />
    </>
  );
}
