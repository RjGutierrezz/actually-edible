import type { Metadata } from "next";

import { chefNote, noteEntries } from "@/components/site/content";
import { ChefNoteCard, NoteCard, PageIntro, SectionLink } from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "Notes",
};

export default function NotesPage() {
  return (
    <section className="space-y-10 lg:space-y-14">
      <PageIntro
        eyebrow="Technique archive"
        title="Notes for the habits behind the recipes."
        description="Short reads on seasoning, timing, heat, texture, and the small corrections that quietly make food better."
        align="right"
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <NoteCard note={noteEntries[0]} />
        </div>
        <div className="lg:col-span-5">
          <ChefNoteCard {...chefNote} />
        </div>
        <div className="lg:col-span-5 lg:mt-10">
          <NoteCard note={noteEntries[1]} />
        </div>
        <div className="lg:col-span-7">
          <NoteCard note={noteEntries[2]} />
        </div>
        <div className="lg:col-span-12">
          <NoteCard note={noteEntries[3]} />
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-surface-container p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
        <div className="space-y-4">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-secondary">Writing pattern</p>
          <h2 className="max-w-2xl font-headline text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
            Keep each note focused on one kitchen idea, then link it back to a real dish.
          </h2>
        </div>
        <SectionLink href="/recipes">See the recipe archive</SectionLink>
      </div>
    </section>
  );
}
