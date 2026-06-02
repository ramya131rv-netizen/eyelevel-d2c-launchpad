import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is D2C marketing?",
    a: "D2C (direct-to-consumer) marketing is selling directly to end consumers through owned digital channels, bypassing traditional retail. It includes performance ads, WhatsApp, content, influencer, and community marketing.",
  },
  {
    q: "How do D2C brands reduce CAC in India?",
    a: "The most effective strategies are WhatsApp retention marketing, referral programs, and organic content that drives inbound traffic without ad spend.",
  },
  {
    q: "What are the best D2C marketing strategies in India in 2026?",
    a: "The highest-performing stack combines WhatsApp for retention, Meta for acquisition, AI content for scale, and micro-influencer partnerships for authentic product discovery.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 border-t border-lime/15 text-left" id="faq">
      <h2 className="font-display text-3xl sm:text-5xl text-lime mb-12">
        Frequently Asked
      </h2>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="bg-forest-2 border border-lime/15 rounded-xl overflow-hidden animate-fade-up"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[#d0e999]/5 transition cursor-pointer"
              >
                <span className="font-display text-lg text-lime">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-lime shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-foreground/80 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
