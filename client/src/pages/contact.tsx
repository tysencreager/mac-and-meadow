import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";

const ELFSIGHT_WIDGET_ID = "248c87cf-d63e-4df0-a757-f6ba3ee46eec";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqedbngp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

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
                <div className="flex justify-center lg:justify-start">
                  <div
                    className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-[2rem] p-10 md:p-12 shadow-lg border border-[#8B6F47]/10"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl text-[#644716]">Send a Message</h3>
                    <p className="text-[#644716]/70 mt-2">
                      Fill out the form below and we'll get back to you soon.
                    </p>
                  </div>

                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <CheckCircle className="w-16 h-16 text-[#8B6F47] mx-auto" />
                      <h4 className="font-serif text-2xl text-[#644716]">Message Sent!</h4>
                      <p className="text-[#644716]/70">
                        Thank you for reaching out. We'll get back to you within 24-48 hours.
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="text-[#8B6F47] hover:text-[#BC7C5F] underline underline-offset-4 transition-colors mt-2"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#644716] mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#8B6F47]/20 bg-[#F7F6F2] text-[#644716] placeholder:text-[#644716]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47]/40 transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#644716] mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#8B6F47]/20 bg-[#F7F6F2] text-[#644716] placeholder:text-[#644716]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47]/40 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#644716] mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-[#8B6F47]/20 bg-[#F7F6F2] text-[#644716] placeholder:text-[#644716]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47]/40 transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>

                      {formState === "error" && (
                        <p className="text-red-600 text-sm">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        size="lg"
                        className="w-full bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#644716] rounded-full h-14 text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60"
                      >
                        {formState === "submitting" ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
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
