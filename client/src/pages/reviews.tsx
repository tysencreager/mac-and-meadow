import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import tysenReview from "@assets/review-images/tysenreview.png";
import dustinReview from "@assets/review-images/dustinreview.png";
import veronicaReview from "@assets/review-images/veronicareview.png";

interface Review {
  name: string;
  quote: string;
  rating: number;
  images?: string[];
}

const reviews: Review[] = [
  {
    name: "Tysen C",
    quote: "Mac and Meadow has changed the game for my skin. Seriously a dream product! My skin gets so dry when the seasons change and this tallow is so moisturizing without being greasy. Not only that, but knowing that McKenzie crafts each handmade batch herself makes the product feel so much more special. This is more than skincare; it's an investment in yourself and a way to appreciate the simple things in life. I'll forever recommend this product to anyone looking for some self care. Thank you McKenzie!",
    rating: 5,

    images: [tysenReview],
  },
  {
    name: "Dustin Izatt",
    quote: "I bought Mac and Meadow, The Lumberjack beef tallow at a vendor event fully expecting it to be \"fine.\" Instead, it completely fixed my dry, flaky skin and made me question every lotion I've ever owned.\n\nThis stuff goes on smooth, absorbs fast, and doesn't leave me feeling greasy or like I wrestled a fast-food deep fryer. My skin went from \"survived a harsh winter\" to \"accidentally handsome and well-hydrated man\" in record time.\n\nI'm a simple guy. I don't want a skincare routine. I want one jar that works. The Lumberjack delivers. No weird chemicals, no nonsense, just solid, manly hydration that actually does its job.\n\nIf your skin is dry, cracked, or generally losing the will to go out in public like I was, buy this. If your skin is already fine, buy it anyway and become unstoppable. Five stars. Will repurchase. Excuse me now, think I might go throw on a flannel shirt now and go chop some wood and build a cabin with my bare moisturized beef tallow slathered manly hands and with my renewed sense of self! I am man hear me roar!",
    rating: 5,

    images: [dustinReview],
  },
  {
    name: "Veronica Skidmore",
    quote: "I'm on my second batch of this! This is the best tallow, a little bit goes a long way. My skin has been so soft and healthy! This is the best for dry skin and all ages, I put this on my kids when their face starts to get dry and within two days it's back to normal and as soft as ever.",
    rating: 5,

    images: [veronicaReview],
  },
  {
    name: "Kimberly Zisumbo",
    quote: "I've been using Mac & Meadow since Christmas and I love it. I love to use it on my rougher skin areas, back of hands, heels if feet, elbows. These areas don't stay as soft and smooth when I use regular lotion.\nBuy it! You won't regret it.",
    rating: 5,

    images: [],
  },
  {
    name: "Justine Strebel",
    quote: "I have been using the Mac & Meadow Beef Tallow for 1 week now. Love the way it makes my skin feel. Very soft and not greasy. Customer service is excellent!!!! Great product!!!!!!",
    rating: 5,

    images: [],
  },
  {
    name: "Kirsten H",
    quote: "The tallow cream smells divine and goes on beautifully. I really appreciate the clean and simple ingredients. I have loved using it!",
    rating: 5,

  },
  {
    name: "Natasha S",
    quote: "I bought 2 of the tallow creams for my girls. They are 11 and 16. My 11 yr old has very dry skin and the tallow cream is already helping out around her nose and on her chin. She loves it. My 16 yr old loves the smell and is excited to see how her skin transforms using it.",
    rating: 5,

  },
  {
    name: "Camille G",
    quote: "I absolutely love this beef tallow cream! It makes my skin feel incredibly soft and moisturized. Thank you, Mac & Meadow!",
    rating: 5,

  },
  {
    name: "Ronnie G",
    quote: "I love how soft and smooth this goes on. My face feels better than ever each time I use it!",
    rating: 5,

  },
  {
    name: "Heather B",
    quote: "GLOWING! I've been using this tallow on my face and skin, and wow—what a game changer. It's rich, clean, and melts in like a dream. My skin feels soft, nourished, and calm, even in dry weather. No fillers, no fluff—just pure, natural goodness that actually works.",
    rating: 5,

  },
  {
    name: "Chris C",
    quote: "I'm loving this moisturizer! Its moisturizing power is amazing—rich, long-lasting, and deeply hydrating without feeling heavy. I'm also loving the pleasant light orange scent. The texture melts into my skin and lasts all day.",
    rating: 5,

  },
  {
    name: "Nate S",
    quote: "This tallow has a pleasant aroma and texture. The application is smooth and quickly absorbed!",
    rating: 5,

  },
];

const GOOGLE_LOGO = (
  <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Avatar background colors matching Google's profile color palette
const AVATAR_COLORS = [
  "#1a73e8", "#ea4335", "#34a853", "#fbbc05",
  "#4285f4", "#a142f4", "#e8710a", "#137333",
];

export default function Reviews() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Reviews"
        description="See what our customers are saying about Mac & Meadow's Wagyu tallow cream. Real reviews from real people."
        url="/reviews"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-16 bg-gradient-to-b from-[#F7F6F2] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[#BC7C5F] font-serif italic text-xl">What Our Customers Say</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Reviews
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
              Real results from real people who love Mac & Meadow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Aggregate Rating Header */}
      <section className="py-8 bg-white border-b border-[#dadce0]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              {GOOGLE_LOGO}
              <div>
                <h2
                  className="text-[#202124] text-lg font-medium"
                  style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                >
                  Mac & Meadow
                </h2>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[#202124] text-2xl font-medium"
                    style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                  >
                    {avgRating}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span
                    className="text-[#70757a] text-sm"
                    style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                  >
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/phxT7PuQALuPWnty5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1765cc] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
              style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
            >
              Write a Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-2xl border border-[#dadce0] shadow-[0_1px_3px_rgba(60,64,67,0.15),0_4px_8px_3px_rgba(60,64,67,0.06)] flex flex-col overflow-hidden ${review.images && review.images.length > 0 ? "" : "p-6"}`}
              >
                {/* Review Image */}
                {review.images && review.images.length > 0 && (
                  <div className="w-full">
                    {review.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Photo from ${review.name}'s review`}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                {/* Reviewer Info */}
                <div className={review.images && review.images.length > 0 ? "px-6 pt-5 pb-6" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                    style={{
                      backgroundColor: AVATAR_COLORS[index % AVATAR_COLORS.length],
                      fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-[#202124] text-sm font-medium"
                      style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                    >
                      {review.name}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="text-[#202124] text-sm leading-relaxed whitespace-pre-line flex-1"
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                >
                  {review.quote}
                </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Business Profile CTA */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-[#dadce0] shadow-[0_1px_3px_rgba(60,64,67,0.15),0_4px_8px_3px_rgba(60,64,67,0.06)] p-8 md:p-10">
              {/* Google Header */}
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <h3
                    className="text-[#202124] text-lg font-medium"
                    style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                  >
                    Mac & Meadow
                  </h3>
                  <p
                    className="text-[#70757a] text-sm"
                    style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                  >
                    Google Business Profile
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              {/* Message */}
              <div className="mb-8">
                <h4
                  className="text-[#202124] text-xl font-medium mb-2"
                  style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                >
                  Love our products? Leave us a review!
                </h4>
                <p
                  className="text-[#70757a] text-sm leading-relaxed"
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                >
                  Your feedback helps other customers discover Mac & Meadow and means the world to our small business.
                </p>
              </div>

              {/* Review Button */}
              <a
                href="https://maps.app.goo.gl/phxT7PuQALuPWnty5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1765cc] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]"
                style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
              >
                Write a Review
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
