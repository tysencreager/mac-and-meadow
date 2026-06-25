import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Sun, Moon, Sparkles, Heart, Lightbulb, ArrowRight } from "lucide-react";
import blogHeader2 from "@assets/blog_header_2.jpg";
import dreamerPhoto from "@product-photos/the-dreamer-new.jpeg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <SEO
        title="How to Use Your Tallow Cream"
        description="Learn how to get the most out of your Mac & Meadow Whipped Tallow Cream with our morning and evening application guide."
        url="/how-to-use"
      />
      <Navbar />

      {/* Hero Section - Product image left, text right */}
      <section className="relative pt-40 md:pt-48 lg:pt-56 pb-20 bg-gradient-to-br from-[#F7F4EF] via-[#E5D5C5] to-[#F7F4EF] overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Link href="/products">
              <a className="inline-flex items-center gap-2 text-[#4C5246] font-medium hover:text-[#4C5246] transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Products
              </a>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Image - transparent bg, no frame */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <img
                  src="https://i.postimg.cc/SN3b2M2t/M_M_Valentines_heart.png"
                  alt="Mac & Meadow tallow cream"
                  className="w-full max-w-md h-auto drop-shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <span className="block text-[#4C5246] font-serif italic text-xl">Your Guide</span>
                <h1 className="font-serif text-5xl md:text-7xl text-[#312213] leading-tight">
                  How to Use Your <br />
                  <span className="italic text-[#4C5246]">Tallow Cream</span>
                </h1>
                <p className="text-[#312213]/70 text-lg max-w-xl">
                  Simple steps for glowing, nourished skin — morning, evening, and everything in between.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Zero - Exfoliate (now uses blog_header_2 as the photo) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4C5246]/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn} className="order-2 md:order-1 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4C5246] rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#4C5246] tracking-[0.2em] uppercase text-sm font-bold">First Things First</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#312213]">
                  Before Anything Else — <span className="italic text-[#4C5246]">Exfoliate</span>
                </h2>
                <p className="text-[#312213]/80 text-lg leading-relaxed">
                  This is the step most people skip, and it makes all the difference. Tallow balm works <strong className="text-[#312213]">with</strong> your skin, not on top of it.
                </p>
                <p className="text-[#312213]/80 text-lg leading-relaxed">
                  If your pores are clogged or you have a buildup of dead skin cells, even the best ingredients can't fully do their job. A gentle exfoliant a few times a week clears the way so your skin can actually absorb what you're putting on it.
                </p>
                <p className="text-[#312213]/70 text-base italic">
                  Nothing harsh — just enough to let your skin breathe.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 relative"
              >
                <div className="absolute inset-0 bg-[#4C5246]/10 rounded-full blur-[80px]" />
                <img
                  src={blogHeader2}
                  alt="Skincare preparation"
                  className="rounded-[2rem] shadow-2xl w-full h-[350px] md:h-[450px] object-cover relative z-10"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Morning Application */}
      <section className="py-24 bg-gradient-to-br from-[#F7F4EF] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#4C5246]/10 rounded-full blur-[80px]" />
                <img
                  src="https://i.postimg.cc/gksvSzsk/M_M_website_photo.png"
                  alt="Customer applying tallow cream in the morning"
                  className="rounded-[2rem] shadow-2xl w-full h-[400px] md:h-[500px] object-cover object-top relative z-10"
                  loading="lazy"
                />
              </motion.div>

              <motion.div {...fadeIn} className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4C5246] rounded-2xl flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#4C5246] tracking-[0.2em] uppercase text-sm font-bold">Daytime Routine</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#312213]">
                  Morning <span className="italic text-[#4C5246]">Application</span>
                </h2>
                <p className="text-[#312213]/80 text-lg leading-relaxed">
                  A lot of people assume rich moisturizers are nighttime-only. Not tallow. It's actually ideal for daytime because it absorbs without feeling heavy, creates a protective barrier against environmental stressors, and locks in moisture throughout the day.
                </p>
                <p className="text-[#312213]/70 italic">
                  It even works beautifully under makeup if that's your thing.
                </p>

                <div className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-[#312213]/10 space-y-4">
                  <h3 className="font-serif text-xl text-[#312213] mb-4">Your Morning Steps</h3>
                  <div className="space-y-3">
                    {[
                      "Rinse with lukewarm water or use a gentle cleanser — over-cleansing strips your skin's natural oils",
                      "Pat dry, leaving your skin slightly damp",
                      "Warm a pea-sized amount between your fingertips and press gently into your skin, focusing on dry areas",
                      "Give it a few minutes to absorb before sunscreen or makeup",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 bg-[#4C5246] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-[#312213]/80 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#4C5246] font-serif italic text-base mt-4">
                    A little goes a long way — start small and add more if needed.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Evening Application - uses The Dreamer photography + product plug */}
      <section className="py-24 bg-[#4C5246] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4C5246]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#312213]/30 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn} className="space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Moon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/70 tracking-[0.2em] uppercase text-sm font-bold">Nighttime Routine</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                  Evening <span className="italic text-[#F7F4EF]/80">Application</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Nighttime is when your skin does its real work — repairing, regenerating, restoring. Tallow is deeply compatible with that process. The fatty acid profile mirrors your skin's own sebum, which means while you sleep, it's not just sitting on top of your skin — it's actually supporting what your skin is already trying to do.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[1.5rem] border border-white/20 space-y-4">
                  <h3 className="font-serif text-xl text-white mb-4">Your Evening Steps</h3>
                  <div className="space-y-3">
                    {[
                      "Cleanse thoroughly to remove the day — makeup, sunscreen, buildup",
                      "Pat dry, leaving skin slightly damp",
                      "Apply a slightly more generous amount than your morning routine, warming it between your fingers first",
                      "Press into skin, paying extra attention to any areas of dryness, tightness, or irritation",
                      "Let it sink in — no rinsing, no rushing",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 bg-white text-[#4C5246] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-white/85 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 font-serif italic text-lg mt-4">
                    Wake up and notice the difference.
                  </p>
                </div>

                {/* The Dreamer product plug */}
                <div className="bg-gradient-to-br from-[#3D4137] to-[#241A0E] p-6 rounded-[1.5rem] border border-white/10 mt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Moon className="w-6 h-6 text-[#A2A77F]" />
                    <span className="text-[#A2A77F] font-serif italic text-lg">Nighttime Pick</span>
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-2">Try The Dreamer for Better Sleep</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Our nighttime formula is infused with calming lavender essential oil and magnesium flakes — designed to help you wind down and nourish your skin while you rest.
                  </p>
                  <a
                    href="https://macandmeadowco.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F7F4EF] hover:bg-white text-[#312213] font-medium px-6 py-2.5 rounded-full transition-colors text-sm"
                  >
                    Shop The Dreamer <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 relative"
              >
                <div className="absolute inset-0 bg-white/5 rounded-full blur-[80px]" />
                <img
                  src={dreamerPhoto}
                  alt="The Dreamer nighttime tallow cream"
                  className="rounded-[2rem] shadow-2xl w-full h-[400px] md:h-[550px] object-cover relative z-10"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Listen to Your Skin */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#F7F4EF] rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#4C5246]" />
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#312213]">
              Listen to <span className="italic text-[#4C5246]">Your Skin</span>
            </h2>
            <p className="text-[#312213]/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Everyone's skin is different, and it changes with the seasons. In winter or dry climates, go a little heavier. In humid weather, pull back. The goal isn't a perfect routine — it's learning what your skin actually needs and giving it that.
            </p>
            <p className="text-[#312213]/80 text-lg leading-relaxed max-w-2xl mx-auto">
              With consistent use, you'll notice your skin becoming softer, more supple, and genuinely healthy — not just temporarily hydrated. <strong className="text-[#312213]">That's what real nourishment looks like.</strong>
            </p>
            <p className="text-[#4C5246] font-serif italic text-2xl pt-4">
              Mac & Meadow Whipped Tallow Balm.<br />
              Morning, evening, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bonus Tip */}
      <section className="py-20 bg-gradient-to-br from-[#F7F4EF] to-[#E5D5C5] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-[#312213]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#4C5246]/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4C5246] rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#4C5246] font-serif italic text-xl">Bonus Tip</span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-[#312213]">
                  Throw Away Your Lotion <span className="italic text-[#4C5246]">(We Mean It)</span>
                </h3>

                <p className="text-[#312213]/80 text-lg leading-relaxed">
                  Before bed, rub a small amount of whipped tallow into your hands (yes, even after your last bathroom trip and hand wash of the night — we see you). Let it absorb overnight and wake up to hands that actually feel soft.
                </p>
                <p className="text-[#312213]/80 text-lg leading-relaxed">
                  Once you make this a habit, you'll wonder why you ever kept a bottle of lotion by the sink.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#4C5246] to-[#312213] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Experience the deep moisturizing power of Wagyu Tallow Cream for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://macandmeadowco.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#4C5246] font-medium px-10 py-4 rounded-full hover:bg-[#F7F4EF] transition-colors shadow-xl text-lg"
              >
                Shop Now
              </a>
              <Link href="/products">
                <a className="inline-block border border-white/30 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">
                  View Products
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
