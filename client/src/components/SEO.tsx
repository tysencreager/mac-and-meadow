import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

const defaultMeta = {
  title: "Mac & Meadow | Wagyu Tallow Cream",
  description:
    "Natural, healing skincare by McKenzie Madsen. Deeply moisturizing Wagyu Tallow Cream packed with vitamins A, D, E & K for healthy, glowing skin.",
  image: "/opengraph.png",
  url: "https://macandmeadowco.com",
};

export function SEO({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url,
  type = "website",
  article,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Mac & Meadow`
    : defaultMeta.title;
  const fullUrl = url ? `${defaultMeta.url}${url}` : defaultMeta.url;
  const fullImage = image.startsWith("http") ? image : `${defaultMeta.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Mac & Meadow" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === "article" && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === "article" && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
    </Helmet>
  );
}
