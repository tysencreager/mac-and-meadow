// Mac & Meadow — "Find Your Tallow" recommendation engine.
//
// Pure, client-side logic: answers -> { primary, addOns[] }.
// All product data (name, blurb, image, checkout URL, score weights) lives in
// the PRODUCTS config below so future tweaks are a single-file edit.
//
// ⛳ Checkout URLs: Square Online product links are not guessable and must be
// copied from the live store. They default to the store root below — paste each
// product's exact product-page URL from https://macandmeadowco.square.site/
// when available (the Therapy Balm link exists once it's added to the store).

import heavenSentImg from "@assets/quiz-heaven-sent.webp";
import lumberjackImg from "@assets/quiz-lumberjack.webp";
import bareBonesImg from "@assets/quiz-bare-bones.webp";
import dreamerImg from "@assets/quiz-the-dreamer.webp";
import purgeImg from "@assets/quiz-the-purge.webp";
import balmMintImg from "@assets/therapy-balm-meadow-mint.webp";
import balmRidgeImg from "@assets/therapy-balm-meadow-ridge.webp";
import balmBareBonesImg from "@assets/therapy-balm-bare-bones.webp";

export const STORE_URL = "https://macandmeadowco.square.site/";

export type ProductKey = "HS" | "LJ" | "BB" | "DR" | "PG" | "TB";
export type AnswerKey = "A" | "B" | "C" | "D" | "E" | "F";
export type QuestionId = "q1" | "q2" | "q3" | "q4" | "q5" | "q6";
export type Answers = Partial<Record<QuestionId, AnswerKey>>;

export interface Product {
  key: ProductKey;
  name: string;
  blurb: string;
  image: string;
  checkoutUrl: string;
  /** Core line products can be the primary recommendation. */
  core: boolean;
}

export const PRODUCTS: Record<ProductKey, Product> = {
  HS: {
    key: "HS",
    name: "Heaven Sent",
    blurb:
      "For a radiant, youthful glow — Heaven Sent targets fine lines, uneven tone, and deep dehydration while you moisturize, face and body.",
    image: heavenSentImg,
    checkoutUrl: STORE_URL,
    core: true,
  },
  LJ: {
    key: "LJ",
    name: "The Lumberjack",
    blurb:
      "All the anti-aging, deep-moisture power of our hero balm in a grounding, woodsy scent — never heavy or greasy.",
    image: lumberjackImg,
    checkoutUrl: STORE_URL,
    core: true,
  },
  BB: {
    key: "BB",
    name: "Bare Bones",
    blurb:
      "Pure, fragrance-free moisture for picky, sensitive skin — barrier-safe and gentle enough for eczema, cracked heels, and more.",
    image: bareBonesImg,
    checkoutUrl: STORE_URL,
    core: true,
  },
  DR: {
    key: "DR",
    name: "The Dreamer",
    blurb:
      "Your nighttime reset — deep moisture plus magnesium and lavender to help your body unwind and your skin wake up soft.",
    image: dreamerImg,
    checkoutUrl: STORE_URL,
    core: true,
  },
  PG: {
    key: "PG",
    name: "The Purge",
    blurb:
      "Prep your skin so everything after works harder — this sugar scrub buffs away buildup so your tallow absorbs deeper.",
    image: purgeImg,
    checkoutUrl: STORE_URL,
    core: false,
  },
  TB: {
    key: "TB",
    name: "Therapy Balm",
    blurb:
      "Targeted relief for the spots that need it most — lips, hands, heels, cuticles, elbows. Keep one close and apply as needed.",
    image: balmMintImg, // overridden per recommended variant
    checkoutUrl: STORE_URL,
    core: true,
  },
};

// Therapy Balm variants — selected from the Q4 scent answer once the balm is
// recommended.
export type BalmVariant = "Meadow Mint" | "Meadow Ridge" | "Bare Bones";

export const BALM_VARIANTS: Record<
  BalmVariant,
  { tagline: string; image: string }
> = {
  "Meadow Mint": { tagline: "Fresh & cooling", image: balmMintImg },
  "Meadow Ridge": { tagline: "Warm & calming", image: balmRidgeImg },
  "Bare Bones": { tagline: "Fragrance-free", image: balmBareBonesImg },
};

export function balmVariantForScent(q4?: AnswerKey): BalmVariant {
  if (q4 === "D") return "Bare Bones";
  if (q4 === "B" || q4 === "C") return "Meadow Ridge";
  return "Meadow Mint"; // A "warm & sweet" or default
}

