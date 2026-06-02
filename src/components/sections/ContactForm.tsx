import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div
      id="contact-form"
      className="bg-forest-2 border border-lime/20 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24 animate-fade-up text-left"
      style={{ animationDelay: "0.15s" }}
    >
      <h2 className="font-display text-2xl sm:text-3xl text-lime leading-tight">
        Talk to us about your marketing.
      </h2>
      <p className="mt-2 text-sm text-foreground/70">
        We'll get back within one business day.
      </p>
      {submitted ? (
        <div className="mt-8 p-6 border border-lime/30 rounded-xl text-center">
          <p className="text-lime font-display text-xl">Thanks — we'll be in touch.</p>
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Field label="Full Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Company Name" name="company" type="text" required />
          <div>
            <label className="block text-xs uppercase tracking-wider text-foreground/60 mb-2">
              What do you need help with?
            </label>
            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full bg-[#163027] border border-lime/20 text-foreground rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-lime/60 transition"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>WhatsApp Marketing</option>
                <option>Meta Performance Marketing</option>
                <option>AI Content & Visuals</option>
                <option>Influencer & Celebrity Connects</option>
                <option>Brand Identity</option>
                <option>Full D2C Stack</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-lime pointer-events-none" />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-2 bg-[#d0e999] text-[#163027] font-medium py-3.5 rounded-lg hover:bg-[#d0e999]/90 transition inline-flex items-center justify-center gap-2 cursor-pointer h-auto border-none"
          >
            Submit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-foreground/60 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-[#163027] border border-lime/20 text-foreground rounded-lg px-4 py-3 focus:outline-none focus:border-lime/60 transition"
      />
    </div>
  );
}
