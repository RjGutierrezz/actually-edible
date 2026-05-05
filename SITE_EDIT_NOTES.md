# Actually Edible Personal Edit Notes

This file is for you to quickly see where to change content and styling without digging through the whole project.

## Main Content File

Most text content lives in `components/site/content.ts`.

Edit this file when you want to change:

- navigation labels and links
- social links
- homepage intro copy
- recipe card titles, categories, time, difficulty, and summaries
- chef's note text
- notes page content
- about page highlights and biography paragraphs

## Main UI Components

Shared visual components live in `components/site/Editorial.tsx`.

Edit this file when you want to change:

- page header layout (`PageIntro`)
- recipe card appearance (`RecipeCard`)
- featured recipe blocks (`FeaturedRecipe`)
- the handwritten-style note card (`ChefNoteCard`)
- note archive cards (`NoteCard`)
- the portrait styling (`PortraitPanel`)
- the abstract recipe artwork colors (`visualPalettes` and `RecipeVisual`)

If you want real food photos later, the easiest path is:

1. Put the images in `public/`
2. Replace the `RecipeVisual` component with `next/image` usage for each recipe
3. Add an image path field to each recipe object in `components/site/content.ts`

## Layout and Navigation

The site shell lives in `components/layout/Navigator.tsx`.

Edit this file when you want to change:

- top navigation layout
- active nav styling
- footer text and links
- overall page width and spacing

## Global Colors and Fonts

Global design tokens live in `app/globals.css`.

Edit this file when you want to change:

- parchment background colors
- green and terracotta brand colors
- shared font variables
- page-wide atmosphere like the soft background glow

## Fonts and Metadata

Global fonts and site metadata live in `app/layout.tsx`.

Edit this file when you want to change:

- site title template
- site description
- the headline font (`Manrope`)
- the body font (`Newsreader`)

## Page Files

Each route still has its own page file so the structure stays easy to follow:

- `app/page.tsx`: homepage
- `app/recipes/page.tsx`: recipes archive
- `app/notes/page.tsx`: notes archive
- `app/about/page.tsx`: about page

Use these files when you want to change the order of sections on a page.

## Portrait Image

Your portrait is now used from:

- `public/rover-portrait.jpg`

If you replace that file with another image using the same name, the site will keep working.

## Good Next Steps

If you want to evolve the site later, the most natural next edits are:

1. Replace abstract recipe artwork with real food photography.
2. Add dynamic recipe detail pages under `app/recipes/[slug]/page.tsx`.
3. Add MDX or CMS-backed notes if you want to write directly in content files.
4. Add a favicon and metadata images for sharing.
