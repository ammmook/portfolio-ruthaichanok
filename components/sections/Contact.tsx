"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { personalInformation } from "@/data/portfolio";
import { uiTranslations } from "@/data/translations";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,oklch(0.82_0.16_150/.11),transparent_62%)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-[22%] left-[8%] h-[220px] w-[220px] animate-floaty rounded-full border border-[oklch(0.4_0.07_150)] opacity-50"
      />
      <span
        aria-hidden="true"
        className="absolute right-[6%] bottom-[16%] h-[130px] w-[130px] animate-floaty rounded-full border border-dashed border-[oklch(0.4_0.07_65)] opacity-50 [animation-delay:1.5s] [animation-duration:11s]"
      />

      <div className="relative mx-auto max-w-[900px] px-6 py-[clamp(64px,10vw,130px)] text-center">
        <Reveal>
          <p className="mb-5 font-mono text-xs tracking-[0.18em] text-accent">
            {t(uiTranslations.contact.label)}
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mb-5 text-[clamp(38px,7.4vw,84px)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
            {t(uiTranslations.contact.heading)}
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mb-9.5 max-w-[26em] text-[clamp(16px,2vw,19.5px)] text-muted text-pretty">
            {t(uiTranslations.contact.description)}
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-13 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${personalInformation.email}`}>
              {t(uiTranslations.contact.emailMe)}
              <span aria-hidden="true" className="font-mono">
                →
              </span>
            </Button>
            <Button href={personalInformation.githubUrl} external variant="outline">
              {t(uiTranslations.contact.viewGithub)}
              <span aria-hidden="true" className="font-mono">
                ↗
              </span>
            </Button>
            <Button href={personalInformation.linkedinUrl} external variant="outline">
              {t(uiTranslations.contact.connectLinkedin)}
              <span aria-hidden="true" className="font-mono">
                ↗
              </span>
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <address className="flex flex-col items-center gap-2 not-italic">
            <span aria-hidden="true" className="text-lg leading-none text-accent">
              ✦
            </span>
            <p className="text-lg font-semibold">{personalInformation.fullName}</p>
            <p className="font-mono text-[12.5px] text-muted">
              {t(personalInformation.role)} · {t(personalInformation.location)}
            </p>
            <a
              href={`mailto:${personalInformation.email}`}
              className="mt-1.5 font-mono text-[12.5px] text-accent hover:brightness-110"
            >
              {personalInformation.email}
            </a>
          </address>
        </Reveal>
      </div>
    </section>
  );
}