// Scoring matrix: answer -> product points.
type Weights = Partial<Record<ProductKey, number>>;
const SCORING: Record<QuestionId, Partial<Record<AnswerKey, Weights>>> = {
  q1: {
    A: { HS: 2, LJ: 2 },
    B: { HS: 1, LJ: 1, BB: 1 },
    C: { BB: 3 },
    D: { TB: 3 },
    E: { DR: 3 },
    F: { PG: 3 },
  },
  q2: {
    A: { HS: 1, LJ: 1 },
    B: { HS: 1, BB: 1, TB: 1 },
    C: { BB: 2 },
    D: { HS: 2, LJ: 1 },
  },
  q3: {
    A: { HS: 2, LJ: 1, BB: 1 },
    B: { HS: 1, LJ: 1, BB: 1 },
    C: { TB: 2, BB: 1 },
    D: { DR: 2 },
  },
  q4: {
    A: { HS: 2 },
    B: { LJ: 2 },
    C: { DR: 2 },
    D: { BB: 2 },
  },
  q5: {
    A: { PG: 2, TB: 1 },
    B: {},
  },
  q6: {
    B: { LJ: 1 },
  },
};

const CORE_KEYS: ProductKey[] = ["HS", "LJ", "BB", "DR", "TB"];

export function scoreAnswers(answers: Answers): Record<ProductKey, number> {
  const scores: Record<ProductKey, number> = {
    HS: 0,
    LJ: 0,
    BB: 0,
    DR: 0,
    PG: 0,
    TB: 0,
  };
  (Object.keys(SCORING) as QuestionId[]).forEach((q) => {
    const ans = answers[q];
    if (!ans) return;
    const weights = SCORING[q][ans];
    if (!weights) return;
    (Object.keys(weights) as ProductKey[]).forEach((k) => {
      scores[k] += weights[k] ?? 0;
    });
  });
  return scores;
}

function pickPrimary(
  scores: Record<ProductKey, number>,
  answers: Answers,
): ProductKey {
  const max = Math.max(...CORE_KEYS.map((k) => scores[k]));
  const tied = CORE_KEYS.filter((k) => scores[k] === max);
  if (tied.length === 1) return tied[0];

  // Tie-breaker 1: the product(s) the Q1 reason points to.
  const q1Pref: Record<AnswerKey, ProductKey[]> = {
    A: ["HS", "LJ"],
    B: ["HS", "LJ", "BB"],
    C: ["BB"],
    D: ["TB"],
    E: ["DR"],
    F: [],
  };
  for (const p of (answers.q1 && q1Pref[answers.q1]) || []) {
    if (tied.includes(p)) return p;
  }

  // Tie-breaker 2: the Q4 scent preference.
  const q4Pref: Partial<Record<AnswerKey, ProductKey>> = {
    A: "HS",
    B: "LJ",
    C: "DR",
    D: "BB",
  };
  const q4p = answers.q4 && q4Pref[answers.q4];
  if (q4p && tied.includes(q4p)) return q4p;

  // Tie-breaker 3: default to Heaven Sent (the hero/face product).
  for (const p of CORE_KEYS) if (tied.includes(p)) return p;
  return "HS";
}

export interface Recommendation {
  product: Product;
  /** For the Therapy Balm, the specific variant to recommend. */
  variant?: BalmVariant;
  /** Framing label for add-ons (e.g. "Perfect pairing"). */
  tag?: string;
}

export interface QuizResult {
  primary: Recommendation;
  addOns: Recommendation[];
  scores: Record<ProductKey, number>;
}

function toRecommendation(
  key: ProductKey,
  answers: Answers,
  tag?: string,
): Recommendation {
  if (key === "TB") {
    const variant = balmVariantForScent(answers.q4);
    return {
      product: {
        ...PRODUCTS.TB,
        image: BALM_VARIANTS[variant].image,
      },
      variant,
      tag,
    };
  }
  return { product: PRODUCTS[key], tag };
}

/**
 * Core recommendation logic.
 * - Primary = highest scorer among the core line (HS, LJ, BB, DR, TB).
 *   The Purge is never primary, so a first-timer never gets exfoliant alone.
 * - Add-ons (up to two): The Purge ("Perfect pairing") when it scores >= 2 or
 *   the visitor is already a customer (Q5 = A); the Therapy Balm ("Great for
 *   targeted spots") when it scores >= 2 and isn't already the primary.
 */
export function getRecommendation(answers: Answers): QuizResult {
  const scores = scoreAnswers(answers);
  const primaryKey = pickPrimary(scores, answers);
  const primary = toRecommendation(primaryKey, answers);

  const addOns: Recommendation[] = [];
  if ((scores.PG >= 2 || answers.q5 === "A") && primaryKey !== "PG") {
    addOns.push(toRecommendation("PG", answers, "Perfect pairing"));
  }
  if (scores.TB >= 2 && primaryKey !== "TB") {
    addOns.push(toRecommendation("TB", answers, "Great for targeted spots"));
  }

  return { primary, addOns: addOns.slice(0, 2), scores };
}
