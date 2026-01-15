import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Star, Phone, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function LocationSyracuse() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Syracuse, Utah - Wagyu Tallow Skincare"
        description="Mac & Meadow offers premium Wagyu tallow skincare products in Syracuse, Utah. Local pickup and delivery available. Natural, handcrafted skincare for Davis County residents."
        url="/locations/syracuse-utah"
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
            <div className="flex items-center justify-center gap-2 text-[#BC7C5F]">
              <MapPin className="w-5 h-5" />
              <span className="font-serif italic text-xl">Our Home Base</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Syracuse, Utah
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Discover natural, handcrafted Wagyu tallow skincare products right here in Syracuse.
              We proudly serve Davis County and the surrounding Utah communities with premium,
              locally-made skincare solutions.
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
                Local Skincare, Made With Care
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Local Delivery",
                  description: "Free delivery available throughout Syracuse and nearby Davis County areas including Layton, Clearfield, and Kaysville."
                },
                {
                  icon: Clock,
                  title: "Convenient Pickup",
                  description: "Schedule a pickup time that works for you. We're happy to meet locally for your convenience."
                },
                {
                  icon: Star,
                  title: "Small Batch Quality",
                  description: "Every jar is handcrafted in small batches right here in Syracuse, ensuring the highest quality product."
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
                <span className="text-[#BC7C5F] font-serif italic text-xl">Why Syracuse?</span>
                <h2 className="font-serif text-4xl text-[#644716]">
                  Rooted in Our Community
                </h2>
                <div className="space-y-4 text-[#644716]/70 leading-relaxed">
                  <p>
                    Mac & Meadow was born right here in Syracuse, Utah. Our founder, McKenzie,
                    started creating tallow skincare products for her family before sharing them
                    with our wonderful community.
                  </p>
                  <p>
                    We believe in supporting local, which is why we're proud to serve Syracuse
                    and the greater Davis County area. From the shores of the Great Salt Lake
                    to the Wasatch Mountains, our neighbors have embraced natural, holistic skincare.
                  </p>
                  <p>
                    Whether you're in Syracuse, Layton, Clearfield, Kaysville, Farmington, or
                    surrounding areas, we're here to bring you the healing benefits of Wagyu
                    tallow cream.
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
                  <h3 className="font-serif text-2xl">Areas We Serve</h3>
                  <ul className="space-y-3 text-[#F7F6F2]/90">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Syracuse, UT
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
                  </ul>
                  <p className="text-[#F7F6F2]/70 text-sm">
                    Don't see your area? Contact us—we may still be able to accommodate!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[#BC7C5F] font-serif italic text-xl">Our Products</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716]">
                Premium Wagyu Tallow Skincare
              </h2>
              <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
                Our whipped tallow cream is made with grass-fed Wagyu beef tallow, rich in
                vitamins A, D, E, and K. Perfect for dry skin, eczema, and anyone seeking
                natural, chemical-free skincare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  className="bg-[#8B6F47] text-[#F7F6F2] hover:bg-[#8B6F47]/90 rounded-full h-14 px-10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Shop Now
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
              </div>
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
                Ready to Order in Syracuse?
              </h2>
              <p className="text-[#644716]/70 text-lg leading-relaxed mb-8">
                Contact us to arrange local pickup or delivery. We'd love to help you discover
                the benefits of natural tallow skincare.
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
