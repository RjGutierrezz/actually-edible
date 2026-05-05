import type { Metadata } from "next";

import { aboutBio, siteIntro } from "@/components/site/content";
import { PageIntro, PortraitPanel, SectionLink } from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="space-y-10 lg:space-y-14">
      <PageIntro
        eyebrow="About the site"
        title="A personal food archive with an editorial point of view."
        description="This project is meant to hold recipes, notes, and kitchen thinking in one place, with a structure that stays readable as the collection grows."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <PortraitPanel />
        <div className="space-y-6 bg-surface-container p-8 sm:p-10">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-secondary">Rover Gutierrez</p>
          <h2 className="font-headline text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
            Building {siteIntro.name} one recipe and one kitchen note at a time.
          </h2>
          <div className="space-y-5">
            {aboutBio.map((paragraph) => (
              <p key={paragraph} className="font-body text-xl leading-8 text-on-surface/78">
                {paragraph}
              </p>
            ))}
          </div>
          <SectionLink href="/notes">Read the notes archive</SectionLink>
        </div>
      </div>
    </section>
  );
}
