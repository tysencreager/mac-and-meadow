import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Droplet, ShieldCheck, Heart, ArrowRight, Sparkles, TreePine, Moon, Package } from "lucide-react";
import heavenSentPhoto from "@product-photos/mac-and-meadow-heaven-sent-new.png";
import bareBonesPhoto from "@product-photos/mac-and-meadow-bare-bones-new.png";
import lumberjackPhoto from "@product-photos/mac-and-meadow-lumberjack-new.png";
import dreamerPhoto from "@product-photos/the-dreamer-new.jpeg";
import allProductsPhoto from "@product-photos/mac-and-meadow-tallow-line.jpeg";
import thePurgePhoto from "@product-photos/the-purge.jpeg";
import therapyBalmMint from "@assets/therapy-balm-meadow-mint.webp";
import therapyBalmRidge from "@assets/therapy-balm-meadow-ridge.webp";
import therapyBalmBareBones from "@assets/therapy-balm-bare-bones.webp";

const therapyBalms = [
  {
    name: "Meadow Mint",
    profile: "Fresh & cooling",
    scent: "Spearmint, vanilla & cedarwood",
    photo: therapyBalmMint,
  },
  {
    name: "Meadow Ridge",
    profile: "Warm, woodsy & calming",
    scent: "Lavender, vanilla, cedarwood & sandalwood",
    photo: therapyBalmRidge,
  },
  {
    name: "Bare Bones",
    profile: "Fragrance-free",
    scent: "Unscented — no added essential oils",
    photo: therapyBalmBareBones,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <SEO
        title="Products"
        description="Shop Mac & Meadow's handcrafted Whipped Tallow Cream. Made with Wagyu beef tallow, olive oil, and natural essential oils for deeply moisturizing skincare."
        url="/products"
        type="product"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 lg:pt-56 pb-16 bg-gradient-to-b from-[#F7F4EF] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[#4C5246] font-serif italic text-xl">Our Products</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#312213]">
              Natural Skincare
            </h1>
            <p className="text-[#312213]/70 text-lg leading-relaxed">
              Handcrafted with the finest Wagyu tallow and natural ingredients for healthy, glowing skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee/Ticker */}
      <div className="bg-[#4C5246] py-4 overflow-hidden whitespace-nowrap relative">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#F7F4EF]/80 font-serif text-xl mx-8 tracking-widest uppercase">
              • Organic Skincare • Grass-fed Tallow • Small Batch • Hand Whipped
            </span>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section - Modern Cards */}
      <section className="py-32 bg-[#4C5246] text-[#F7F4EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <span className="text-[#A2A77F] tracking-[0.3em] uppercase text-sm font-bold">The Gold Standard</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#F7F4EF]">Why Beef Tallow?</h2>
            <p className="text-[#F7F4EF]/80 text-lg leading-relaxed">
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
                className="p-8 bg-[#F7F4EF]/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-[#F7F4EF]/50 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4C5246]/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150" />

                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#4C5246] mb-6 group-hover:bg-[#4C5246] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#312213] mb-3">{benefit.title}</h3>
                <p className="text-[#312213]/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Quality */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-[#F7F4EF] rounded-[2rem] overflow-hidden border border-[#312213]/10 grid grid-cols-1 md:grid-cols-2"
          >
            <img
              src={allProductsPhoto}
              alt="Mac & Meadow product collection"
              loading="lazy"
              decoding="async"
              className="w-full h-[240px] md:h-full object-cover"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[#4C5246] font-serif italic text-lg">See the Quality</span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#312213] mt-2 mb-4">Whipped to Perfection</h3>
              <p className="text-[#312213]/70 text-lg leading-relaxed">
                Our cream is carefully hand-whipped to achieve a light, luxurious texture that melts into your skin.
                Rich, nourishing, and never greasy — just pure, natural goodness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Product: Heaven Sent */}
      <section className="py-32 bg-[#F7F4EF] relative">
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
              <div className="absolute inset-0 bg-[#4C5246]/10 rounded-full blur-[100px] transform rotate-12" />
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
                <div className="inline-flex items-center space-x-2 text-[#4C5246]">
                  <span className="h-px w-8 bg-[#4C5246]" />
                  <span className="uppercase tracking-widest text-sm font-bold">Best Seller</span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl text-[#312213]">Heaven Sent</h2>
                <p className="text-2xl text-[#4C5246] font-serif italic">Vanilla & Orange Whipped Tallow</p>
                <p className="text-[#312213]/80 leading-relaxed text-lg font-light">
                  Our signature whipped tallow cream is a luxurious blend of Wagyu beef tallow, olive oil, orange essential oil, vanilla extract, and frankincense. It's not just skincare; it's skin food that deeply nourishes and restores.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-[#312213] text-lg">Ingredients</h3>
                  <p className="text-[#312213]/70 leading-relaxed">Wagyu Beef Tallow, Olive Oil, Orange Essential Oil, Vanilla Extract, Frankincense</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#312213] text-lg">Size</h3>
                  <p className="text-[#312213]/70">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#4C5246] text-[#F7F4EF] hover:bg-[#4C5246]/90 rounded-full h-16 px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs mt-4 text-[#312213]/50 uppercase tracking-widest flex items-center gap-2">
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

                <h2 className="font-serif text-5xl md:text-6xl text-[#312213]">bare bones</h2>
                <p className="text-2xl text-[#4C5246] font-serif italic">Unscented Whipped Tallow</p>
                <p className="text-[#312213]/80 leading-relaxed text-lg font-light">
                  For those who love the benefits of tallow without any added fragrance. Pure, simple, and deeply nourishing — just Wagyu beef tallow and olive oil. Perfect for sensitive skin or anyone who prefers a clean, unscented moisturizer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-[#312213] text-lg">Ingredients</h3>
                  <p className="text-[#312213]/70 leading-relaxed">Wagyu Beef Tallow, Olive Oil</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#312213] text-lg">Size</h3>
                  <p className="text-[#312213]/70">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#4C5246] text-[#F7F4EF] hover:bg-[#4C5246]/90 rounded-full h-16 px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4C5246]/15 rounded-full blur-[120px]" />
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
                <div className="inline-flex items-center space-x-2 text-[#A2A77F]">
                  <span className="h-px w-8 bg-[#A2A77F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">For Him</span>
                </div>
                <div className="flex items-center gap-4">
                  <TreePine className="w-10 h-10 text-[#A2A77F]" />
                  <h2 className="font-serif text-5xl md:text-6xl text-white">The Lumberjack</h2>
                </div>
                <p className="text-2xl text-[#A2A77F] font-serif italic">Cedar & Orange Men's Tallow</p>
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
                  className="inline-block bg-[#F7F4EF] hover:bg-white text-[#312213] font-medium px-12 py-4 rounded-full transition-colors text-lg shadow-xl"
                >
                  Shop Now <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product: The Dreamer */}
      <section className="py-32 bg-gradient-to-br from-[#312213] to-[#4C5246] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6E7A5E]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#241A0E]/20 rounded-full blur-[120px]" />

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
                <div className="inline-flex items-center space-x-2 text-[#A2A77F]">
                  <span className="h-px w-8 bg-[#A2A77F]" />
                  <span className="uppercase tracking-widest text-sm font-bold">Nighttime Ritual</span>
                </div>
                <div className="flex items-center gap-4">
                  <Moon className="w-10 h-10 text-[#A2A77F]" />
                  <h2 className="font-serif text-5xl md:text-6xl text-white">The Dreamer</h2>
                </div>
                <p className="text-2xl text-[#A2A77F] font-serif italic">Lavender & Magnesium Nighttime Tallow</p>
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
                  className="inline-block bg-[#F7F4EF] hover:bg-white text-[#312213] font-medium px-12 py-4 rounded-full transition-colors text-lg shadow-xl"
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

      {/* Featured Product: The Purge */}
      <section className="py-32 bg-gradient-to-br from-[#4C5246] to-[#312213] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#DCE3D3]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3D2A18]/30 rounded-full blur-[120px]" />

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
                src={thePurgePhoto}
                alt="The Purge Natural Sugar Scrub Exfoliator"
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
                <div className="inline-flex items-center space-x-2 text-[#DCE3D3]">
                  <span className="h-px w-8 bg-[#DCE3D3]" />
                  <span className="uppercase tracking-widest text-sm font-bold">The Tallow Sidekick</span>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkles className="w-10 h-10 text-[#DCE3D3]" />
                  <h2 className="font-serif text-5xl md:text-6xl text-white">The Purge</h2>
                </div>
                <p className="text-2xl text-[#DCE3D3] font-serif italic">Natural Sugar Scrub Exfoliator</p>
                <p className="text-white/85 leading-relaxed text-lg font-light">
                  A natural sugar scrub designed for a purifying cleanse and smooth, hydrated skin. Its refreshing scent and hydrating formula make it ideal for your regular skincare routine — gently buff away dullness and reveal a fresh, glowing complexion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Type</h3>
                  <p className="text-white/70 leading-relaxed">Sugar Scrub Exfoliator</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Size</h3>
                  <p className="text-white/70">4 oz</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#312213] font-bold px-12 py-4 rounded-full hover:bg-[#F7F4EF] transition-colors text-lg shadow-xl"
                >
                  Shop Now <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapy Balm Collection */}
      <section id="therapy-balm" className="py-32 bg-[#F7F4EF] relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center justify-center space-x-2 text-[#4C5246] mb-4">
              <span className="h-px w-8 bg-[#4C5246]" />
              <span className="uppercase tracking-widest text-sm font-bold">Targeted Relief</span>
              <span className="h-px w-8 bg-[#4C5246]" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-[#312213] mb-6">Therapy Balm Collection</h2>
            <p className="text-[#312213]/80 leading-relaxed text-lg font-light">
              Targeted moisture for the places that need it most. Crafted with nourishing tallow, beeswax, and skin-loving oils, our Therapy Balms are ideal for chapped lips, dry hands, cracked heels, rough elbows, cuticles, and other problem areas. Keep one in your purse, desk, or nightstand, and apply as needed—especially before bed for overnight repair.
            </p>
            <p className="text-[#312213]/60 text-sm mt-5">
              Shared base: wagyu tallow, beeswax, castor oil, jojoba oil & vitamin E · 2 oz (60 ml)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {therapyBalms.map((balm, i) => (
              <motion.div
                key={balm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#312213]/10 flex flex-col"
              >
                <img
                  src={balm.photo}
                  alt={`Therapy Balm — ${balm.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[260px] object-cover"
                />
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl text-[#312213]">{balm.name}</h3>
                  <p className="text-[#4C5246] font-serif italic mb-2">{balm.profile}</p>
                  <p className="text-[#312213]/70 text-sm leading-relaxed mb-6 flex-1">{balm.scent}</p>
                  <a
                    href="https://macandmeadowco.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#4C5246] text-[#F7F4EF] py-3 rounded-full text-center text-sm font-medium hover:bg-[#4C5246]/90 transition-colors"
                  >
                    Shop {balm.name}
                  </a>
                </div>
              </motion.div>
            ))}
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
                <div className="absolute inset-0 bg-[#4C5246]/10 rounded-full blur-[80px]" />
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
                <div className="bg-gradient-to-br from-[#F7F4EF] to-white p-10 md:p-12 rounded-[2rem] shadow-lg border border-[#312213]/10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#4C5246] rounded-2xl flex items-center justify-center text-[#F7F4EF] flex-shrink-0">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-3xl text-[#312213]">How to Use</h3>
                      <div className="space-y-4 text-[#312213]/80 text-lg leading-relaxed">
                        <p>
                          A little goes a long way, but listen to your skin; use more or less as needed.
                        </p>
                        <p>
                          Safe and effective for morning use as well, to lock in moisture throughout the day.
                        </p>
                      </div>
                      <a
                        href="/how-to-use"
                        className="inline-flex items-center gap-2 text-[#4C5246] font-medium hover:text-[#4C5246] transition-colors"
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
      <section className="py-20 bg-[#F7F4EF]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#4C5246] to-[#312213] rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#4C5246]/20 rounded-full blur-[100px]" />
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
                    <Package className="w-8 h-8 text-[#F7F4EF]" />
                    <span className="text-[#F7F4EF]/70 tracking-[0.2em] uppercase text-sm font-bold">Mix & Match</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Build Your Own Bundle</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Love more than one scent? Build your own custom bundle of Mac & Meadow products and save! Mix and match your favorites — Heaven Sent, bare bones, The Lumberjack, The Dreamer, The Purge, and the Therapy Balm Collection.
                  </p>
                  <a
                    href="https://macandmeadowco.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#4C5246] font-medium px-10 py-4 rounded-full hover:bg-[#F7F4EF] transition-colors text-lg shadow-xl"
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
