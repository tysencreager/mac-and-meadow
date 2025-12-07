import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Droplet, ShieldCheck, Heart, ArrowRight, Star } from "lucide-react";
import heroBg from "@assets/generated_images/luxury_modern_farmhouse_skincare_background_with_natural_textures.png";
import product1 from "@assets/IMG_5787_1765122929459.jpeg";
import product2 from "@assets/IMG_5790_1765122929459.jpeg";
import { useRef } from "react";

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

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F6F2] font-sans selection:bg-[#BC7C5F] selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex items-center pt-32 pb-32 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroBg} 
            alt="Natural Skincare Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F2]/90 via-[#F7F6F2]/50 to-transparent" />
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light" />
        </motion.div>

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
                className="bg-[#644716] text-[#F7F6F2] hover:bg-[#644716]/90 rounded-full text-base h-12 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw" target="_blank" rel="noopener noreferrer">
                  Shop Collection
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#644716]/30 text-[#644716] hover:bg-[#644716]/5 rounded-full text-base h-12 px-8 bg-white/20 backdrop-blur-sm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee/Ticker */}
      <div className="bg-[#644716] py-4 overflow-hidden whitespace-nowrap relative">
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
      <section id="benefits" className="py-32 bg-gradient-to-b from-white to-[#F7F6F2] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A2A77F]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <span className="text-[#BC7C5F] font-serif italic text-xl">The Gold Standard</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#644716]">Why Beef Tallow?</h2>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
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
                className="p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A2A77F]/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150" />
                
                <div className="w-14 h-14 bg-[#F7F6F2] rounded-2xl flex items-center justify-center text-[#644716] mb-6 group-hover:bg-[#644716] group-hover:text-[#F7F6F2] transition-colors duration-300 shadow-sm">
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

      {/* Product Showcase - Modern Layout */}
      <section id="products" className="py-32 bg-[#F7F6F2] relative">
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
                    className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <img 
                    src={product2} 
                    alt="Mac & Meadow Collection" 
                    className="rounded-[2rem] shadow-xl w-full h-64 object-cover hover:scale-[1.05] transition-transform duration-700"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-[#644716] rounded-[2rem] p-8 flex flex-col justify-center items-center text-[#F7F6F2] text-center"
                >
                  <Star className="w-8 h-8 mb-4 text-[#A2A77F]" />
                  <p className="font-serif text-2xl">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest mt-2">Grass-Fed</p>
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
                  <h4 className="font-bold text-[#644716] text-lg">Ingredients</h4>
                  <p className="text-[#644716]/70 leading-relaxed">Wagyu Beef Tallow, Olive Oil, Orange Essential Oil, Vanilla Extract, Frankincense</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-[#644716] text-lg">Size</h4>
                  <p className="text-[#644716]/70">4 oz (113 g) Glass Jar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-[#644716] text-[#F7F6F2] hover:bg-[#644716]/90 rounded-full h-16 px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw" target="_blank" rel="noopener noreferrer">
                    Order on Instagram <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs mt-4 text-[#644716]/50 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A2A77F]" />
                  Secure checkout via Square coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Parallax Feel */}
      <section id="about" className="py-32 bg-[#644716] text-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.6, 1], ["0%", "20%"]) }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#BC7C5F]/20 rounded-full blur-[100px]" 
        />
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#A2A77F] tracking-[0.3em] uppercase text-sm font-bold mb-6 block">Meet the Maker</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-12">McKenzie Madsen</h2>
            <p className="text-xl md:text-3xl leading-relaxed opacity-90 mb-16 font-serif italic text-[#D9D0C1]">
              "I started Mac & Meadow to bring healing back to our daily routines. 
              Using the finest Wagyu tallow, I create skincare that nourishes your body 
              without the chemicals found in modern products."
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BC7C5F] to-transparent mx-auto rounded-full opacity-50" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
