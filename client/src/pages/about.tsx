import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";
import makerImage from "@assets/415988131_10224519028711897_3651009988014828584_n_1765127461768.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
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
            <span className="text-[#BC7C5F] font-serif italic text-xl">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Meet the Maker
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
              McKenzie Madsen started Mac & Meadow to bring healing back to daily routines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Maker Section */}
      <section className="py-32 bg-[#8B6F47] text-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative">
               <motion.div
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.5 }}
                 className="relative z-10"
               >
                 <img
                   src={makerImage}
                   alt="McKenzie and Rory"
                   className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover border border-[#F7F6F2]/10"
                 />
                 <div className="absolute -bottom-6 right-4 md:-right-6 bg-[#F7F6F2] text-[#644716] p-4 md:p-6 rounded-2xl shadow-xl max-w-[200px] md:max-w-xs">
                   <p className="font-serif italic text-base md:text-lg">"Sidekick Rory approved!"</p>
                 </div>
               </motion.div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 text-left space-y-8">
              <div>
                <span className="text-[#A2A77F] tracking-[0.3em] uppercase text-sm font-bold mb-4 block">Meet the Maker</span>
                <h2 className="font-serif text-5xl md:text-7xl mb-6">McKenzie Madsen</h2>
              </div>

              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-[#D9D0C1]">
                <p>
                  McKenzie Madsen started Mac & Meadow to bring healing back to daily routines.
                  Using the finest Wagyu tallow, she creates skincare that nourishes the body
                  without the chemicals found in modern products.
                </p>
                <p>With her trusty sidekick Rory by her side, she crafts each batch with care, ensuring it's simple, honest, and effective. It's not just about skincare; it's about returning to what's natural and good.</p>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-[#BC7C5F] to-transparent rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716]">Our Values</h2>
              <p className="text-[#644716]/70 text-lg">What drives everything we do at Mac & Meadow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#F7F6F2] rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-[#8B6F47]" />
                </div>
                <h3 className="font-serif text-2xl text-[#644716]">Natural</h3>
                <p className="text-[#644716]/70">We use only the purest, most natural ingredients—no chemicals, no synthetics.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#F7F6F2] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-[#8B6F47]" />
                </div>
                <h3 className="font-serif text-2xl text-[#644716]">Handcrafted</h3>
                <p className="text-[#644716]/70">Every batch is carefully whipped by hand in small batches to ensure freshness.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#F7F6F2] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-[#8B6F47]" />
                </div>
                <h3 className="font-serif text-2xl text-[#644716]">Healing</h3>
                <p className="text-[#644716]/70">We believe in nourishing skin with ingredients that truly heal and restore.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
