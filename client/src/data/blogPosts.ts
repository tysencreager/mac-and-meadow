import blogHeader1 from "@assets/blog_header_1.jpg";
import blogHeader2 from "@assets/blog_header_2.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-tallow-is-the-best-moisturizer",
    title: "Why Tallow Is the Best Natural Moisturizer for Your Skin",
    excerpt: "Discover why beef tallow has been used for centuries as a powerful, natural moisturizer and how it can transform your skincare routine.",
    image: blogHeader1,
    content: `
For centuries, our ancestors relied on natural ingredients to care for their skin. Among these time-tested remedies, beef tallow stands out as one of the most effective and nourishing options available. But what makes tallow so special?

## What Is Tallow?

Tallow is rendered beef fat, typically from grass-fed cattle. When properly prepared, it creates a creamy, luxurious moisturizer that's remarkably similar to our skin's natural sebum.

## Why Tallow Works So Well

### 1. Biocompatible with Human Skin

The fatty acid profile of tallow closely matches the oils our skin naturally produces. This means it absorbs easily without clogging pores or leaving a greasy residue.

### 2. Rich in Fat-Soluble Vitamins

Quality tallow from grass-fed cattle contains:

- **Vitamin A** - Promotes cell turnover and helps with fine lines
- **Vitamin D** - Supports skin health and healing
- **Vitamin E** - A powerful antioxidant that protects skin
- **Vitamin K** - Helps with skin elasticity and healing

### 3. Contains Conjugated Linoleic Acid (CLA)

CLA is known for its anti-inflammatory properties and can help soothe irritated skin conditions.

### 4. All-Natural and Non-Toxic

Unlike many commercial moisturizers filled with synthetic chemicals, tallow is completely natural. What you put on your skin matters—and with tallow, you know exactly what you're getting.

## How to Use Tallow Cream

A little goes a long way! Simply warm a small amount between your fingertips and apply to clean, slightly damp skin. It works beautifully as a daily moisturizer, night cream, or healing balm for dry patches.

## The Mac & Meadow Difference

At Mac & Meadow, we use only the finest Wagyu beef tallow, hand-whipped with olive oil, orange essential oil, vanilla extract, and frankincense. This creates a light, luxurious texture that absorbs beautifully while delivering all the benefits of traditional tallow skincare.

Ready to experience the difference? Your skin will thank you.
    `.trim(),
    date: "2025-12-19",
    author: "McKenzie Madsen",
    tags: ["skincare", "tallow", "natural beauty", "moisturizer"]
  },
  {
    slug: "morning-skincare-routine-with-tallow",
    title: "The Perfect Morning Skincare Routine with Tallow Cream",
    excerpt: "Learn how to incorporate tallow cream into your morning routine for all-day moisture and protection.",
    image: blogHeader2,
    content: `
Starting your day with the right skincare routine sets the tone for healthy, glowing skin. Here's how to make the most of your tallow cream in the morning.

## Why Use Tallow in the Morning?

Many people think of rich moisturizers as nighttime-only products, but tallow cream is actually perfect for daytime use. Here's why:

- **Locks in moisture** throughout the day
- **Creates a protective barrier** against environmental stressors
- **Absorbs quickly** without feeling heavy
- **Works beautifully** under makeup (if you choose to wear it)

## Your Morning Routine

### Step 1: Gentle Cleanse

Start with a gentle cleanser or simply rinse with lukewarm water. Over-cleansing can strip your skin of natural oils.

### Step 2: Pat Dry

Gently pat your face with a clean towel, leaving it slightly damp. This helps the tallow cream absorb better.

### Step 3: Apply Tallow Cream

Take a small amount (about the size of a pea) and warm it between your fingertips. Gently press into your skin, focusing on dry areas.

**Pro tip:** A little goes a long way! Start with less and add more if needed.

### Step 4: Let It Absorb

Give your skin a few minutes to fully absorb the cream before applying sunscreen or makeup.

## Listen to Your Skin

Everyone's skin is different. Some days you might need more moisture, other days less. Pay attention to how your skin feels and adjust accordingly.

During winter or in dry climates, you might want to apply a slightly thicker layer. In humid weather, a lighter touch works well.

## The Result

With consistent use, you'll notice your skin becoming softer, more supple, and naturally radiant. The vitamins and fatty acids in tallow work with your skin's biology to promote lasting health—not just temporary hydration.

Start your morning with Mac & Meadow Whipped Tallow Cream and feel the difference all day long.
    `.trim(),
    date: "2025-12-19",
    author: "McKenzie Madsen",
    tags: ["skincare routine", "morning routine", "tallow", "tips"]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
