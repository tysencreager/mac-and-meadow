import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Heart, Sparkles, ChevronLeft, ChevronRight, Quote, Instagram } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import heroImage from "@assets/mac_meadow_hero_2.webp";

const ELFSIGHT_WIDGET_ID = "248c87cf-d63e-4df0-a757-f6ba3ee46eec";

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
    name: "Veronica J"
  },
  {
    quote: "The tallow cream smells divine and goes on beautifully. I really appreciate the clean and simple ingredients. I have loved using it!",
    name: "Kirsten H"
  },
  {
    quote: "I bought 2 of the tallow creams for my girls. They are 11 and 16. My 11 yr old has very dry skin and the tallow cream is already helping out around her nose and on her chin. She loves it. My 16 yr old loves the smell and is excited to see how her skin transforms using it.",
    name: "Natasha S"
  },
  {
    quote: "I absolutely love this beef tallow cream! It makes my skin feel incredibly soft and moisturized. Thank you, Mac & Meadow!",
    name: "Camille G"
  },
  {
    quote: "I love how soft and smooth this goes on. My face feels better than ever each time I use it!",
    name: "Ronnie G"
  },
  {
    quote: "GLOWING! I've been using this tallow on my face and skin, and wow—what a game changer. It's rich, clean, and melts in like a dream. My skin feels soft, nourished, and calm, even in dry weather. No fillers, no fluff—just pure, natural goodness that actually works.",
    name: "Heather B"
  },
  {
    quote: "I'm loving this moisturizer! Its moisturizing power is amazing—rich, long-lasting, and deeply hydrating without feeling heavy. I'm also loving the pleasant light orange scent. The texture melts into my skin and lasts all day.",
    name: "Chris C"
  },
  {
    quote: "This tallow has a pleasant aroma and texture. The application is smooth and quickly absorbed!",
    name: "Nate S"
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
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-2xl space-y-8"
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
                  src={heroImage}
                  alt="Mac & Meadow Whipped Tallow Cream"
                  width={600}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover relative z-10"
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

      {/* Testimonials + Instagram Section - Side by Side */}
      <section className="py-24 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Testimonials Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center lg:text-left">
                  <span className="text-[#BC7C5F] font-serif italic text-xl">What Our Customers Say</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#644716] mt-2">Real Results, Real Stories</h2>
                </div>

                <div className="relative">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg relative min-h-[280px] flex flex-col justify-between"
                  >
                    <Quote className="w-10 h-10 text-[#BC7C5F]/20 absolute top-6 left-6" />
                    <div className="relative z-10 pt-8">
                      <p className="text-[#644716] text-base leading-relaxed italic mb-6">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      <p className="text-[#8B6F47] font-bold">
                        — {testimonials[currentTestimonial].name}
                      </p>
                    </div>
                  </motion.div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#644716] hover:bg-[#8B6F47] hover:text-white transition-colors duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-1.5">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          aria-label={`Go to testimonial ${index + 1}`}
                          aria-current={index === currentTestimonial ? "true" : undefined}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? "bg-[#8B6F47] w-6"
                              : "bg-[#8B6F47]/30 hover:bg-[#8B6F47]/50 w-2"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#644716] hover:bg-[#8B6F47] hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
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

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden [&_.eapps-instagram-feed]:!w-full [&_.eapps-widget-toolbar]:!hidden">
                  <div
                    className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
                    data-elfsight-app-lazy
                    style={{ width: '100%' }}
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
