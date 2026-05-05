export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/hotmorovs/" },
  { label: "GitHub", href: "https://github.com/RjGutierrezz" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rover-gutierrez-536669249/",
  },
];

export const siteIntro = {
  name: "Actually Edible",
  eyebrow: "Personal recipe archive",
  description:
    "A personal archive for recipes, kitchen notes, and the techniques worth keeping close. Built to feel like a living notebook instead of a disposable feed.",
};

export type RecipeEntry = {
  slug: string;
  title: string;
  category: string;
  time: string;
  difficulty: string;
  summary: string;
  label: string;
  palette: "carrot" | "dough" | "braise" | "mushroom" | "galette" | "pea";
  featured?: boolean;
  inverted?: boolean;
};

export const recipeEntries: RecipeEntry[] = [
  {
    slug: "roasted-heirloom-carrots",
    title: "Roasted Heirloom Carrots",
    category: "Vegetable",
    time: "45 minutes",
    difficulty: "Intermediate",
    summary:
      "A high-heat roast with honey, smoked tahini, and enough bitterness to keep the sweetness honest.",
    label: "Seasonal Highlight",
    palette: "carrot",
    featured: true,
  },
  {
    slug: "overnight-sourdough",
    title: "Overnight Sourdough",
    category: "Technique Study",
    time: "18 hours",
    difficulty: "Advanced",
    summary:
      "A cold-fermented loaf built for flavor, structure, and a crust that keeps its crackle.",
    label: "Technique Study",
    palette: "dough",
  },
  {
    slug: "red-wine-braised-ribs",
    title: "Red Wine Braised Ribs",
    category: "Main Course",
    time: "4 hours",
    difficulty: "Intermediate",
    summary:
      "A slow braise that leans on aromatic vegetables, stock reduction, and patient heat.",
    label: "Main Course",
    palette: "braise",
  },
  {
    slug: "wild-mushroom-risotto",
    title: "Wild Mushroom Risotto",
    category: "Main Course",
    time: "35 minutes",
    difficulty: "Intermediate",
    summary:
      "Creamy rice, layered mushroom stock, and just enough acid at the finish to brighten the pan.",
    label: "Main Course",
    palette: "mushroom",
  },
  {
    slug: "rustic-winter-galette",
    title: "Rustic Winter Galette",
    category: "Pastry",
    time: "60 minutes",
    difficulty: "Easy",
    summary:
      "A free-form tart with a flaky crust and a fruit filling that is cooked just short of jammy.",
    label: "Pastry",
    palette: "galette",
  },
  {
    slug: "early-spring-pea-salad",
    title: "Early Spring Pea & Mint Salad",
    category: "Spring Archive",
    time: "20 minutes",
    difficulty: "Easy",
    summary:
      "A bright study in texture and restraint, held together with mint, lemon, and a cold bowl.",
    label: "Spring Archive",
    palette: "pea",
    featured: true,
    inverted: true,
  },
];

export const chefNote = {
  title: "Chef's Note #104",
  body:
    "The secret to the carrots is not the honey. Cold-shocking the roots before roasting keeps their structure intact while still letting the edges pick up a deep char.",
  signature: "Archivist J.M.",
};

export type NoteEntry = {
  title: string;
  category: string;
  excerpt: string;
  season: string;
};

export const noteEntries: NoteEntry[] = [
  {
    title: "Salt Early, Acid Late",
    category: "Seasoning",
    excerpt:
      "A note on why salting in stages builds depth, while acid works best as a final correction instead of a background noise.",
    season: "Core principle",
  },
  {
    title: "What Browning Is Actually Buying You",
    category: "Heat",
    excerpt:
      "A practical read on fond, moisture management, and when darker color stops improving the pan.",
    season: "Weeknight cooking",
  },
  {
    title: "Keeping Dough Relaxed",
    category: "Pastry",
    excerpt:
      "Rest time is not decorative. It is the difference between a crust that cooperates and one that fights back.",
    season: "Cold months",
  },
  {
    title: "Stock Is a Texture Tool",
    category: "Foundations",
    excerpt:
      "More than flavor, stock gives sauces and braises a body that water cannot imitate.",
    season: "Any season",
  },
];

export const aboutHighlights = [
  "Recipes written for repeat cooking, not one-time clicks.",
  "Technique notes that explain the why behind the pan movement.",
  "An editorial layout that keeps the archive calm, warm, and easy to read.",
];

export const aboutBio = [
  "Actually Edible is where I keep the recipes and kitchen notes I want to return to. It is less about publishing fast and more about building a personal archive that stays useful over time.",
  "The site combines recipe writing with technique notes so each page can hold both the method and the thinking behind it. I want it to feel like a notebook that has been used, edited, and trusted in a real kitchen.",
  "As the archive grows, I will keep refining the writing, the categories, and the visual rhythm so it remains personal, practical, and easy to maintain.",
];
