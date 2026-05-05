import Link from "next/link";
import type { Metadata } from "next";

import {
  aboutHighlights,
  chefNote,
  noteEntries,
  recipeEntries,
  siteIntro,
} from "@/components/site/content";
import {
  ChefNoteCard,
  FeaturedRecipe,
  NoteCard,
  PageIntro,
  PortraitPanel,
  RecipeCard,
  SectionLink,
} from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "Home",
};

const featuredRecipe = recipeEntries[0];
const springRecipe = recipeEntries[5];

export default function Home() {
  return (
    <>
      <section className="space-y-10 lg:space-y-14">
        <PageIntro
          eyebrow={siteIntro.eyebrow}
          title="Recipes and notes written to stay useful."
          description="This archive is built for repeat cooking: dependable methods, practical notes, and a visual rhythm that makes everything feel deliberate instead of disposable."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <FeaturedRecipe entry={featuredRecipe} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <RecipeCard entry={recipeEntries[1]} />
            <ChefNoteCard {...chefNote} />
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-6">
          <p className="font-label text-[0.7rem] uppercase tracking-[0.32em] text-secondary">About the archive</p>
          <h2 className="max-w-md font-headline text-4xl font-extrabold tracking-[-0.06em] text-primary sm:text-5xl">
            A warmer personal site, built like an editorial notebook.
          </h2>
          <div className="space-y-4">
            {aboutHighlights.map((highlight) => (
              <p key={highlight} className="max-w-lg font-body text-xl leading-8 text-on-surface/78">
                {highlight}
              </p>
            ))}
          </div>
          <SectionLink href="/about">Read the About page</SectionLink>
        </div>
        <PortraitPanel />
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="font-label text-[0.7rem] uppercase tracking-[0.32em] text-secondary">Kitchen notes</p>
            <h2 className="font-headline text-4xl font-extrabold tracking-[-0.06em] text-primary sm:text-5xl">
              Technique notes for the quiet details.
            </h2>
          </div>
          <SectionLink href="/notes">Open the notes archive</SectionLink>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {noteEntries.slice(0, 2).map((note) => (
            <NoteCard key={note.title} note={note} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-label text-[0.7rem] uppercase tracking-[0.32em] text-secondary">Seasonal archive</p>
            <h2 className="mt-4 font-headline text-4xl font-extrabold tracking-[-0.06em] text-primary sm:text-5xl">
              A second feature for the spring side of the kitchen.
            </h2>
          </div>
          <Link
            href="/recipes"
            className="w-max bg-primary px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:bg-primary-container"
          >
            Browse Recipes
          </Link>
        </div>
        <FeaturedRecipe entry={springRecipe} />
      </section>
    </>
  );
}
