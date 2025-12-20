import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const blogPosts = [
  {
    id: 1,
    slug: "why-beef-tallow-skincare",
    title: "Why Beef Tallow is the Ultimate Skincare Ingredient",
    excerpt: "Discover why our ancestors knew best when it comes to skincare. Beef tallow closely mimics our skin's natural oils, making it one of the most effective moisturizers available.",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Skincare Science",
    image: "/attached_assets/IMG_5787_1765122929459.jpeg"
  },
  {
    id: 2,
    slug: "benefits-of-wagyu-tallow",
    title: "The Benefits of Wagyu Tallow for Your Skin",
    excerpt: "Not all tallow is created equal. Learn why Wagyu beef tallow contains higher concentrations of vitamins and beneficial fatty acids for superior skin nourishment.",
    date: "December 10, 2024",
    readTime: "4 min read",
    category: "Ingredients",
    image: "/attached_assets/IMG_5790_1765122929459.jpeg"
  },
  {
    id: 3,
    slug: "natural-skincare-routine",
    title: "Building a Natural Skincare Routine with Tallow",
    excerpt: "Simplify your skincare routine with natural ingredients. We share our tips for incorporating tallow cream into your daily regimen for healthy, glowing skin.",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "How-To",
    image: "/attached_assets/IMG_5787_1765122929459.jpeg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] font-sans selection:bg-[#BC7C5F] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#F7F6F2] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A2A77F]/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md text-[#644716] text-xs tracking-[0.2em] uppercase font-bold rounded-full border border-[#644716]/10 shadow-sm">
              Mac & Meadow Journal
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">Our Blog</h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our collection of articles about natural skincare, the science behind tallow,
              and tips for nourishing your skin the way nature intended.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#644716] text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-[#644716]/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#644716] group-hover:text-[#BC7C5F] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[#644716]/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-[#BC7C5F] font-medium hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#644716] text-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl">Stay in the Loop</h2>
            <p className="text-[#F7F6F2]/80 text-lg">
              Follow us on Instagram for the latest updates, skincare tips, and behind-the-scenes content.
            </p>
            <a
              href="https://www.instagram.com/macandmeadowco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F7F6F2] text-[#644716] px-8 py-4 rounded-full font-medium hover:bg-[#A2A77F] hover:text-white transition-all duration-300"
            >
              Follow @macandmeadowco
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
