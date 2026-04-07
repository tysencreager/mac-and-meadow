import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Droplet, ShieldCheck, Heart, ArrowRight, Sparkles, TreePine, Moon, Package, Shield } from "lucide-react";
import product3 from "@assets/mac_meadow_product_3.webp";
import heavenSentPhoto from "@product-photos/mac-and-meadow-heaven-sent.jpeg";
import bareBonesPhoto from "@product-photos/mac-and-meadow-bare-bones.jpeg";
import lumberjackPhoto from "@product-photos/mac-and-meadow-lumberjack.jpeg";
import dreamerPhoto from "@product-photos/the-dreamer-photography.png";
import dreamerTransparent from "@product-photos/the-dreamer-transparent.png";
import allProductsPhoto from "@product-photos/all-products-photography.png";
import meadowGuardPhoto from "@product-photos/meadow-guard-photography.png";

export default function Products() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Products"
        description="Shop Mac & Meadow's handcrafted Whipped Tallow Cream. Made with Wagyu beef tallow, olive oil, and natural essential oils for deeply moisturizing skincare."
        url="/products"
        type="product"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 lg:pt-56 pb-16 bg-gradient-to-b from-[#F7F6F2] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[#BC7C5F] font-serif italic text-xl">Our Products</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Natural Skincare
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
              Handcrafted with the finest Wagyu tallow and natural ingredients for healthy, glowing skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meadow Guard Coming Soon */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#5B7B5B] to-[#3D5A3D] rounded-[2rem] p-6 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#A2A77F]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4A6741]/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={meadowGuardPhoto}
                  alt="Meadow Guard Natural Insect Repellant"
                  loading="lazy"
                  className="rounded-[1.5rem] shadow-xl w-full h-[250px] md:h-[280px] object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">Coming Soon</span>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <Shield className="w-7 h-7 text-[#A2A77F]" />
                  <h3 className="font-serif text-3xl md:text-4xl text-white">Meadow Guard</h3>
                </div>
                <p className="text-white/80 text-lg mb-1">Natural Insect Repellant Spray</p>
                <p className="text-white/60 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Protect yourself naturally this summer. A plant-based insect repellant spray that keeps the bugs away without harsh chemicals. Stay tuned!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee/Ticker */}
      <div className="bg-[#8B6F47] py-4 overflow-hidden whitespace-nowrap relative">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#F7F6F2]/80 font-serif text-xl mx-8 tracking-widest uppercase">
              • Organic Skincare • Grass-fed Tallow • Small Batch • Hand Whipped
            </span>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section - Modern Cards */}
      <section className="py-32 bg-[#8B6F47] text-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <span className="text-[#A2A77F] tracking-[0.3em] uppercase text-sm font-bold">The Gold Standard</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#F7F6F2]">Why Beef Tallow?</h2>
            <p className="text-[#F7F6F2]/80 text-lg leading-relaxed">
              Beef tallow is a clean, nutrient-rich moisturizer that your skin LOVES.
              It matches our skin's natural oils, making it one of the best additions to your skincare routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplet,
                title: "Deeply Moisturizing",
                desc: "Matches your skin's biology to hydrate without clogging pores."
              },
              {
                icon: ShieldCheck,
                title: "Vitamin Rich",
                desc: "Packed with essential vitamins A, D, E & K for healing."
              },
              {
                icon: Leaf,
                title: "100% Natural",
                desc: "No chemicals, no synthetics. Just pure, wholesome ingredients."
              },
              {
                icon: Heart,
                title: "Soothing Relief",
                desc: "Helps soothe dryness, irritation, and redness effectively."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-[#F7F6F2]/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-[#F7F6F2]/50 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#BC7C5F]/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150" />

                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#8B6F47] mb-6 group-hover:bg-[#BC7C5F] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#644716] mb-3">{benefit.title}</h3>
                <p className="text-[#644716]/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Quality + Dreamer Announcement - Two Column */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Whipped to Perfection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#F7F6F2] rounded-[2rem] overflow-hidden border border-[#644716]/10"
            >
              <img
                src={allProductsPhoto}
                alt="Mac & Meadow product collection"
                loading="lazy"
                decoding="async"
                className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover"
              />
              <div className="p-8">
                <span className="text-[#BC7C5F] font-serif italic text-lg">See the Quality</span>
                <h3 className="font-serif text-3xl text-[#644716] mt-2 mb-4">Whipped to Perfection</h3>
                <p className="text-[#644716]/70 text-lg leading-relaxed">
                  Our cream is carefully hand-whipped to achieve a light, luxurious texture that melts into your skin.
                  Rich, nourishing, and never greasy — just pure, natural goodness.
                </p>
              </div>
            </motion.div>

            {/* The Dreamer Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-[#0066cc] to-[#004999] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col items-center justify-center text-center"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3399ff]/15 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 text-white/5 text-[120px] font-serif leading-none pointer-events-none">&#9790;</div>

              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">New Product</span>
                <img
                  src={dreamerTransparent}
                  alt="The Dreamer"
                  className="w-44 md:w-52 h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6"
                  loading="lazy"
                />
                <h4 className="font-serif text-3xl md:text-4xl text-white mb-2">The Dreamer</h4>
                <p className="text-white/70 text-lg mb-4">Nighttime Whipped Tallow</p>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
                  Your new bedtime ritual is here! Infused with calming lavender & magnesium flakes for better sleep and softer skin.
                </p>
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#0066cc] font-bold px-10 py-3.5 rounded-full hover:bg-[#F7F6F2] transition-colors shadow-lg text-lg"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product: Heaven Sent */}
      <section className="py-32 bg-[#F7F6F2] relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-[#BC7C5F]/10 rounded-full blur-[100px] transform rotate-12" />
              <img
                src={heavenSentPhoto}
                alt="Heaven Sent Whipped Tallow Cream"
                loading="lazy"
                decoding="async"
                className="rounded-[2rem] shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700 relative z-10"
              />
            </motion.div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 text-[#BC7C5F]">
                  <span className="h-px w-8 bg-[#BC7C5F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">Best Seller</span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl text-[#644716]">Heaven Sent</h2>
                <p className="text-2xl text-[#BC7C5F] font-serif italic">Vanilla & Orange Whipped Tallow</p>
                <p className="text-[#644716]/80 leading-relaxed text-lg font-light">
                  Our signature whipped tallow cream is a luxurious blend of Wagyu beef tallow, olive oil, orange essential oil, vanilla extract, and frankincense. It's not just skincare; it's skin food that deeply nourishes and restores.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-[#644716] text-lg">Ingredients</h3>
                  <p className="text-[#644716]/70 leading-relaxed">Wagyu Beef Tallow, Olive Oil, Orange Essential Oil, Vanilla Extract, Frankincense</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#644716] text-lg">Size</h3>
                  <p className="text-[#644716]/70">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full h-16 px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs mt-4 text-[#644716]/50 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A2A77F]" />
                  Secure checkout via Square
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product: bare bones */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Content (left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-[#A2A77F]">
                  <span className="h-px w-8 bg-[#A2A77F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">Pure & Simple</span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl text-[#644716]">bare bones</h2>
                <p className="text-2xl text-[#BC7C5F] font-serif italic">Unscented Whipped Tallow</p>
                <p className="text-[#644716]/80 leading-relaxed text-lg font-light">
                  For those who love the benefits of tallow without any added fragrance. Pure, simple, and deeply nourishing — just Wagyu beef tallow and olive oil. Perfect for sensitive skin or anyone who prefers a clean, unscented moisturizer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-[#644716] text-lg">Ingredients</h3>
                  <p className="text-[#644716]/70 leading-relaxed">Wagyu Beef Tallow, Olive Oil</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#644716] text-lg">Size</h3>
                  <p className="text-[#644716]/70">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full h-16 px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image (right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-[#A2A77F]/10 rounded-full blur-[100px]" />
              <img
                src={bareBonesPhoto}
                alt="bare bones Unscented Whipped Tallow"
                loading="lazy"
                decoding="async"
                className="rounded-[2rem] shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product: The Lumberjack */}
      <section className="py-32 bg-gradient-to-br from-[#2D3B2D] to-[#1a2a1a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#BC7C5F]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A5D4A]/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Image (left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <img
                src={lumberjackPhoto}
                alt="The Lumberjack Men's Whipped Tallow"
                loading="lazy"
                decoding="async"
                className="rounded-[2rem] shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>

            {/* Content (right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-[#BC7C5F]">
                  <span className="h-px w-8 bg-[#BC7C5F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">For Him</span>
                </div>
                <div className="flex items-center gap-4">
                  <TreePine className="w-10 h-10 text-[#BC7C5F]" />
                  <h2 className="font-serif text-5xl md:text-6xl text-white">The Lumberjack</h2>
                </div>
                <p className="text-2xl text-[#BC7C5F] font-serif italic">Cedar & Orange Men's Tallow</p>
                <p className="text-white/75 leading-relaxed text-lg font-light">
                  A rugged, woodsy blend crafted for him. Rich cedar meets bright orange for a scent that's as bold as it is nourishing. Real skincare, no nonsense — just solid, manly hydration that actually does its job.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Ingredients</h3>
                  <p className="text-white/60 leading-relaxed">Wagyu Beef Tallow, Olive Oil, Cedar Essential Oil, Orange Essential Oil</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Size</h3>
                  <p className="text-white/60">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#BC7C5F] hover:bg-[#A86B4F] text-white font-medium px-12 py-4 rounded-full transition-colors text-lg shadow-xl"
                >
                  Shop Now <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product: The Dreamer */}
      <section className="py-32 bg-gradient-to-br from-[#004999] to-[#0066cc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3399ff]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002244]/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Content (left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-10 order-2 md:order-1"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-[#BC7C5F]">
                  <span className="h-px w-8 bg-[#BC7C5F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">Nighttime Ritual</span>
                </div>
                <div className="flex items-center gap-4">
                  <Moon className="w-10 h-10 text-[#BC7C5F]" />
                  <h2 className="font-serif text-5xl md:text-6xl text-white">The Dreamer</h2>
                </div>
                <p className="text-2xl text-[#BC7C5F] font-serif italic">Lavender & Magnesium Nighttime Tallow</p>
                <p className="text-white/75 leading-relaxed text-lg font-light">
                  Drift into deep rest with our nighttime tallow, infused with calming lavender essential oil and magnesium flakes. Nourish your skin while you sleep — wake up to skin that's softer, calmer, and truly restored.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Ingredients</h3>
                  <p className="text-white/60 leading-relaxed">Wagyu Beef Tallow, Olive Oil, Lavender Essential Oil, Magnesium Flakes, Frankincense</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Size</h3>
                  <p className="text-white/60">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#BC7C5F] hover:bg-[#A86B4F] text-white font-medium px-12 py-4 rounded-full transition-colors text-lg shadow-xl"
                >
                  Shop Now <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Image (right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative order-1 md:order-2"
            >
              <img
                src={dreamerPhoto}
                alt="The Dreamer Nighttime Whipped Tallow"
                loading="lazy"
                decoding="async"
                className="rounded-[2rem] shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#BC7C5F]/10 rounded-full blur-[80px]" />
                <img
                  src="https://i.postimg.cc/gksvSzsk/M-M-website-photo.png"
                  alt="Customer using Mac & Meadow tallow cream"
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="rounded-[2rem] shadow-2xl w-full h-[350px] md:h-[400px] lg:h-[450px] object-cover object-top relative z-10"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-[#F7F6F2] to-white p-10 md:p-12 rounded-[2rem] shadow-lg border border-[#644716]/10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#8B6F47] rounded-2xl flex items-center justify-center text-[#F7F6F2] flex-shrink-0">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-3xl text-[#644716]">How to Use</h3>
                      <div className="space-y-4 text-[#644716]/80 text-lg leading-relaxed">
                        <p>
                          A little goes a long way, but listen to your skin; use more or less as needed.
                        </p>
                        <p>
                          Safe and effective for morning use as well, to lock in moisture throughout the day.
                        </p>
                      </div>
                      <a
                        href="/how-to-use"
                        className="inline-flex items-center gap-2 text-[#8B6F47] font-medium hover:text-[#BC7C5F] transition-colors"
                      >
                        Read our full guide <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Own Bundle */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#8B6F47] to-[#644716] rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC7C5F]/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A2A77F]/15 rounded-full blur-[80px]" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src={allProductsPhoto}
                    alt="Mac & Meadow full product collection"
                    loading="lazy"
                    decoding="async"
                    className="rounded-[1.5rem] shadow-2xl w-full h-[300px] md:h-[350px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <Package className="w-8 h-8 text-[#F7F6F2]" />
                    <span className="text-[#F7F6F2]/70 tracking-[0.2em] uppercase text-sm font-bold">Mix & Match</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Build Your Own Bundle</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Love more than one scent? Build your own custom bundle of Mac & Meadow products and save! Mix and match your favorites — Heaven Sent, bare bones, The Lumberjack, and The Dreamer.
                  </p>
                  <a
                    href="https://macandmeadowco.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#8B6F47] font-medium px-10 py-4 rounded-full hover:bg-[#F7F6F2] transition-colors text-lg shadow-xl"
                  >
                    Build a Bundle <ArrowRight className="inline ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
