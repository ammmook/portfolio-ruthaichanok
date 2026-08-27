"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcon";
import { personalInformation } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";
import { usePointerPosition } from "@/hooks/usePointerPosition";

/** Technology logos that drift beside the code card. */
const FLOATING_TECHNOLOGIES = [
  { name: "Java", iconSlug: "openjdk" },
  { name: "React", iconSlug: "react" },
  { name: "Spring", iconSlug: "spring" },
  { name: "PostgreSQL", iconSlug: "postgresql" },
];

/** Landing block: name, role, calls to action and the decorative code card. */
export function Hero() {
  const { t } = useLanguage();
  const pointer = usePointerPosition();

  /** Layered parallax — deeper layers move further, as in the template. */
  const parallax = (depth: number) => {
    if (!pointer.isPointerFine) return undefined;
    const offsetX = (-(pointer.x - 0.5) * depth).toFixed(2);
    const offsetY = (-(pointer.y - 0.4) * depth).toFixed(2);
    return { transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` };
  };

  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1240px] items-center gap-[clamp(40px,6vw,72px)] px-6 pt-[clamp(48px,9vw,110px)] pb-[clamp(60px,8vw,100px)] min-[980px]:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <p className="mb-5.5 font-mono text-[12.5px] tracking-[0.16em] text-accent">
          {t(uiTranslations.hero.greeting)}
        </p>
        <h1 className="mb-4.5 text-[clamp(42px,7.4vw,80px)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
          Ruthaichanok
          <br />
          Kasun
        </h1>
        <p className="mb-6.5 font-mono text-[clamp(13px,1.5vw,15.5px)] tracking-[0.04em] text-muted">
          <span className="text-text">{t(personalInformation.role)}</span>{" "}
          <span className="text-line">/</span> Full-stack <span className="text-line">/</span> Java ·
          React
        </p>
        <p className="mb-8.5 max-w-[33em] text-[clamp(16px,1.9vw,19px)] text-muted text-pretty">
          {t(personalInformation.introduction)}
        </p>

        <div className="mb-8.5 flex flex-wrap gap-3">
          <Button href="/#projects">
            {t(uiTranslations.hero.viewProjects)}
            <span aria-hidden="true" className="font-mono">
              →
            </span>
          </Button>
          <Button
            href={personalInformation.resumeUrl}
            download={personalInformation.resumeFileName}
            variant="outline"
          >
            {t(uiTranslations.hero.downloadResume)}
            <span aria-hidden="true" className="font-mono">
              ↓
            </span>
          </Button>
        </div>

        <ul className="flex flex-wrap gap-5.5 font-mono text-[13px]">
          {[
            { label: "GitHub ↗", href: personalInformation.githubUrl, external: true },
            { label: "LinkedIn ↗", href: personalInformation.linkedinUrl, external: true },
            { label: personalInformation.email, href: `mailto:${personalInformation.email}` },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="border-b border-transparent pb-0.5 text-muted transition-colors hover:border-accent hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="relative min-h-[clamp(300px,44vw,430px)]">
        <div
          className="relative z-2 transition-transform duration-350 ease-out"
          style={parallax(26)}
        >
          <CodeCard />
        </div>
        <div
          className="relative z-3 mt-[-28px] ml-auto w-fit transition-transform duration-500 ease-out"
          style={parallax(52)}
        >
          <TerminalCard />
        </div>
        <div
          className="absolute top-[18%] -left-3.5 z-4 transition-transform duration-600 ease-out"
          style={parallax(76)}
        >
          <div className="flex flex-col gap-3">
            {FLOATING_TECHNOLOGIES.map((technology, index) => (
              <span
                key={technology.name}
                className="animate-floaty"
                style={{ animationDelay: `${index * 0.8}s` }}
              >
                <TechIcon name={technology.name} iconSlug={technology.iconSlug} size={26} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Decorative "Developer.java" window. */
function CodeCard() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3.5 py-[11px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.6_0.12_25)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.12_85)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.14_150)]" />
        <span className="ml-2 font-mono text-[11.5px] text-muted">Developer.java</span>
      </div>
      <pre className="overflow-x-auto px-4.5 py-5 font-mono text-[clamp(11px,1.28vw,13px)] leading-[1.85] text-muted">
        <span className="text-keyword">public class</span> <span className="text-accent">Developer</span>{" "}
        {"{"}
        {"\n  "}
        <span className="text-keyword">String</span> name ={" "}
        <span className="text-accent-2">&quot;Ruthaichanok Kasun&quot;</span>;{"\n  "}
        <span className="text-keyword">String</span> degree ={" "}
        <span className="text-accent-2">&quot;B.Sc. IT, Maejo&quot;</span>;{"\n  "}
        <span className="text-keyword">double</span> gpa = <span className="text-accent-2">3.70</span>;{" "}
        <span className="text-code-comment">{"// first-class"}</span>
        {"\n  "}
        <span className="text-keyword">String[]</span> stack = {"{ "}
        <span className="text-accent-2">&quot;Java&quot;</span>,{" "}
        <span className="text-accent-2">&quot;Spring Boot&quot;</span>,{"\n                     "}
        <span className="text-accent-2">&quot;React&quot;</span>,{" "}
        <span className="text-accent-2">&quot;PostgreSQL&quot;</span> {"};"}
        {"\n\n  "}
        <span className="text-keyword">void</span> <span className="text-accent">build</span>(Idea idea){" "}
        {"{"}
        {"\n    "}
        <span className="text-keyword">while</span> (!idea.shipped()) {"{ learn(); iterate(); }"}
        {"\n  }"}
        {"\n}"}
      </pre>
    </div>
  );
}

/** Decorative git-log terminal. */
function TerminalCard() {
  return (
    <div className="min-w-[min(280px,72vw)] rounded-xl border border-line bg-surface-deep px-4 py-3.5 font-mono text-xs shadow-[var(--shadow-soft)]">
      <div className="text-muted">
        <span className="text-accent">$</span> git log --oneline -2
      </div>
      <div className="mt-1.5 text-text">feat: skill-matching allocation</div>
      <div className="text-text">feat: xception garment classify</div>
      <div className="mt-1.5 text-muted">
        <span className="text-accent">$</span> <span className="animate-blink">▌</span>
      </div>
    </div>
  );
}
