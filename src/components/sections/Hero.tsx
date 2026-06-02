import { Check } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-left">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(208,233,153,0.15), transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-lime/70 mb-6 border border-lime/20 rounded-full px-3 py-1">
            D2C Marketing Agency· India
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-lime">
            From First Click to Repeat Customer
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-xl leading-relaxed">
            D2C brands live and die on CAC and LTV. We build marketing systems that
            bring down your cost of acquisition and bring customers back for the
            second and third purchases.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
