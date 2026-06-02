import { Button } from "../ui/button";

export function RepeatCTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="font-display text-3xl sm:text-5xl text-lime leading-tight animate-fade-up">
        Let's build your D2C engine.
      </h2>
      <p className="mt-5 text-foreground/75 max-w-xl mx-auto animate-fade-up">
        Tell us where you're stuck. We'll tell you what we'd do in the first 30
        days.
      </p>
      <a href="#contact-form" className="inline-block animate-fade-up mt-8">
        <Button
          className="bg-[#d0e999] text-[#163027] px-7 py-6 rounded-full font-medium hover:bg-[#d0e999]/90 transition cursor-pointer text-base h-auto border-none hover:translate-y-[-2px] transition-all duration-200"
        >
          Ready to start? Fill in the form above →
        </Button>
      </a>
    </section>
  );
}
