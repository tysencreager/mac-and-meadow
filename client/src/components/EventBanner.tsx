import { useState } from "react";
import { X, Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-gradient-to-br from-[#D4A5A5] to-[#C9B1A0] text-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5" />
              <span className="font-serif text-2xl font-medium">
                Galentines Market
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2 text-white/90">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Golden Spike Event Center</span>
              </div>
              <p className="text-white/80 text-sm">1000 N 1200 W, Ogden UT</p>

              <div className="flex items-center justify-center gap-3 text-white/90 text-sm pt-2">
                <span>Feb 6th, 3pm-9pm</span>
                <span className="text-white/50">|</span>
                <span>Feb 7th, 9am-6pm</span>
              </div>
            </div>

            <Link href="/contact">
              <a className="inline-block bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Learn More
              </a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
