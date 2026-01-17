import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Star, Instagram, Building, Leaf, Shield, Droplets } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function LocationSaltLakeCity() {
  // LocalBusiness + FAQPage Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mac & Meadow - Salt Lake City",
    "description": "Premium Wagyu tallow skincare products serving Salt Lake City, Utah. Natural, handcrafted tallow cream for healthy, glowing skin.",
    "url": "https://macandmeadowco.com/locations/salt-lake-city-utah",
    "telephone": "",
    "email": "macandmeadowco@gmail.com",
    "image": "https://macandmeadowco.com/opengraph.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7608",
      "longitude": "-111.8910"
    },
    "areaServed": [
      { "@type": "City", "name": "Salt Lake City, Utah" },
      { "@type": "City", "name": "Sandy, Utah" },
      { "@type": "City", "name": "Murray, Utah" },
      { "@type": "City", "name": "Draper, Utah" },
      { "@type": "City", "name": "West Valley City, Utah" },
      { "@type": "City", "name": "South Jordan, Utah" }
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
        "name": "Does Mac & Meadow deliver to Salt Lake City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Mac & Meadow delivers premium Wagyu tallow skincare products throughout Salt Lake City and the entire Salt Lake Valley, including Sandy, Murray, Draper, West Valley City, and South Jordan."
        }
      },
      {
        "@type": "Question",
        "name": "What is Wagyu tallow cream good for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wagyu tallow cream is excellent for dry skin, eczema, and general moisturizing. It's packed with vitamins A, D, E, and K, and is especially beneficial in Utah's dry, high-altitude climate where skin needs extra nourishment."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy tallow skincare in Salt Lake City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can purchase Mac & Meadow tallow skincare products online at macandmeadowco.square.site for delivery to Salt Lake City, or find us at local farmers markets and pop-up events throughout the SLC area."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Tallow Skincare Salt Lake City, UT - Natural Wagyu Tallow Cream"
        description="Buy premium Wagyu tallow skincare in Salt Lake City, Utah. Mac & Meadow delivers natural, handcrafted tallow cream to SLC, Sandy, Murray, Draper & the Wasatch Front. Shop Utah's best beef tallow moisturizer."
        url="/locations/salt-lake-city-utah"
      />
      <Helmet>
        <meta name="keywords" content="tallow cream Salt Lake City, beef tallow skincare SLC, natural skincare Salt Lake City Utah, Wagyu tallow Utah, tallow moisturizer SLC, organic skincare Salt Lake, beef tallow lotion Utah, tallow balm Salt Lake City" />
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
              <Building className="w-5 h-5" />
              <span className="font-serif italic text-xl">Now Serving</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Tallow Skincare in Salt Lake City, Utah
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Discover premium <strong>Wagyu tallow cream</strong> in Salt Lake City. Mac & Meadow brings
              natural, handcrafted skincare to the Wasatch Front—perfect for Utah's dry climate.
              Experience the healing power of traditional <strong>beef tallow skincare</strong> delivered right to your door.
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
              <span className="text-[#BC7C5F] font-serif italic text-xl">Serving the Wasatch Front</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-4">
                Natural Tallow Skincare for Salt Lake City Residents
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "SLC Delivery Available",
                  description: "We deliver premium tallow skincare throughout Salt Lake City and surrounding areas including Sandy, Murray, Draper, South Jordan, and the entire Salt Lake Valley."
                },
                {
                  icon: Clock,
                  title: "Local Market Events",
                  description: "Find Mac & Meadow at Salt Lake City farmers markets and pop-up events. Follow us on Instagram for upcoming markets in the SLC area!"
                },
                {
                  icon: Star,
                  title: "Utah Made Products",
                  description: "Proudly handcrafted in Utah using premium grass-fed Wagyu tallow. Supporting local means getting the freshest, highest-quality tallow skincare."
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

      {/* Why Tallow for SLC Section */}
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
              <span className="text-[#BC7C5F] font-serif italic text-xl">Perfect for Utah's Climate</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F7F6F2] mt-4">
                Why Salt Lake City Loves Beef Tallow Skincare
              </h2>
              <p className="text-[#F7F6F2]/80 text-lg mt-6 max-w-2xl mx-auto">
                Salt Lake City's unique high-altitude desert climate demands serious moisturizing power.
                Wagyu tallow cream provides exactly what your skin needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Combats Dry Utah Air",
                  description: "SLC's low humidity (averaging just 30-40%) can leave skin parched. Tallow's rich fatty acid profile mirrors your skin's natural oils for deep, lasting moisture."
                },
                {
                  icon: Shield,
                  title: "High Altitude Protection",
                  description: "At 4,200+ feet elevation, Salt Lake City residents face increased UV exposure. Tallow cream creates a protective barrier while nourishing skin."
                },
                {
                  icon: Leaf,
                  title: "100% Natural Ingredients",
                  description: "Salt Lake City values clean living. Our tallow skincare contains only natural ingredients—no chemicals, parabens, or synthetic fragrances."
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

      {/* About SLC Section */}
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
                <span className="text-[#BC7C5F] font-serif italic text-xl">Local Utah Business</span>
                <h2 className="font-serif text-4xl text-[#644716]">
                  Bringing Natural Skincare to Salt Lake City
                </h2>
                <div className="space-y-4 text-[#644716]/70 leading-relaxed">
                  <p>
                    <strong>Salt Lake City has embraced the natural skincare movement</strong>, and Mac & Meadow
                    is proud to serve the community. SLC residents understand the value of clean ingredients,
                    local businesses, and products that actually deliver results.
                  </p>
                  <p>
                    <strong>Utah's dry, high-altitude climate</strong> can be tough on skin. That's where Wagyu tallow cream
                    truly shines—its deeply moisturizing formula helps combat the effects of our
                    low humidity and intense sun exposure, keeping skin soft and nourished year-round.
                  </p>
                  <p>
                    Whether you're in <strong>downtown Salt Lake City</strong>, the Avenues, Sugar House,
                    the University area, or anywhere in the valley, we're excited to bring our
                    handcrafted tallow skincare products directly to you.
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
                  <h3 className="font-serif text-2xl">Salt Lake Valley Delivery Areas</h3>
                  <ul className="space-y-3 text-[#F7F6F2]/90">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Downtown Salt Lake City, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Sugar House, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Murray, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Sandy, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Draper, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      West Valley City, UT
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      South Jordan, UT
                    </li>
                  </ul>
                  <p className="text-[#F7F6F2]/70 text-sm">
                    Serving the entire Salt Lake Valley and Wasatch Front!
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
                Tallow Skincare FAQ - Salt Lake City
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Does Mac & Meadow deliver tallow skincare to Salt Lake City?",
                  answer: "Yes! We deliver premium Wagyu tallow skincare products throughout Salt Lake City and the entire Salt Lake Valley, including Sandy, Murray, Draper, West Valley City, South Jordan, and surrounding areas. Order online and we'll deliver directly to your door."
                },
                {
                  question: "What is Wagyu tallow cream and why is it good for Utah's climate?",
                  answer: "Wagyu tallow cream is a natural moisturizer made from rendered beef fat from premium Wagyu cattle. It's packed with vitamins A, D, E, and K. It's especially beneficial in Salt Lake City's dry, high-altitude climate because it provides deep, long-lasting moisture and helps protect skin from environmental stressors."
                },
                {
                  question: "Where can I buy beef tallow skincare in Salt Lake City?",
                  answer: "You can purchase Mac & Meadow tallow skincare products online at our shop for delivery anywhere in Salt Lake City. We also attend local farmers markets and pop-up events throughout the SLC area—follow us on Instagram @macandmeadowco for event updates!"
                },
                {
                  question: "Is tallow skincare good for eczema and dry skin?",
                  answer: "Many of our Salt Lake City customers use our Wagyu tallow cream specifically for eczema, psoriasis, and extremely dry skin. Tallow is biocompatible with human skin and provides intense nourishment without synthetic chemicals or irritating fragrances."
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
                Get Mac & Meadow Tallow Skincare in Salt Lake City
              </h2>
              <p className="text-[#644716]/70 text-lg leading-relaxed mb-8">
                Ready to experience natural tallow skincare in Salt Lake City? Shop online for delivery
                or contact us to learn about upcoming markets and events in the SLC area.
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
