import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import {
  getRecommendation,
  type Answers,
  type AnswerKey,
  type QuestionId,
  type Recommendation,
} from "@/lib/tallowQuiz";

// GA4 event helper (gtag is loaded globally in index.html).
function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, params || {});
  }
}

interface Question {
  id: QuestionId;
  title: string;
  hint?: string;
  options: { key: AnswerKey; label: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    title: "What's your main reason for trying tallow?",
    options: [
      { key: "A", label: "Smooth fine lines & bring back that glow" },
      { key: "B", label: "Deep, everyday moisture for dry skin" },
      { key: "C", label: "Calm sensitive or reactive skin (eczema, redness)" },
      { key: "D", label: "Treat stubborn problem spots (lips, heels, cuticles, elbows)" },
      { key: "E", label: "Wind down & sleep better at night" },
      { key: "F", label: "Help my skincare absorb / refresh dull skin" },
    ],
  },
  {
    id: "q2",
    title: "How would you describe your skin?",
    options: [
      { key: "A", label: "Normal / combination" },
      { key: "B", label: "Dry to very dry" },
      { key: "C", label: "Sensitive / reactive" },
      { key: "D", label: "Mature, with aging concerns" },
    ],
  },
  {
    id: "q3",
    title: "Where will you mainly use it?",
    options: [
      { key: "A", label: "My face" },
      { key: "B", label: "Full body" },
      { key: "C", label: "Targeted spots (hands, feet, lips, elbows)" },
      { key: "D", label: "Feet or chest before bed" },
    ],
  },
  {
    id: "q4",
    title: "Pick your scent vibe:",
    options: [
      { key: "A", label: "Warm & sweet (vanilla, orange, frankincense)" },
      { key: "B", label: "Earthy & woodsy" },
      { key: "C", label: "Calming lavender" },
      { key: "D", label: "Fragrance-free, please" },
    ],
  },
  {
    id: "q5",
    title: "Are you already using a Mac & Meadow moisturizer?",
    options: [
      { key: "A", label: "Yes, I'm a fan" },
      { key: "B", label: "Not yet — this is my first" },
    ],
  },
  {
    id: "q6",
    title: "Who's this for?",
    hint: "Helps us personalize your result.",
    options: [
      { key: "A", label: "For me" },
      { key: "B", label: "For him" },
      { key: "C", label: "A gift" },
    ],
  },
];

