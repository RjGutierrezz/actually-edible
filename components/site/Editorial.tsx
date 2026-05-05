import Image from "next/image";
import Link from "next/link";

import type { NoteEntry, RecipeEntry } from "@/components/site/content";

type IntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "right";
};

type CalloutProps = {
  title: string;
  body: string;
  signature: string;
};

const visualPalettes: Record<
  RecipeEntry["palette"],
  {
    frame: string;
    canvas: string;
    plate: string;
    garnish: string;
    accent: string;
    label: string;
  }
> = {
  carrot: {
    frame: "from-stone-700 via-stone-800 to-black",
    canvas: "from-stone-50 to-stone-100",
    plate: "bg-white",
    garnish: "bg-[#a34a1b]",
    accent: "bg-[#6e7f2a]",
    label: "CARROT STUDY",
  },
  dough: {
    frame: "from-[#a57542] via-[#b78756] to-[#8c6439]",
    canvas: "from-[#f2dfbf] to-[#d8bd93]",
    plate: "bg-[#ecd6ad]",
    garnish: "bg-[#f6ecd5]",
    accent: "bg-[#8f6338]",
    label: "FERMENTATION",
  },
  braise: {
    frame: "from-stone-700 via-stone-900 to-black",
    canvas: "from-[#4d1f16] to-[#24100d]",
    plate: "bg-[#562419]",
    garnish: "bg-[#f1c46e]",
    accent: "bg-[#8e2e1a]",
    label: "SLOW BRAISE",
  },
  mushroom: {
    frame: "from-stone-700 via-stone-900 to-black",
    canvas: "from-[#ddd4c2] to-[#f5f0e4]",
    plate: "bg-[#f3efe4]",
    garnish: "bg-[#6f7b4a]",
    accent: "bg-[#8e7b61]",
    label: "RISOTTO",
  },
  galette: {
    frame: "from-[#42291b] via-[#23150f] to-black",
    canvas: "from-[#f1d7a8] to-[#b57a48]",
    plate: "bg-[#e7c58f]",
    garnish: "bg-[#7b1832]",
    accent: "bg-[#f6ebd5]",
    label: "PASTRY",
  },
  pea: {
    frame: "from-[#456437] via-[#1d4b22] to-[#123417]",
    canvas: "from-[#dff0d8] to-[#a5cf91]",
    plate: "bg-[#d5ecce]",
    garnish: "bg-[#4f8f2f]",
    accent: "bg-[#82bf55]",
    label: "SPRING",
  },
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PageIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: IntroProps) {
  return (
    <header
      className={classNames(
        "grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end",
        align === "right" && "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
      )}
    >
      <div className={classNames(align === "right" && "lg:order-2")}>
        <p className="font-label text-[0.7rem] uppercase tracking-[0.32em] text-secondary">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-headline text-5xl font-extrabold tracking-[-0.06em] text-primary sm:text-6xl lg:text-7xl">
          {title}
        </h1>
      </div>
      <p
        className={classNames(
          "max-w-xl font-body text-xl italic leading-relaxed text-on-surface/78",
          align === "right" && "lg:order-1 lg:justify-self-start"
        )}
      >
        {description}
      </p>
    </header>
  );
}

