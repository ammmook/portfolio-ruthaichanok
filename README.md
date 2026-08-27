# Ruthaichanok Kasun — Developer Portfolio

Single-page developer portfolio rebuilt from the original design template with
**Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19**.
No database, no backend: every piece of content is static data inside the project.

## Getting started

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build (project pages are pre-rendered)
npm run lint    # eslint
```

## Project structure

```
app/
├─ layout.tsx                 fonts, metadata, providers, navbar + footer
├─ page.tsx                   the single-page portfolio (sections in order)
├─ globals.css                design tokens (@theme) + shared interaction CSS
└─ projects/[slug]/page.tsx   one statically generated case study per project

components/
├─ layout/       Navbar, Footer, LanguageSwitcher, CursorGlow
├─ sections/     Hero, About, Skills, SoftSkills, Projects, Experience,
│                Education, GithubShowcase, ResumeCallout, Contact
├─ case-study/   the blocks that make up a project case study
├─ ui/           Button, Section, SectionHeading, ProjectCard, SkillTile,
│                Timeline, InfoCard, SoftSkillCard, TagPill, TechIcon,
│                StripeArt, Reveal
└─ providers/    LanguageProvider (language context)

data/
├─ portfolio.ts     personal info, navigation, skills, experience, education
├─ projects.ts      projects + case studies, and the filter list
└─ translations.ts  interface copy (section titles, buttons, labels)

hooks/    useScrollReveal, useTimelineProgress, useProjectCarousel, usePointerPosition
lib/      constants.ts (tokens/helpers), languageStore.ts (localStorage)
types/    portfolio.ts (all data shapes)
```

The flow is always **page → section → component → UI component**, and components
receive their content through props — no portfolio data is hardcoded in the UI.

## Editing the content

- **Text, skills, experience, education** → `data/portfolio.ts`
- **Projects and case studies** → `data/projects.ts` (add an object to
  `portfolioProjects`; the card, the filters and `/projects/<slug>` follow
  automatically)
- **Interface labels** → `data/translations.ts`
- **Colours, fonts, motion** → the `@theme` block in `app/globals.css`

Every visible string is a `{ en, th }` pair, so adding content means writing both
languages in one place.

## Languages

Thai and English, switched with the `EN / ไทย` button in the header. The choice
is stored in the browser under `portfolio-language` (localStorage) and restored
on the next visit. Nothing is sent to a server, and no other data is persisted.

## Adding the resume PDF

The header, hero and resume section link to
`public/resume/Ruthaichanok_Kasun_CV.pdf`. Drop the real CV at that path (the
folder already exists) — or change `personalInformation.resumeUrl` in
`data/portfolio.ts` if you prefer another location.

## Project artwork

Project covers and screenshots currently use the generated stripe artwork from
the original template (`components/ui/StripeArt.tsx`). Replace that component
with a real `next/image` when screenshots are available; the layout does not
need to change.
