import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { personalInformation } from "@/data/portfolio";
import { themeBootstrapScript } from "@/lib/themeStore";

const plexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Portfolio of Ruthaichanok Kasun — full stack developer working with Java, Spring, React and PostgreSQL. Projects, experience, education and contact details.";

export const metadata: Metadata = {
  title: {
    default: `${personalInformation.fullName} — Full Stack Developer`,
    template: `%s · ${personalInformation.fullName}`,
  },
  description: siteDescription,
  keywords: [
    "Ruthaichanok Kasun",
    "full stack developer",
    "full-stack developer",
    "Java",
    "Spring Boot",
    "React",
    "portfolio",
  ],
  authors: [{ name: personalInformation.fullName, url: personalInformation.githubUrl }],
  openGraph: {
    type: "website",
    title: `${personalInformation.fullName} — Full Stack Developer`,
    description: siteDescription,
    siteName: `${personalInformation.fullName} Portfolio`,
    locale: "en_US",
    alternateLocale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInformation.fullName} — Full Stack Developer`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${plexSansThai.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Applies the stored theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <CursorGlow />
            <Navbar />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
