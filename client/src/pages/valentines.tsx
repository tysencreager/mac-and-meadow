import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Heart, Gift, Droplet, Leaf, Dna, TreePine } from "lucide-react";
import { Link } from "wouter";

// Valentine's product images
const PRODUCT_IMAGES = {
  bundle: "https://i.postimg.cc/xjsM6SWw/IMG-3342.jpg",
  whipped: "https://i.postimg.cc/59PLsMhd/IMG-3318.jpg",
  lifestyle: "https://i.postimg.cc/CMvkcV3p/FC66DFC2-CFCE-4A40-B28D-A729D2C7E2B6.jpg"
};

// Products data
const products = [
  { name: "Whipped Tallow - Bare Bones", description: "Unscented", price: "$18.50", isBundle: false },
  { name: "Whipped Tallow - Bare Bones for Two", description: "Unscented Bundle", price: "$32.00", isBundle: true },
  { name: "Whipped Tallow - Vanilla & Orange", description: "Sweet citrus blend", price: "$18.50", isBundle: false },
  { name: "Whipped Tallow - Vanilla & Orange for Two", description: "Sweet citrus bundle", price: "$32.00", isBundle: true },
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

export default function Valentines() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] font-serif selection:bg-[#E88D8D] selection:text-white overflow-x-hidden">
      <SEO
        title="Valentine's Day Collection | Mac & Meadow Co."
        description="Give the gift of glowing skin this Valentine's Day with Mac & Meadow Co. 100% Grass-Fed Tallow Balm. Perfect gifts for your loved ones."
      />

      {/* Floating Background Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Heart className="floating-heart text-[#E88D8D] w-6 h-6 absolute" style={{ top: '10%', left: '5%', animationDelay: '0s' }} fill="currentColor" />
        <Heart className="floating-heart text-[#E88D8D] w-10 h-10 absolute" style={{ top: '20%', right: '10%', animationDelay: '1s' }} fill="currentColor" />
        <Heart className="floating-heart text-[#E88D8D] w-5 h-5 absolute" style={{ top: '70%', left: '15%', animationDelay: '2s' }} fill="currentColor" />
        <Heart className="floating-heart text-[#E88D8D] w-8 h-8 absolute" style={{ top: '60%', right: '5%', animationDelay: '3s' }} fill="currentColor" />
        <Heart className="floating-heart text-[#FFC4C4] w-7 h-7 absolute" style={{ top: '40%', left: '8%', animationDelay: '1.5s' }} fill="currentColor" />
        <Heart className="floating-heart text-[#FFC4C4] w-6 h-6 absolute" style={{ top: '80%', right: '15%', animationDelay: '2.5s' }} fill="currentColor" />
      </div>

      {/* Valentine's Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#FFC4C4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <a className="text-3xl font-script font-bold text-[#D64045] hover:opacity-80 transition-opacity">
                Mac & Meadow
              </a>
            </Link>

            <div className="hidden md:flex space-x-8">
              <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E88D8D] transition font-medium">
                Shop Tallow
              </a>
              <a href="#valentine-collection" className="text-[#D64045] hover:text-[#E88D8D] transition font-medium">
                Valentine's Collection
              </a>
              <Link href="/about">
                <a className="text-gray-600 hover:text-[#E88D8D] transition font-medium">
                  Our Story
                </a>
              </Link>
            </div>

            <a
              href="https://macandmeadowco.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden bg-[#D64045] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D64045]/90 transition"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-[#FFC4C4]/20 to-[#FFF9F5] pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.span
              variants={fadeIn}
              className="inline-block py-2 px-4 rounded-full bg-[#FFC4C4]/30 text-[#D64045] text-sm font-semibold mb-6 tracking-wider uppercase"
            >
              Limited Edition
            </motion.span>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-script font-bold text-[#D64045] mb-6 leading-tight"
            >
              Love Your Skin <br />
              <span className="text-gray-700 text-4xl md:text-6xl">This Valentine's Day</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-light"
            >
              Give the gift of pure, grass-fed nourishment. "Tallow for the skin and soul" — wrapped in love.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex justify-center gap-4"
            >
              <a
                href="#valentine-collection"
                className="btn-love bg-[#D64045] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Gift className="w-5 h-5" /> Shop The Gift Guide
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC4C4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E88D8D] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </header>

      {/* Product Showcase Section */}
      <section id="valentine-collection" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gray-800 mb-4">The Valentine's Collection</h2>
            <div className="w-24 h-1 bg-[#D64045] mx-auto rounded-full" />
          </div>

          {/* Product 1: Tallow for Two Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-24"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#FFC4C4] rounded-2xl transform rotate-3 group-hover:rotate-6 transition duration-500 opacity-50" />
              <img
                src={PRODUCT_IMAGES.bundle}
                alt="Tallow Gift Bundle"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] border-4 border-white transform transition duration-500 group-hover:-translate-y-2"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg border border-[#FFC4C4] hidden md:block">
                <span className="text-[#D64045] font-script text-2xl">For Two</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Tallow for Two Bundle</h3>
              <p className="text-[#D64045] font-medium text-lg mb-6">
                $28.00 <span className="text-gray-400 line-through text-sm ml-2">$34.00</span>
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                The perfect pair for you and your favorite person. Our signature "Tallow for Two" set includes two jars of our whipped grass-fed tallow balm. Whether you're sharing a skincare routine or gifting a moment of self-care, this bundle is pure love in a jar.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> Includes 2x Full Size Jars
                </li>
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> 100% Grass-Fed & Finished Tallow
                </li>
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> Wrapped in Valentine's Packaging
                </li>
              </ul>

              <a
                href="https://macandmeadowco.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition shadow-lg font-medium text-center"
              >
                Add to Cart
              </a>
            </div>
          </motion.div>

          {/* Product 2: Single Whipped Tallow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#E88D8D] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition duration-500 opacity-30" />
              <img
                src={PRODUCT_IMAGES.whipped}
                alt="Whipped Tallow Jar"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] border-4 border-white transform transition duration-500 group-hover:-translate-y-2"
              />
            </div>

            <div className="w-full md:w-1/2 md:pr-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Whipped Tallow - Vanilla & Rose</h3>
              <p className="text-[#D64045] font-medium text-lg mb-6">$17.00</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Indulge in the softest skin of your life. Our whipped tallow is aerated to perfection, creating a cloud-like texture that melts instantly upon contact. Infused with organic vanilla bean and a hint of rose for that romantic touch.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#FFC4C4]/20 p-4 rounded-xl text-center">
                  <Droplet className="w-6 h-6 text-[#D64045] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Deep Hydration</p>
                </div>
                <div className="bg-[#FFC4C4]/20 p-4 rounded-xl text-center">
                  <Leaf className="w-6 h-6 text-[#D64045] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Non-Toxic</p>
                </div>
              </div>

              <a
                href="https://macandmeadowco.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition shadow-lg font-medium text-center"
              >
                Add to Cart
              </a>
            </div>
          </motion.div>

          {/* Product 3: Lifestyle Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#FFC4C4] rounded-2xl transform rotate-2 group-hover:rotate-4 transition duration-500 opacity-40" />
              <img
                src={PRODUCT_IMAGES.lifestyle}
                alt="Valentine's Gift Set"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] border-4 border-white transform transition duration-500 group-hover:-translate-y-2"
              />
              <div className="absolute -top-4 -left-4 bg-[#D64045] text-white p-3 rounded-full shadow-lg hidden md:block">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">The Perfect Gift</h3>
              <p className="text-[#D64045] font-medium text-lg mb-6">Gift Sets Starting at $17</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether it's for your galentine, your partner, or yourself, our Valentine's collection makes gifting easy. Each jar is hand-whipped with love and ready to nourish dry winter skin with the rich vitamins A, D, E & K found naturally in grass-fed tallow.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> Perfect for Galentine's Day
                </li>
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> Self-Care Sunday Essential
                </li>
                <li className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 text-[#E88D8D] mr-3" fill="currentColor" /> Ready to Gift Packaging
                </li>
              </ul>

              <a
                href="https://macandmeadowco.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-[#D64045] text-white px-8 py-3 rounded-full hover:bg-[#D64045]/90 transition shadow-lg font-medium text-center"
              >
                Shop All Gifts
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 bg-[#FFF9F5] relative overflow-hidden">
        <div className="absolute inset-0 heart-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D64045] font-bold uppercase tracking-widest text-sm">Shop All Scents</span>
            <h2 className="text-4xl font-script text-gray-800 mt-2">Our Full Collection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC4C4]/20 group hover:-translate-y-1"
              >
                {product.isBundle && (
                  <span className="inline-block bg-[#D64045] text-white text-xs px-2 py-1 rounded-full mb-3">Bundle & Save</span>
                )}
                <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <p className="text-[#D64045] font-bold text-xl mb-4">{product.price}</p>
                <a
                  href="https://macandmeadowco.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-800 text-white py-2 rounded-full text-center text-sm font-medium hover:bg-gray-900 transition"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2D3B2D] to-[#1a2a1a] rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#BC7C5F]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4A5D4A]/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
              {/* Image */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <img
                  src="https://i.postimg.cc/8P4hKp4T/M-M-website-photo-man.png"
                  alt="Man using The Lumberjack tallow cream"
                  width={300}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-xl w-full h-[320px] object-cover object-top"
                />
              </div>
              {/* Content */}
              <div className="text-right flex-1">
                <span className="inline-block bg-[#BC7C5F] text-white text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Coming Soon</span>
                <div className="flex justify-end mb-4">
                  <TreePine className="w-14 h-14 text-[#BC7C5F]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-script text-white mb-3">The Lumberjack</h3>
                <p className="text-white/80 text-xl mb-2">Men's Whipped Tallow</p>
                <p className="text-[#BC7C5F] font-medium text-xl">Cedar & Orange Scented</p>
                <p className="text-white/60 mt-4 text-lg ml-auto max-w-md">
                  A rugged, woodsy blend crafted for him. Rich cedar meets bright orange for a scent that's as bold as it is nourishing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Tallow Section */}
      <section className="py-20 bg-[#FFF9F5] relative overflow-hidden">
        <div className="absolute inset-0 heart-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D64045] font-bold uppercase tracking-widest text-sm">Nature's Love Language</span>
            <h2 className="text-4xl font-script text-gray-800 mt-2">Why Your Skin Loves Tallow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-[#FFC4C4]/20"
            >
              <div className="w-16 h-16 bg-[#FFC4C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-[#D64045]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Vitamin Rich</h3>
              <p className="text-gray-600 text-sm">Packed with Vitamins A, D, E, and K to naturally boost collagen and fight signs of aging.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-[#FFC4C4]/20"
            >
              <div className="w-16 h-16 bg-[#FFC4C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#D64045]" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">100% Grass-Fed</h3>
              <p className="text-gray-600 text-sm">Sourced responsibly from grass-fed cows, ensuring the highest nutrient density for your skin.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-[#FFC4C4]/20"
            >
              <div className="w-16 h-16 bg-[#FFC4C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dna className="w-8 h-8 text-[#D64045]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Bio-Compatible</h3>
              <p className="text-gray-600 text-sm">Tallow biology closely mimics human skin oils, meaning it absorbs deeper without clogging pores.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D64045] to-[#E88D8D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC4C4]/20 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Heart className="w-12 h-12 mx-auto mb-6 opacity-80" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-script mb-6">
            Give the Gift of Glowing Skin
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            This Valentine's Day, treat yourself or someone you love to the nourishing power of grass-fed tallow. Pure ingredients, made with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://macandmeadowco.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#D64045] px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/95 transition shadow-xl hover:-translate-y-1 duration-300 inline-flex items-center justify-center"
            >
              Shop Valentine's Collection
            </a>
            <Link href="/products">
              <a className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition inline-flex items-center justify-center">
                View All Products
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
