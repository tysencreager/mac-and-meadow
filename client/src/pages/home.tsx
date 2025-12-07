import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Droplet, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/luxury_modern_farmhouse_skincare_background_with_natural_textures.png";
import product1 from "@assets/IMG_5787_1765122929459.jpeg";
import product2 from "@assets/IMG_5790_1765122929459.jpeg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] font-sans selection:bg-[#BC7C5F] selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Natural Skincare Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F2]/80 to-transparent md:via-[#F7F6F2]/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-xl space-y-6"
          >
            <span className="inline-block px-3 py-1 bg-[#A2A77F]/20 text-[#644716] text-xs tracking-widest uppercase font-semibold rounded-full border border-[#A2A77F]/30">
              Moisturizing Beef Tallow Cream
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716] leading-[1.1]">
              Holistic, Nourishing, <br />
              <span className="italic text-[#BC7C5F]">Healing.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#644716] font-medium leading-relaxed drop-shadow-sm">
              Experience the deep moisturizing power of Wagyu Tallow Cream. 
              Packed with vitamins A, D, E & K for your skin's natural glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#644716] text-[#F7F6F2] hover:bg-[#644716]/90 rounded-full text-lg h-14 px-8"
                asChild
              >
                <a href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw" target="_blank" rel="noopener noreferrer">
                  Shop Collection
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#644716] text-[#644716] hover:bg-[#644716]/10 rounded-full text-lg h-14 px-8 bg-transparent"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A2A77F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-[#644716]">Why Beef Tallow?</h2>
            <p className="text-[#644716]/70">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#F7F6F2] rounded-2xl hover:shadow-lg transition-shadow border border-[#D9D0C1]/30 group"
              >
                <div className="w-12 h-12 bg-[#D9D0C1]/50 rounded-xl flex items-center justify-center text-[#644716] mb-4 group-hover:bg-[#BC7C5F] group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#644716] mb-2">{benefit.title}</h3>
                <p className="text-[#644716]/70 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={product1} 
                alt="Whipped Tallow Cream Jar" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover col-span-2"
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={product2} 
                alt="Mac & Meadow Collection" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover col-span-2"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-8 pl-0 md:pl-12">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl text-[#644716]">Whipped Tallow Cream</h2>
                <p className="text-xl text-[#BC7C5F] font-medium">Vanilla & Orange</p>
                <p className="text-[#644716]/80 leading-relaxed text-lg">
                  Our signature whipped tallow cream is a luxurious blend of Wagyu beef tallow, olive oil, orange essential oil, vanilla extract, and frankincense. It's not just skincare; it's skin food.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#BC7C5F] pl-4">
                  <h4 className="font-bold text-[#644716]">Ingredients</h4>
                  <p className="text-sm text-[#644716]/70 mt-1">Wagyu Beef Tallow, Olive Oil, Essential Oils</p>
                </div>
                <div className="border-l-2 border-[#BC7C5F] pl-4">
                  <h4 className="font-bold text-[#644716]">Size</h4>
                  <p className="text-sm text-[#644716]/70 mt-1">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-[#644716] text-[#F7F6F2] hover:bg-[#644716]/90 rounded-full h-14 px-12 text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw" target="_blank" rel="noopener noreferrer">
                    Order on Instagram <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs text-center md:text-left mt-3 text-[#644716]/50">
                  Secure checkout via Square coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#644716] text-[#F7F6F2] relative">
        <div className="absolute inset-0 opacity-10 pattern-dots" /> {/* Optional pattern */}
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <span className="text-[#A2A77F] tracking-widest uppercase text-sm font-bold mb-4 block">Meet the Maker</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">McKenzie Madsen</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-10 font-light">
            "I started Mac & Meadow to bring healing back to our daily routines. 
            Using the finest Wagyu tallow, I create skincare that nourishes your body 
            without the chemicals found in modern products. It's simple, honest, and effective."
          </p>
          <div className="w-24 h-1 bg-[#BC7C5F] mx-auto rounded-full" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
