import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { getAllBlogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Blog"
        description="Skincare tips, tallow benefits, and natural beauty insights from Mac & Meadow. Learn how to care for your skin naturally."
        url="/blog"
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
            <span className="text-[#BC7C5F] font-serif italic text-xl">Our Journal</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              The Blog
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
              Skincare tips, natural beauty insights, and the benefits of tallow-based skincare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="block bg-[#F7F6F2] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Blog post image */}
                    <div className="h-48 overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={192}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#8B6F47]/20 to-[#BC7C5F]/20 flex items-center justify-center">
                          <span className="font-serif text-4xl text-[#8B6F47]/30">M&M</span>
                        </div>
                      )}
                    </div>

                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-2 text-[#BC7C5F] text-sm">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>

                      <h2 className="font-serif text-2xl text-[#644716] group-hover:text-[#BC7C5F] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-[#644716]/70 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-[#8B6F47] font-medium pt-2">
                        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#644716]/70 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
