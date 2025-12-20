import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { getBlogPost } from "@/data/blogPosts";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F7F6F2]">
        <Navbar />
        <div className="pt-48 pb-20 text-center">
          <h1 className="font-serif text-4xl text-[#644716]">Post Not Found</h1>
          <p className="text-[#644716]/70 mt-4">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-[#8B6F47] font-medium mt-8 hover:text-[#BC7C5F] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, i) => {
        // Handle headings
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={i} className="font-serif text-3xl text-[#644716] mt-10 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={i} className="font-serif text-2xl text-[#644716] mt-8 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        // Handle lists
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-[#644716]/80 my-4 ml-4">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{
                  __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              ))}
            </ul>
          );
        }
        // Regular paragraphs with bold text support
        return (
          <p
            key={i}
            className="text-[#644716]/80 leading-relaxed my-4"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#644716]">$1</strong>')
            }}
          />
        );
      });
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          author: post.author
        }}
      />

      {/* Article Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date,
            "publisher": {
              "@type": "Organization",
              "name": "Mac & Meadow",
              "logo": {
                "@type": "ImageObject",
                "url": "https://macandmeadowco.com/favicon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://macandmeadowco.com/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-16 bg-gradient-to-b from-[#F7F6F2] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-[#8B6F47] font-medium mb-8 hover:text-[#BC7C5F] transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </a>
            </Link>

            <div className="flex items-center gap-6 text-sm text-[#644716]/60 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-[#644716] leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            {formatContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 bg-white border-t border-[#644716]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F7F6F2] text-[#644716]/70 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
