import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Star, Instagram, Home, Leaf, Shield, Droplets } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function LocationSyracuse() {
  // LocalBusiness + FAQPage Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mac & Meadow - Syracuse, Utah",
    "description": "Premium Wagyu tallow skincare products handcrafted in Syracuse, Utah. Natural tallow cream serving Davis County and Northern Utah.",
    "url": "https://macandmeadowco.com/locations/syracuse-utah",
    "telephone": "",
    "email": "macandmeadowco@gmail.com",
    "image": "https://macandmeadowco.com/opengraph.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Syracuse",
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0894",
      "longitude": "-112.0647"
    },
    "areaServed": [
      { "@type": "City", "name": "Syracuse, Utah" },
      { "@type": "City", "name": "Layton, Utah" },
      { "@type": "City", "name": "Clearfield, Utah" },
      { "@type": "City", "name": "Kaysville, Utah" },
      { "@type": "City", "name": "Farmington, Utah" },
      { "@type": "City", "name": "West Point, Utah" },
      { "@type": "City", "name": "Clinton, Utah" }
    ],
    "sameAs": [
      "https://www.instagram.com/macandmeadowco"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Mac & Meadow located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mac & Meadow is based in Syracuse, Utah. We handcraft all of our Wagyu tallow skincare products locally and offer delivery throughout Davis County and Northern Utah."
        }
      },
      {
        "@type": "Question",
        "name": "Does Mac & Meadow offer local pickup in Syracuse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer convenient local pickup in Syracuse, Utah. Contact us to arrange a pickup time that works for you. We also deliver throughout Davis County including Layton, Clearfield, Kaysville, and Farmington."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Mac & Meadow serve in Davis County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Davis County including Syracuse, Layton, Clearfield, Kaysville, Farmington, West Point, Clinton, and surrounding areas. Free local delivery is available for Davis County residents."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Tallow Skincare Syracuse, UT - Local Wagyu Tallow Cream | Davis County"
        description="Buy natural Wagyu tallow skincare in Syracuse, Utah. Mac & Meadow is a local Davis County business offering handcrafted beef tallow cream. Free delivery in Layton, Clearfield, Kaysville & Northern Utah."
        url="/locations/syracuse-utah"
      />
      <Helmet>
        <meta name="keywords" content="tallow cream Syracuse Utah, beef tallow skincare Davis County, natural skincare Syracuse UT, Wagyu tallow Layton, tallow moisturizer Clearfield, organic skincare Kaysville, beef tallow lotion Davis County, tallow balm Northern Utah, local skincare Syracuse" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-[#BC7C5F]">
              <Home className="w-5 h-5" />
              <span className="font-serif italic text-xl">Our Home Base</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Tallow Skincare in Syracuse, Utah
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Discover <strong>natural Wagyu tallow skincare</strong> made right here in Syracuse, Utah.
              Mac & Meadow proudly serves Davis County and Northern Utah with premium,
              locally-handcrafted <strong>beef tallow cream</strong> for healthy, glowing skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#BC7C5F] font-serif italic text-xl">Serving Syracuse & Davis County</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-4">
                Local Tallow Skincare, Handcrafted With Care
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Free Local Delivery",
                  description: "Free delivery available throughout Syracuse and Davis County areas including Layton, Clearfield, Kaysville, Farmington, West Point, and Clinton."
                },
                {
                  icon: Clock,
                  title: "Convenient Local Pickup",
                  description: "Schedule a pickup time in Syracuse that works for you. Skip the shipping and get your tallow skincare products the same day!"
                },
                {
                  icon: Star,
                  title: "Small Batch Quality",
                  description: "Every jar is handcrafted in small batches right here in Syracuse, Utah, ensuring the highest quality Wagyu tallow skincare."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-[#F7F6F2] rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <service.icon className="w-7 h-7 text-[#8B6F47]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#644716] mb-3">{service.title}</h3>
                  <p className="text-[#644716]/70 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Tallow Section */}
      <section className="py-24 bg-[#8B6F47] text-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#BC7C5F] font-serif italic text-xl">Perfect for Northern Utah</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F7F6F2] mt-4">
                Why Davis County Loves Beef Tallow Skincare
              </h2>
              <p className="text-[#F7F6F2]/80 text-lg mt-6 max-w-2xl mx-auto">
                Northern Utah's climate demands skincare that truly nourishes. Wagyu tallow cream
                delivers exactly what your skin needs—naturally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Deep Moisture for Dry Skin",
                  description: "Davis County's low humidity and cold winters can leave skin cracked and dry. Tallow's fatty acid profile provides lasting hydration that synthetic moisturizers can't match."
                },
                {
                  icon: Shield,
                  title: "Protection from the Elements",
                  description: "Whether you're skiing at Powder Mountain or hiking Antelope Island, tallow cream creates a protective barrier that keeps skin healthy in all conditions."
                },
                {
                  icon: Leaf,
                  title: "Clean, Natural Ingredients",
                  description: "Syracuse families want the best for their skin. Our tallow skincare contains only natural ingredients—no chemicals, parabens, or artificial fragrances."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-[#F7F6F2]/10 backdrop-blur rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-[#F7F6F2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-7 h-7 text-[#F7F6F2]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#F7F6F2] mb-3">{benefit.title}</h3>
                  <p className="text-[#F7F6F2]/80 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Syracuse Section */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <span className="text-[#BC7C5F] font-serif italic text-xl">Our Story</span>
                <h2 className="font-serif text-4xl text-[#644716]">
                  Rooted in Syracuse, Serving Our Community
                </h2>
                <div className="space-y-4 text-[#644716]/70 leading-relaxed">
                  <p>
                    <strong>Mac & Meadow was born right here in Syracuse, Utah.</strong> Our founder, McKenzie,
                    started creating tallow skincare products for her family before sharing them
                    with our wonderful Davis County community.
                  </p>
                  <p>
                    We believe in <strong>supporting local businesses</strong>, which is why we're proud to serve Syracuse
                    and the greater Davis County area. From the shores of the Great Salt Lake
                    to the Wasatch Mountains, our neighbors have embraced natural, holistic skincare.
                  </p>
                  <p>
                    Whether you're in <strong>Syracuse, Layton, Clearfield, Kaysville, Farmington</strong>, or
                    surrounding areas, we're here to bring you the healing benefits of premium
                    Wagyu tallow cream—made fresh, made local.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#8B6F47] to-[#644716] rounded-[2rem] p-10 text-[#F7F6F2] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-noise opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC7C5F]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 space-y-6">
                  <h3 className="font-serif text-2xl">Davis County Delivery Areas</h3>
                  <ul className="space-y-3 text-[#F7F6F2]/90">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Syracuse, UT (Home Base)
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Layton, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Clearfield, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Kaysville, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Farmington, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      West Point, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Clinton, UT
                    </li>
                  </ul>
                  <p className="text-[#F7F6F2]/70 text-sm">
                    Don't see your area? Contact us—we likely deliver there too!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#BC7C5F] font-serif italic text-xl">Common Questions</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-4">
                Tallow Skincare FAQ - Syracuse & Davis County
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Where is Mac & Meadow located in Utah?",
                  answer: "Mac & Meadow is based in Syracuse, Utah, in Davis County. We handcraft all of our Wagyu tallow skincare products locally and offer free delivery throughout Davis County and Northern Utah, plus local pickup options in Syracuse."
                },
                {
                  question: "Can I pick up my order locally in Syracuse?",
                  answer: "Yes! We offer convenient local pickup in Syracuse, Utah. Simply contact us after placing your order and we'll arrange a pickup time that works for you. It's a great way to skip shipping and get your tallow skincare the same day!"
                },
                {
                  question: "Does Mac & Meadow deliver to Layton, Clearfield, and Kaysville?",
                  answer: "Absolutely! We offer free local delivery throughout Davis County including Layton, Clearfield, Kaysville, Farmington, West Point, Clinton, and all surrounding areas. Just place your order online and we'll deliver directly to your door."
                },
                {
                  question: "What makes Mac & Meadow's tallow cream special?",
                  answer: "Our Wagyu tallow cream is handcrafted in small batches right here in Syracuse using premium grass-fed Wagyu beef tallow. It's packed with vitamins A, D, E, and K, and contains only natural ingredients. Supporting Mac & Meadow means supporting a local Utah family business."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-[#F7F6F2] rounded-2xl p-8"
                >
                  <h3 className="font-serif text-xl text-[#644716] mb-3">{faq.question}</h3>
                  <p className="text-[#644716]/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-12"
            >
              <Button
                size="lg"
                className="bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full h-14 px-10 shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                  Shop Tallow Skincare
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#644716]/30 text-[#644716] hover:bg-[#8B6F47]/5 rounded-full h-14 px-10"
                asChild
              >
                <Link href="/products">
                  View All Products
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] p-10 md:p-14 shadow-xl text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#644716] mb-6">
                Ready to Order in Syracuse or Davis County?
              </h2>
              <p className="text-[#644716]/70 text-lg leading-relaxed mb-8">
                Contact us to arrange local pickup in Syracuse or delivery anywhere in Davis County.
                We'd love to help you discover the benefits of natural tallow skincare!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://www.instagram.com/macandmeadowco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8B6F47] hover:text-[#BC7C5F] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@macandmeadowco</span>
                </a>
                <span className="hidden sm:block text-[#644716]/30">|</span>
                <a
                  href="mailto:macandmeadowco@gmail.com"
                  className="text-[#8B6F47] hover:text-[#BC7C5F] transition-colors"
                >
                  macandmeadowco@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
