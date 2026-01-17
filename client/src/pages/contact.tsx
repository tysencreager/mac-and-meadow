import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";

const ELFSIGHT_WIDGET_ID = "248c87cf-d63e-4df0-a757-f6ba3ee46eec";

export default function Contact() {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.getElementById("elfsight-platform")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Contact"
        description="Get in touch with Mac & Meadow. Questions about our Wagyu tallow cream or natural skincare products? We'd love to hear from you."
        url="/contact"
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
            <span className="text-[#BC7C5F] font-serif italic text-xl">Get in Touch</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Contact Us
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed">
              Have questions about our products? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram + FAQ Section - Side by Side */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Instagram Feed Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <span className="text-[#BC7C5F] font-serif italic text-lg">Latest from @macandmeadowco</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#644716] mt-2">Follow Us on Instagram</h2>
                </div>
                <div className="bg-[#F7F6F2] rounded-2xl p-4 flex justify-center">
                  <div
                    className={`elfsight-app-${ELFSIGHT_WIDGET_ID} w-full`}
                    data-elfsight-app-lazy
                  />
                </div>
                <div className="text-center lg:text-left">
                  <a
                    href="https://www.instagram.com/macandmeadowco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#8B6F47] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B6F47]/90 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Follow @macandmeadowco
                  </a>
                </div>
              </motion.div>

              {/* FAQ Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <span className="text-[#BC7C5F] font-serif italic text-lg">Quick Answers</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#644716] mt-2">Common Questions</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I place an order?",
                      answer: "Orders can be placed through our Square shop. Simply click the 'Shop Now' button or contact us via Instagram."
                    },
                    {
                      question: "Do you ship nationwide?",
                      answer: "Currently, we serve local Utah customers only with pickup and local delivery options. We're working on expanding shipping options!"
                    },
                    {
                      question: "How should I store my tallow cream?",
                      answer: "Store in a cool, dry place away from direct sunlight. Keep the lid tightly closed and always use clean hands when applying."
                    },
                    {
                      question: "Is tallow safe for sensitive skin?",
                      answer: "Tallow is naturally biocompatible with human skin, making it gentle for most skin types. We recommend a patch test first if you have very sensitive skin."
                    }
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="bg-[#F7F6F2] rounded-xl p-5"
                    >
                      <h3 className="font-serif text-lg text-[#644716] mb-2">{faq.question}</h3>
                      <p className="text-[#644716]/70 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="font-serif text-4xl text-[#644716] mb-6">Let's Connect</h2>
                  <p className="text-[#644716]/70 text-lg leading-relaxed">
                    Whether you have questions about our products, want to learn more about tallow skincare, or are ready to place an order, we're here to help.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-2">Instagram</h3>
                      <a
                        href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B6F47] hover:text-[#BC7C5F] transition-colors"
                      >
                        @macandmeadowco
                      </a>
                      <p className="text-[#644716]/75 text-sm mt-1">
                        Follow us for skincare tips, product updates, and behind-the-scenes content.
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-2">Location</h3>
                      <p className="text-[#644716]/70">
                        Syracuse, Utah
                      </p>
                      <p className="text-[#644716]/75 text-sm mt-1">
                        Local pickup and delivery available in the area.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#644716] mb-2">Email</h3>
                      <a
                        href="mailto:macandmeadowco@gmail.com"
                        className="text-[#8B6F47] hover:text-[#BC7C5F] transition-colors"
                      >
                        macandmeadowco@gmail.com
                      </a>
                      <p className="text-[#644716]/75 text-sm mt-1">
                        We typically respond within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#8B6F47] to-[#644716] rounded-[2rem] p-12 text-[#F7F6F2] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-noise opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC7C5F]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl">Ready to Shop?</h3>
                    <p className="text-[#F7F6F2]/80 leading-relaxed">
                      Browse our collection and experience the healing power of Wagyu tallow skincare.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#F7F6F2] text-[#8B6F47] hover:bg-white rounded-full h-14 text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                      Visit Our Shop
                    </a>
                  </Button>

                  <div className="pt-8 border-t border-[#F7F6F2]/20 space-y-4">
                    <h4 className="font-serif text-xl">Follow Our Journey</h4>
                    <a
                      href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#F7F6F2]/10 hover:bg-[#F7F6F2]/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@macandmeadowco</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
