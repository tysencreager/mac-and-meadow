import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Droplet, ShieldCheck, Heart, ArrowRight, Sparkles, TreePine } from "lucide-react";
import product1 from "@assets/IMG_5787.webp";
import product2 from "@assets/IMG_5790.webp";
import product3 from "@assets/mac_meadow_product_3.webp";

// All products data
const allProducts = [
  { name: "Bare Bones", description: "Unscented", price: "$18.50", isBundle: false },
  { name: "Bare Bones for Two", description: "Unscented Bundle", price: "$32.00", isBundle: true },
  { name: "Vanilla & Orange", description: "Sweet citrus blend", price: "$18.50", isBundle: false },
  { name: "Vanilla & Orange for Two", description: "Sweet citrus bundle", price: "$32.00", isBundle: true },
];

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
      <section className="pt-48 pb-16 bg-gradient-to-b from-[#F7F6F2] to-white">
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

      {/* See the Quality Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <img
                src={product3}
                alt="Whipped Tallow Cream Texture"
                width={200}
                height={260}
                loading="lazy"
                decoding="async"
                className="rounded-[1.5rem] shadow-xl w-[200px] h-[260px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <span className="text-[#BC7C5F] font-serif italic text-lg">See the Quality</span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#644716] mt-2 mb-4">Whipped to Perfection</h3>
              <p className="text-[#644716]/70 text-lg leading-relaxed">
                Our cream is carefully hand-whipped to achieve a light, luxurious texture that melts into your skin.
                Rich, nourishing, and never greasy—just pure, natural goodness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Modern Layout */}
      <section className="py-32 bg-[#F7F6F2] relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Image Grid */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#BC7C5F]/10 rounded-full blur-[100px] transform rotate-12" />
              <div className="grid grid-cols-2 gap-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="col-span-2"
                >
                  <img
                    src={product1}
                    alt="Whipped Tallow Cream Jar"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="col-span-2"
                >
                  <img
                    src={product2}
                    alt="Mac & Meadow Collection"
                    width={600}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="rounded-[2rem] shadow-xl w-full h-[300px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-10">
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

                <h2 className="font-serif text-5xl md:text-6xl text-[#644716]">Whipped Tallow Cream</h2>
                <p className="text-2xl text-[#BC7C5F] font-serif italic">Vanilla & Orange</p>
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

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                  className="rounded-[2rem] shadow-2xl w-full h-[450px] object-cover object-top relative z-10"
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#BC7C5F] font-serif italic text-xl">Shop Our Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-2">All Products</h2>
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

      <Footer />
    </div>
  );
}
