import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Star, Instagram, Building } from "lucide-react";
import { Link } from "wouter";

export default function LocationSaltLakeCity() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Salt Lake City, Utah - Wagyu Tallow Skincare"
        description="Mac & Meadow delivers premium Wagyu tallow skincare products to Salt Lake City, Utah. Natural, handcrafted tallow cream for SLC residents. Local Utah skincare."
        url="/locations/salt-lake-city-utah"
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
              <Building className="w-5 h-5" />
              <span className="font-serif italic text-xl">Now Serving</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#644716]">
              Salt Lake City, Utah
            </h1>
            <p className="text-[#644716]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Bringing natural, handcrafted Wagyu tallow skincare to Salt Lake City and
              the Wasatch Front. Experience the healing power of traditional skincare,
              delivered right to your door.
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
                Natural Skincare for Salt Lake City
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Delivery Available",
                  description: "We deliver throughout Salt Lake City and surrounding areas including Sandy, Murray, Draper, and the entire Salt Lake Valley."
                },
                {
                  icon: Clock,
                  title: "Market Events",
                  description: "Find us at local farmers markets and pop-up events throughout the Salt Lake area. Follow us on Instagram for updates!"
                },
                {
                  icon: Star,
                  title: "Utah Made",
                  description: "Proudly made in Utah using premium Wagyu tallow. Supporting local means getting the freshest, highest-quality products."
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
                <span className="text-[#BC7C5F] font-serif italic text-xl">Why Salt Lake City?</span>
                <h2 className="font-serif text-4xl text-[#644716]">
                  Expanding Our Utah Roots
                </h2>
                <div className="space-y-4 text-[#644716]/70 leading-relaxed">
                  <p>
                    Salt Lake City has embraced the natural skincare movement, and Mac & Meadow
                    is proud to be part of it. Our customers in SLC value clean ingredients,
                    local businesses, and products that actually work.
                  </p>
                  <p>
                    The dry Utah climate can be tough on skin. That's where Wagyu tallow cream
                    shines—its deeply moisturizing formula helps combat the effects of our
                    high altitude and low humidity, keeping skin soft and nourished year-round.
                  </p>
                  <p>
                    Whether you're in downtown SLC, the Avenues, Sugar House, or anywhere in
                    the valley, we're excited to bring our handcrafted skincare products to you.
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
                  <h3 className="font-serif text-2xl">Salt Lake Valley Areas</h3>
                  <ul className="space-y-3 text-[#F7F6F2]/90">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Downtown Salt Lake City
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#BC7C5F]" />
                      Sugar House
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
                  </ul>
                  <p className="text-[#F7F6F2]/70 text-sm">
                    Serving the entire Salt Lake Valley and beyond!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-[#BC7C5F] font-serif italic text-xl">Perfect for Utah's Climate</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-4">
                Why Tallow Works in Salt Lake City
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Combat Dry Climate",
                  description: "Utah's low humidity can leave skin parched. Tallow's rich fatty acid profile provides deep, lasting moisture."
                },
                {
                  title: "High Altitude Protection",
                  description: "At 4,200+ feet, skin is exposed to more UV and dryness. Tallow helps create a protective barrier."
                },
                {
                  title: "Winter Ready",
                  description: "Salt Lake winters are harsh. Our whipped tallow cream keeps skin soft and protected through the cold months."
                },
                {
                  title: "Natural & Clean",
                  description: "SLC residents value clean living. Our products contain only natural ingredients—no chemicals or synthetics."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-[#F7F6F2] rounded-2xl p-8"
                >
                  <h3 className="font-serif text-xl text-[#644716] mb-3">{benefit.title}</h3>
                  <p className="text-[#644716]/70 leading-relaxed">{benefit.description}</p>
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
                Get Mac & Meadow in Salt Lake City
              </h2>
              <p className="text-[#644716]/70 text-lg leading-relaxed mb-8">
                Ready to experience natural tallow skincare? Contact us to arrange delivery
                or find out about upcoming markets and events in the SLC area.
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