export function SectionLink({
  href,
  children,
  tone = "default",
}: {
  href: string;
  children: string;
  tone?: "default" | "inverse";
}) {
  return (
    <Link
      href={href}
      className={classNames(
        "inline-flex w-max items-center gap-3 border-b-2 pb-1 font-label text-xs font-bold uppercase tracking-[0.24em] transition",
        tone === "inverse"
          ? "border-secondary text-on-primary hover:text-on-primary-container"
          : "border-secondary text-primary hover:text-secondary"
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function RecipeVisual({ palette }: { palette: RecipeEntry["palette"] }) {
  const colors = visualPalettes[palette];

  return (
    <div className={classNames("relative overflow-hidden rounded-md bg-gradient-to-br", colors.frame)}>
      <div className="aspect-[4/5] p-5 sm:p-6">
        <div
          className={classNames(
            "relative flex h-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br",
            colors.canvas
          )}
        >
          <div className="absolute inset-x-6 bottom-5 h-4 rounded-full bg-black/12 blur-xl" />
          <div className={classNames("relative h-[72%] w-[72%] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.08)]", colors.plate)}>
            <div className="absolute inset-[18%] rounded-full border border-black/5" />
            <div className="absolute inset-x-[17%] top-[47%] h-[14%] rounded-full bg-black/5 blur-sm" />
            <div className="absolute left-[18%] top-[16%] font-label text-[0.58rem] font-bold uppercase tracking-[0.32em] text-black/30">
              {colors.label}
            </div>
            <div className={classNames("absolute left-[26%] top-[24%] h-[10%] w-[48%] rounded-full opacity-85", colors.accent)} />
            <div className={classNames("absolute left-[18%] top-[40%] h-[12%] w-[64%] rounded-full opacity-90", colors.garnish)} />
            <div className={classNames("absolute left-[34%] top-[57%] h-[10%] w-[34%] rounded-full opacity-85", colors.accent)} />
            <div className={classNames("absolute left-[52%] top-[34%] h-[20%] w-[10%] rotate-[28deg] rounded-full opacity-90", colors.garnish)} />
            <div className={classNames("absolute left-[29%] top-[31%] h-[26%] w-[8%] -rotate-[24deg] rounded-full opacity-85", colors.garnish)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecipeCard({ entry }: { entry: RecipeEntry }) {
  return (
    <article className="bg-surface-container-low p-4 transition hover:bg-surface-container sm:p-6">
      <RecipeVisual palette={entry.palette} />
      <div className="mt-6 space-y-4">
        <p className="font-label text-[0.64rem] font-extrabold uppercase tracking-[0.3em] text-on-surface/42">
          {entry.label}
        </p>
        <div className="space-y-3">
          <h3 className="font-headline text-3xl font-bold tracking-[-0.04em] text-primary">
            {entry.title}
          </h3>
          <p className="font-body text-lg leading-relaxed text-on-surface/74">{entry.summary}</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-2 font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-on-surface/70">
          <span>{entry.time}</span>
          <span className="text-secondary">{entry.difficulty}</span>
        </div>
      </div>
    </article>
  );
}

export function FeaturedRecipe({ entry }: { entry: RecipeEntry }) {
  const containerClasses = entry.inverted
    ? "bg-primary text-on-primary"
    : "bg-surface-container text-on-surface";
  const bodyTextClasses = entry.inverted ? "text-on-primary/78" : "text-on-surface/78";
  const metaTextClasses = entry.inverted ? "text-on-primary/80" : "text-on-surface/75";
  const labelClasses = entry.inverted ? "text-on-primary-container" : "text-secondary";

  return (
    <article className={classNames("p-6 sm:p-8 lg:p-10", containerClasses)}>
      <div
        className={classNames(
          "grid gap-8 lg:items-center",
          entry.inverted ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        <div className={classNames(entry.inverted && "lg:order-2")}>
          <RecipeVisual palette={entry.palette} />
        </div>
        <div className={classNames("space-y-6", entry.inverted && "lg:order-1")}>
          <p className={classNames("font-label text-[0.7rem] font-extrabold uppercase tracking-[0.3em]", labelClasses)}>
            {entry.label}
          </p>
          <div className="space-y-5">
            <h2 className="max-w-md font-headline text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">
              {entry.title}
            </h2>
            <div className={classNames("space-y-2 font-label text-[0.72rem] font-bold uppercase tracking-[0.2em]", metaTextClasses)}>
              <p>{entry.time}</p>
              <p>{entry.difficulty}</p>
            </div>
            <p className={classNames("max-w-lg font-body text-xl italic leading-relaxed", bodyTextClasses)}>
              {entry.summary}
            </p>
          </div>
          <SectionLink href="/recipes" tone={entry.inverted ? "inverse" : "default"}>
            {entry.inverted ? "Explore Method" : "View Archive Entry"}
          </SectionLink>
        </div>
      </div>
    </article>
  );
}

export function ChefNoteCard({ title, body, signature }: CalloutProps) {
  return (
    <aside className="bg-secondary-fixed p-8 text-on-secondary-fixed shadow-[0_20px_32px_rgba(29,28,16,0.08)] rotate-[-1.2deg]">
      <h3 className="font-body text-3xl italic text-on-secondary-fixed-variant">{title}</h3>
      <p className="mt-5 font-body text-lg leading-8">{body}</p>
      <p className="mt-6 font-label text-xs font-bold uppercase tracking-[0.24em] text-on-secondary-fixed-variant">
        {signature}
      </p>
    </aside>
  );
}

export function NoteCard({ note }: { note: NoteEntry }) {
  return (
    <article className="bg-surface-container p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary">{note.category}</p>
        <p className="font-label text-[0.66rem] uppercase tracking-[0.22em] text-on-surface/45">{note.season}</p>
      </div>
      <h3 className="mt-8 font-headline text-3xl font-bold tracking-[-0.04em] text-primary">{note.title}</h3>
      <p className="mt-4 max-w-xl font-body text-lg leading-8 text-on-surface/76">{note.excerpt}</p>
    </article>
  );
}

export function PortraitPanel() {
  return (
    <div className="bg-surface-container p-5 sm:p-6">
      <div className="relative overflow-hidden rounded-md bg-primary/6">
        <Image
          src="/rover-portrait.jpg"
          alt="Portrait of Rover Gutierrez"
          width={1600}
          height={1600}
          className="h-full w-full object-cover saturate-[0.88] sepia-[0.12] contrast-[1.03]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(254,250,229,0)_45%,rgba(254,250,229,0.32)_100%)]" />
      </div>
    </div>
  );
}
