import type { Metadata } from "next";

import { ActivitiesArchive } from "@/components/activities/ActivitiesArchive";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Photos and moments from teaching labs, workshops, student club work and the MFEC cooperative education programme.",
  openGraph: {
    type: "article",
    title: "Activities",
    description: "Activities, experiences and memorable moments along the way.",
  },
};

/** Standalone photo archive, linked from the experience section rather than the nav. */
export default function ActivitiesPage() {
  return <ActivitiesArchive />;
}