function ResultCard({
  rec,
  isPrimary,
  forWhom,
}: {
  rec: Recommendation;
  isPrimary: boolean;
  forWhom?: AnswerKey;
}) {
  const { product, variant, tag } = rec;
  const displayName = variant ? `Therapy Balm — ${variant}` : product.name;
  // Light personalization of the blurb by Q6.
  const intro =
    forWhom === "C"
      ? "A thoughtful gift: "
      : forWhom === "B"
        ? "Perfect for him: "
        : "";

  return (
    <div
      className={`bg-white rounded-[2rem] overflow-hidden border border-[#312213]/10 flex flex-col ${
        isPrimary ? "shadow-2xl md:flex-row" : "shadow-sm"
      }`}
    >
      <img
        src={product.image}
        alt={displayName}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover ${
          isPrimary ? "h-[260px] md:h-auto md:w-1/2" : "h-[200px]"
        }`}
      />
      <div className="p-7 md:p-9 flex flex-col flex-1">
        {tag && (
          <span className="inline-block self-start bg-[#4C5246]/10 text-[#4C5246] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            {tag}
          </span>
        )}
        {isPrimary && (
          <span className="text-[#4C5246] font-serif italic text-lg mb-1">
            Your match
          </span>
        )}
        <h3
          className={`font-serif text-[#312213] ${
            isPrimary ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {displayName}
        </h3>
        {variant && (
          <p className="text-[#4C5246] text-sm font-medium mt-1">
            Recommended scent for you
          </p>
        )}
        <p className="text-[#312213]/70 leading-relaxed mt-3 mb-6 flex-1">
          {intro}
          {product.blurb}
        </p>
        <a
          href={product.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track("shop_click", {
              product: product.name,
              variant: variant || undefined,
              placement: isPrimary ? "primary" : "addon",
            })
          }
          className="inline-flex items-center justify-center gap-2 bg-[#4C5246] text-[#F7F4EF] hover:bg-[#312213] py-3 px-6 rounded-full text-center font-medium transition-colors"
        >
          Shop {variant ? variant : product.name}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function FindYourTallow() {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length-1, then results
  const [answers, setAnswers] = useState<Answers>({});
  const [started, setStarted] = useState(false);

  const showResults = step >= QUESTIONS.length;
  const current = QUESTIONS[step];
  const progress = Math.round((step / QUESTIONS.length) * 100);

  const result = useMemo(
    () => (showResults ? getRecommendation(answers) : null),
    [showResults, answers],
  );

  // Fire quiz_complete + product_recommended once results are computed.
  useEffect(() => {
    if (!result) return;
    track("quiz_complete", {
      primary: result.primary.product.name,
      add_ons: result.addOns.map((a) => a.product.name).join(", "),
    });
    track("product_recommended", {
      product: result.primary.product.name,
      variant: result.primary.variant || undefined,
    });
  }, [result]);

  const handleSelect = (key: AnswerKey) => {
    if (!started) {
      track("quiz_start");
      setStarted(true);
    }
    const next = { ...answers, [current.id]: key };
    setAnswers(next);
    // Advance after a short beat so the selection is visible.
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const restart = () => {
    track("quiz_retake");
    setAnswers({});
    setStep(0);
    setStarted(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <SEO
        title="Find Your Tallow"
        description="Answer a few quick questions and get a personalized Mac & Meadow tallow recommendation — matched to your skin, needs, and scent."
        url="/find-your-tallow"
      />
      <Navbar />

      <section className="pt-36 md:pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Intro header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#4C5246] font-serif italic text-xl">
              Find Your Match
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#312213] mt-2">
              Find Your Tallow
            </h1>
            {!showResults && (
              <p className="text-[#312213]/70 text-lg leading-relaxed mt-4">
                A few quick questions and we'll point you to the Mac & Meadow
                product made for your skin. No pressure — just a friendly guide.
              </p>
            )}
          </div>

          {!showResults ? (
            <div className="max-w-2xl mx-auto">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-[#312213]/60 mb-2">
                  <span>
                    Question {step + 1} of {QUESTIONS.length}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full bg-[#312213]/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#4C5246] rounded-full"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-[#312213] mb-2">
                    {current.title}
                  </h2>
                  {current.hint && (
                    <p className="text-[#312213]/60 text-sm mb-6">{current.hint}</p>
                  )}
                  <div className={current.hint ? "space-y-3" : "space-y-3 mt-6"}>
                    {current.options.map((opt) => {
                      const selected = answers[current.id] === opt.key;
                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelect(opt.key)}
                          className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex items-center gap-4 ${
                            selected
                              ? "border-[#4C5246] bg-[#4C5246]/10"
                              : "border-[#312213]/15 bg-white hover:border-[#4C5246]/50 hover:bg-[#4C5246]/5"
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                              selected
                                ? "border-[#4C5246] bg-[#4C5246] text-[#F7F4EF]"
                                : "border-[#312213]/30 text-[#312213]/50"
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="text-[#312213] font-medium">
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Back */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-[#312213]/70 hover:text-[#312213] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <span className="text-[#312213]/40 text-xs">
                  Pick an answer to continue
                </span>
              </div>
            </div>
          ) : (
            result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 text-[#4C5246] mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-bold">
                      Your Personalized Pick
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#312213]">
                    Here's your match
                  </h2>
                </div>

                <ResultCard rec={result.primary} isPrimary forWhom={answers.q6} />

                {result.addOns.length > 0 && (
                  <div className="mt-12">
                    <h3 className="font-serif text-2xl text-[#312213] text-center mb-6">
                      Complete your routine
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {result.addOns.map((rec) => (
                        <ResultCard
                          key={rec.product.key + (rec.variant || "")}
                          rec={rec}
                          isPrimary={false}
                          forWhom={answers.q6}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Retake + fallback */}
                <div className="mt-12 text-center space-y-4">
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-2 text-[#4C5246] hover:text-[#312213] font-medium transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake the quiz
                  </button>
                  <p className="text-[#312213]/60 text-sm">
                    Still not sure?{" "}
                    <Link href="/contact">
                      <a className="text-[#4C5246] underline underline-offset-4 hover:text-[#312213] transition-colors">
                        Contact us
                      </a>
                    </Link>{" "}
                    — we're happy to help you choose.
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
