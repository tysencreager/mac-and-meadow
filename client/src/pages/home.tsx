import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Heart, Sparkles, ChevronLeft, ChevronRight, Star, Instagram, TreePine, ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import heroImage from "@assets/mac_meadow_hero_2.webp";

const ELFSIGHT_WIDGET_ID = "248c87cf-d63e-4df0-a757-f6ba3ee46eec";

// All products data
const allProducts = [
  { name: "Bare Bones", description: "Unscented", price: "$18.50", isBundle: false },
  { name: "Bare Bones for Two", description: "Unscented Bundle", price: "$32.00", isBundle: true },
  { name: "Vanilla & Orange", description: "Sweet citrus blend", price: "$18.50", isBundle: false },
  { name: "Vanilla & Orange for Two", description: "Sweet citrus bundle", price: "$32.00", isBundle: true },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const testimonials = [
  {
    quote: "This is the best tallow, a little bit goes a long way. My skin has been so soft and healthy! This is the best for dry skin and all ages, I put this on my kids when their face starts to get dry and within two days it's back to normal and as soft as ever.",
    name: "Veronica J",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    quote: "The tallow cream smells divine and goes on beautifully. I really appreciate the clean and simple ingredients. I have loved using it!",
    name: "Kirsten H",
    rating: 5,
    timeAgo: "3 months ago"
  },
  {
    quote: "I bought 2 of the tallow creams for my girls. They are 11 and 16. My 11 yr old has very dry skin and the tallow cream is already helping out around her nose and on her chin. She loves it. My 16 yr old loves the smell and is excited to see how her skin transforms using it.",
    name: "Natasha S",
    rating: 5,
    timeAgo: "a month ago"
  },
  {
    quote: "I absolutely love this beef tallow cream! It makes my skin feel incredibly soft and moisturized. Thank you, Mac & Meadow!",
    name: "Camille G",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    quote: "I love how soft and smooth this goes on. My face feels better than ever each time I use it!",
    name: "Ronnie G",
    rating: 5,
    timeAgo: "3 weeks ago"
  },
  {
    quote: "GLOWING! I've been using this tallow on my face and skin, and wow—what a game changer. It's rich, clean, and melts in like a dream. My skin feels soft, nourished, and calm, even in dry weather. No fillers, no fluff—just pure, natural goodness that actually works.",
    name: "Heather B",
    rating: 5,
    timeAgo: "a month ago"
  },
  {
    quote: "I'm loving this moisturizer! Its moisturizing power is amazing—rich, long-lasting, and deeply hydrating without feeling heavy. I'm also loving the pleasant light orange scent. The texture melts into my skin and lasts all day.",
    name: "Chris C",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    quote: "This tallow has a pleasant aroma and texture. The application is smooth and quickly absorbed!",
    name: "Nate S",
    rating: 5,
    timeAgo: "3 months ago"
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.getElementById("elfsight-platform")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F6F2] font-sans selection:bg-[#BC7C5F] selection:text-white overflow-x-hidden">
      <SEO />
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-48 pb-32 overflow-hidden">
        <div style={{ transform: `translateY(${heroY})`, opacity: heroOpacity }} className="absolute inset-0 z-0 will-change-transform">
          <div className="w-full h-full bg-gradient-to-br from-[#F7F6F2] via-[#E5D5C5] to-[#BC7C5F]" />
          <div className="absolute inset-0 bg-noise opacity-15 mix-blend-soft-light" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md text-[#644716] text-xs tracking-[0.2em] uppercase font-bold rounded-full border border-[#644716]/10 shadow-sm">
                  Moisturizing Beef Tallow Cream
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="font-serif text-6xl md:text-8xl text-[#644716] leading-[1.05]">
                Holistic, <br />
                <span className="text-gradient-gold">Nourishing,</span> <br />
                <span className="italic font-light text-[#BC7C5F]">Healing.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#644716] font-medium leading-relaxed drop-shadow-sm max-w-lg">
                Experience the deep moisturizing power of Wagyu Tallow Cream.
                Packed with vitamins A, D, E & K for your skin's natural glow.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 pt-6">
                <Button
                  size="lg"
                  className="bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full text-base h-12 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Shop Collection
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#644716]/30 text-[#644716] hover:bg-[#8B6F47]/5 rounded-full text-base h-12 px-8 bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/products">
                    View Our Products
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-[#BC7C5F]/20 rounded-full blur-[100px]" />
              <img
                src={heroImage}
                alt="Mac & Meadow Whipped Tallow Cream"
                width={500}
                height={500}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#BC7C5F]/10 rounded-full blur-[100px]" />
                <img
                  src="https://i.postimg.cc/gksvSzsk/M-M-website-photo.png"
                  alt="Customer using Mac & Meadow tallow cream"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover object-top relative z-10"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-[#BC7C5F] font-serif italic text-xl">Why Choose Mac & Meadow?</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#644716]">
                    Natural Skincare That Actually Works
                  </h2>
                  <p className="text-[#644716]/70 text-lg leading-relaxed">
                    Our whipped tallow cream combines the healing power of grass-fed Wagyu tallow with simple, natural ingredients. No chemicals, no synthetics—just pure nourishment for your skin.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F7F6F2] rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-1">100% Natural</h3>
                      <p className="text-[#644716]/70">Only the finest ingredients from nature.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F7F6F2] rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-1">Handcrafted</h3>
                      <p className="text-[#644716]/70">Small batches made with care and attention.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F7F6F2] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-1">Deeply Nourishing</h3>
                      <p className="text-[#644716]/70">Vitamins A, D, E & K for healthy, glowing skin.</p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full h-14 px-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[#BC7C5F] font-serif italic text-xl">Our Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-2">Shop Whipped Tallow</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {allProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-[#644716]/10 group hover:-translate-y-1"
              >
                {product.isBundle && (
                  <span className="inline-block bg-[#8B6F47] text-white text-xs px-2 py-1 rounded-full mb-3">Bundle & Save</span>
                )}
                <h3 className="text-lg font-bold text-[#644716] mb-1">Whipped Tallow</h3>
                <p className="text-[#BC7C5F] font-serif italic mb-1">{product.name}</p>
                <p className="text-[#644716]/60 text-sm mb-3">{product.description}</p>
                <p className="text-[#8B6F47] font-bold text-xl mb-4">{product.price}</p>
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#8B6F47] text-white py-2.5 rounded-full text-center text-sm font-medium hover:bg-[#8B6F47]/90 transition"
                >
                  Shop Now
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-[#644716]/30 text-[#644716] hover:bg-[#8B6F47]/5 rounded-full h-12 px-8"
              asChild
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon - The Lumberjack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#2D3B2D] to-[#1a2a1a] rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#BC7C5F]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4A5D4A]/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Content */}
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <span className="inline-block bg-[#BC7C5F] text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider font-bold">Coming Soon</span>
                <div className="flex justify-center md:justify-start mb-3 sm:mb-4 md:mb-5">
                  <TreePine className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#BC7C5F]" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 sm:mb-3 md:mb-4">The Lumberjack</h3>
                <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">Men's Whipped Tallow</p>
                <p className="text-[#BC7C5F] font-medium text-lg sm:text-xl md:text-2xl">Cedar & Orange Scented</p>
                <p className="text-white/60 mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0">
                  A rugged, woodsy blend crafted for him. Rich cedar meets bright orange for a scent that's as bold as it is nourishing.
                </p>
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 sm:mt-6 md:mt-8 bg-[#BC7C5F] hover:bg-[#A86B4F] text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors text-sm sm:text-base"
                >
                  Order Now
                </a>
              </div>
              {/* Image */}
              <div className="w-full md:w-2/5 flex-shrink-0 order-1 md:order-2">
                <img
                  src="https://i.postimg.cc/8P4hKp4T/M-M-website-photo-man.png"
                  alt="Man using The Lumberjack tallow cream"
                  width={300}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="rounded-[1.5rem] shadow-xl w-full h-[380px] sm:h-[400px] md:h-[420px] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews + Instagram Section - Side by Side */}
      <section className="py-24 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Google Reviews Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Google Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <div>
                      <h2 className="text-[#202124] text-lg font-medium" style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}>
                        Google Reviews
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#202124] text-sm font-medium" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>5.0</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                          ))}
                        </div>
                        <span className="text-[#70757a] text-sm" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                          ({testimonials.length})
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/phxT7PuQALuPWnty5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] text-sm font-medium hover:underline hidden sm:block"
                    style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                  >
                    View all
                  </a>
                </div>

                {/* Review Card */}
                <div className="relative">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl border border-[#dadce0] shadow-[0_1px_3px_rgba(60,64,67,0.15),0_4px_8px_3px_rgba(60,64,67,0.06)] p-6 md:p-8 min-h-[280px] flex flex-col justify-between"
                  >
                    {/* Reviewer Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                          style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}
                        >
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[#202124] text-sm font-medium" style={{ fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif" }}>
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-[#70757a] text-xs" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                            {testimonials[currentTestimonial].timeAgo}
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-[#202124] text-sm leading-relaxed" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                        {testimonials[currentTestimonial].quote}
                      </p>
                    </div>
                  </motion.div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous review"
                      className="w-10 h-10 rounded-full bg-white border border-[#dadce0] shadow-sm flex items-center justify-center text-[#5f6368] hover:bg-[#f8f9fa] transition-colors duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-1.5">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          aria-label={`Go to review ${index + 1}`}
                          aria-current={index === currentTestimonial ? "true" : undefined}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? "bg-[#1a73e8] w-6"
                              : "bg-[#dadce0] hover:bg-[#bdc1c6] w-2"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextTestimonial}
                      aria-label="Next review"
                      className="w-10 h-10 rounded-full bg-white border border-[#dadce0] shadow-sm flex items-center justify-center text-[#5f6368] hover:bg-[#f8f9fa] transition-colors duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Write a Review CTA */}
                <div className="text-center lg:text-left">
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
                </div>
              </motion.div>

              {/* Instagram Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <span className="text-[#BC7C5F] font-serif italic text-xl">Stay Connected</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#644716] mt-2">Follow Us on Instagram</h2>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <div
                    className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
                    data-elfsight-app-lazy
                  />
                </div>

                <div className="text-center lg:text-left">
                  <a
                    href="https://www.instagram.com/macandmeadowco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#8B6F47] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B6F47]/90 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Follow @macandmeadowco
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#8B6F47] to-[#644716] text-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#BC7C5F]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A2A77F]/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl">
              Ready to Transform Your Skincare Routine?
            </h2>
            <p className="text-[#F7F6F2]/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Join the growing community discovering the healing power of natural, tallow-based skincare.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button
                size="lg"
                className="bg-[#F7F6F2] text-[#8B6F47] hover:bg-white rounded-full h-14 px-10 shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                  Shop Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#F7F6F2]/30 text-[#F7F6F2] hover:bg-[#F7F6F2]/10 rounded-full h-14 px-10 bg-transparent"
                asChild
              >
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
