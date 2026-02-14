import { useState } from "react";
import { Link } from "wouter";
import { X, Mail, Phone, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

export function SignupPopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!agreedToPrivacy) {
      setError("Please agree to the Privacy Policy to continue.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      await apiRequest("POST", "/api/signup", { email, phone });
      setSubmitted(true);
      setTimeout(() => setIsVisible(false), 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
          className="bg-[#F7F6F2] rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-1 hover:bg-black/10 rounded-full transition-colors z-10"
            aria-label="Dismiss popup"
          >
            <X className="w-5 h-5 text-[#3D2E1F]" />
          </button>

          <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5334] p-6 text-center">
            <Gift className="w-10 h-10 text-white/90 mx-auto mb-3" />
            <h2 className="font-serif text-2xl text-white mb-1">
              Get Exclusive Deals
            </h2>
            <p className="text-white/80 text-sm">
              Sign up for exclusive discounts and be the first to hear about new products.
            </p>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-4">
                <p className="font-serif text-xl text-[#3D2E1F] mb-1">Thank you!</p>
                <p className="text-[#3D2E1F]/70 text-sm">We'll be in touch with exclusive offers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-[#3D2E1F] mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B6F47]" />
                    <input
                      id="signup-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2.5 border border-[#D4C5B0] rounded-lg bg-white text-[#3D2E1F] placeholder:text-[#3D2E1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/50 focus:border-[#8B6F47]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-phone" className="block text-sm font-medium text-[#3D2E1F] mb-1">
                    Phone <span className="text-[#3D2E1F]/50 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B6F47]" />
                    <input
                      id="signup-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full pl-10 pr-4 py-2.5 border border-[#D4C5B0] rounded-lg bg-white text-[#3D2E1F] placeholder:text-[#3D2E1F]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/50 focus:border-[#8B6F47]"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToPrivacy}
                    onChange={(e) => {
                      setAgreedToPrivacy(e.target.checked);
                      if (e.target.checked) setError("");
                    }}
                    className="mt-0.5 w-4 h-4 rounded border-[#D4C5B0] text-[#8B6F47] focus:ring-[#8B6F47]/50 accent-[#8B6F47]"
                  />
                  <span className="text-xs text-[#3D2E1F]/70">
                    I agree to the{" "}
                    <Link href="/privacy-policy">
                      <a className="text-[#8B6F47] underline hover:text-[#6B5334]" onClick={() => setIsVisible(false)}>
                        Privacy Policy
                      </a>
                    </Link>
                  </span>
                </label>

                {error && (
                  <p className="text-red-600 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#8B6F47] hover:bg-[#7A6140] disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors"
                >
                  {submitting ? "Signing up..." : "Sign Me Up"}
                </button>

                <p className="text-[#3D2E1F]/50 text-xs text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
