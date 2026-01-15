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
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-[#BC7C5F] to-[#8B6F47] text-white relative z-[60]"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="font-serif text-sm sm:text-base font-medium">
                  Galentines Market
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <span>Feb 6th, 3pm-9pm</span>
                <span className="text-white/50">|</span>
                <span>Feb 7th, 9am-6pm</span>
              </div>
              <Link href="/contact">
                <a className="text-xs sm:text-sm underline underline-offset-2 hover:text-white/80 transition-colors">
                  Learn More
                </a>
              </Link>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
