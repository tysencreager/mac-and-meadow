import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

interface InstagramFeedProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

// SETUP INSTRUCTIONS:
// 1. Go to https://elfsight.com/ and create a free account
// 2. Create a new Instagram Feed widget
// 3. Connect your Instagram account (@macandmeadowco)
// 4. Customize the appearance to match your brand
// 5. Copy your widget ID and replace "YOUR_WIDGET_ID" below
// 6. The free plan shows "Powered by Elfsight" - upgrade to remove

const ELFSIGHT_WIDGET_ID = "YOUR_WIDGET_ID"; // Replace with your Elfsight widget ID

export function InstagramFeed({
  title = "Follow Us on Instagram",
  subtitle = "Stay connected for skincare tips, behind-the-scenes, and more!",
  showHeader = true
}: InstagramFeedProps) {

  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.getElementById("elfsight-platform")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const isConfigured = ELFSIGHT_WIDGET_ID !== "YOUR_WIDGET_ID";

  return (
    <section className="py-24 bg-[#F7F6F2] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#BC7C5F] font-serif italic text-xl">{subtitle}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#644716] mt-4">{title}</h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {isConfigured ? (
            // Elfsight Instagram Feed Widget
            <div
              className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
              data-elfsight-app-lazy
            />
          ) : (
            // Placeholder when widget is not configured
            <div className="bg-white rounded-[2rem] p-12 shadow-xl text-center">
              <div className="max-w-md mx-auto space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#644716]">@macandmeadowco</h3>
                <p className="text-[#644716]/70">
                  Follow us on Instagram for skincare tips, product updates, and behind-the-scenes content!
                </p>
                <a
                  href="https://www.instagram.com/macandmeadowco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Always show a follow button below the feed */}
        {isConfigured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-10"
          >
            <a
              href="https://www.instagram.com/macandmeadowco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#8B6F47] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B6F47]/90 transition-colors shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              Follow @macandmeadowco
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
