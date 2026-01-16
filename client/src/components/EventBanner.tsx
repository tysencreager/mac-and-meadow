import { useState } from "react";
import { X, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={() => setIsVisible(false)}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-br from-[#BC7C5F] to-[#8B6F47] text-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close pop-up"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-6 pt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-6 h-6" />
                  <h2 className="font-serif text-2xl font-medium">
                    Galentines Market
                  </h2>
                </div>

                <div className="space-y-2 text-white/90 mb-6">
                  <p className="text-lg">Feb 6th, 3pm-9pm</p>
                  <p className="text-lg">Feb 7th, 9am-6pm</p>
                </div>

                <Link href="/contact" onClick={() => setIsVisible(false)}>
                  <a className="inline-block bg-white text-[#8B6F47] px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
