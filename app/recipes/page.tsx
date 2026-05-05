import type { Metadata } from "next";

import { chefNote, recipeEntries } from "@/components/site/content";
import {
  ChefNoteCard,
  FeaturedRecipe,
  PageIntro,
  RecipeCard,
} from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "Recipes",
};

const [featuredRecipe, sourdoughRecipe, braiseRecipe, mushroomRecipe, galetteRecipe, springRecipe] =
  recipeEntries;

const filters = ["All Recipes", "Main Course", "Breakfast", "Fermentation", "Pastry"];

export default function Recipe() {
  return (
    <section className="space-y-10 lg:space-y-14">
      <PageIntro
        eyebrow="Recipe archive"
        title="Recipes Library"
        description="A curated collection of seasonal techniques, practical methods, and dishes worth returning to when the kitchen needs something steady."
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={[
                "px-5 py-2.5 font-label text-xs font-bold uppercase tracking-[0.22em] transition",
                index === 0
                  ? "bg-primary text-white"
                  : "bg-surface-container hover:bg-surface-container-high text-primary",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 self-start lg:self-auto">
          <span className="font-label text-[0.68rem] font-bold uppercase tracking-[0.24em] text-on-surface/48">
            Sort by:
          </span>
          <span className="font-body text-xl italic text-primary">Newest Additions</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FeaturedRecipe entry={featuredRecipe} />
        </div>
        <div className="lg:col-span-4">
          <RecipeCard entry={sourdoughRecipe} />
        </div>
        <div className="lg:col-span-4">
          <RecipeCard entry={braiseRecipe} />
        </div>
        <div className="lg:col-span-4 lg:self-center">
          <ChefNoteCard {...chefNote} />
        </div>
        <div className="lg:col-span-4">
          <RecipeCard entry={mushroomRecipe} />
        </div>
        <div className="lg:col-span-4">
          <RecipeCard entry={galetteRecipe} />
        </div>
        <div className="lg:col-span-8">
          <FeaturedRecipe entry={springRecipe} />
        </div>
      </div>
    </section>
  );
}
