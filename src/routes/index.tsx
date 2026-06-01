import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Target,
  Sparkles,
  Users,
  Palette,
  ChevronDown,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eyelevel — D2C Marketing Agency India" },
      {
        name: "description",
        content:
          "Eyelevel is a D2C marketing agency in India. WhatsApp, Meta, influencer & AI content built to lower CAC and drive repeat purchases.",
      },
      { property: "og:title", content: "Eyelevel — D2C Marketing Agency India" },
      {
        property: "og:description",
        content:
          "From first click to repeat customer. D2C marketing systems for Indian brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is D2C marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "D2C (direct-to-consumer) marketing is selling directly to end consumers through owned digital channels, bypassing traditional retail. It includes performance ads, WhatsApp, content, influencer, and community marketing.",
              },
            },
            {
              "@type": "Question",
              name: "How do D2C brands reduce CAC in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The most effective strategies are WhatsApp retention marketing, referral programs, and organic content that drives inbound traffic without ad spend.",
              },
            },
            {
              "@type": "Question",
              name: "What are the best D2C marketing strategies in India in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The highest-performing stack combines WhatsApp for retention, Meta for acquisition, AI content for scale, and micro-influencer partnerships for authentic product discovery.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: MessageCircle,
    name: "WhatsApp Marketing",
    desc: "Move high-intent customers from Instagram to WhatsApp. Broadcasts, cart recovery, loyalty flows.",
  },
  {
    icon: Target,
    name: "Meta Performance Marketing",
    desc: "Facebook and Instagram ad campaigns optimized for ROAS, not reach.",
  },
  {
    icon: Sparkles,
    name: "AI Content & Visuals",
    desc: "Product photography, packaging design, ad creatives, and social content at scale.",
  },
  {
    icon: Users,
    name: "Influencer & Celebrity Connects",
    desc: "South Indian creators and celebrities for product endorsements.",
  },
  {
    icon: Palette,
    name: "Brand Identity",
    desc: "Positioning, visual identity, and messaging for D2C brands in crowded markets.",
  },
];

const audience = [
  "D2C brands in food & beverage, beauty, personal care, fashion, and wellness",
  "E-commerce brands on Shopify looking to grow beyond paid ads",
  "Product brands with repeat-purchase potential building a loyal customer base",
];

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

function Index() {
  return (
    <div className="min-h-screen bg-forest text-foreground">
      <Nav />
      <Hero />
      <ProofBar />
      <Services />
      <WhoFor />
      <Testimonial />
      <FAQ />
      <RepeatCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#163027]/80 border-b border-lime/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-lime tracking-tight">
          eyelevel.
        </a>
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 bg-[#d0e999] text-[#163027] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#d0e999]/90 transition"
        >
          Start a project <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
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
            D2C Marketing · India
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-lime">
            D2C Marketing Agency India—From First Click to Repeat Customer
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-xl leading-relaxed">
            D2C brands live and die on CAC and LTV. We build marketing systems that
            bring down your cost of acquisition and bring customers back for the
            second and third purchases.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "WhatsApp, Meta & Influencer—all under one roof",
              "Specialists in South Indian creator ecosystem",
              "Built for brands that compete on retention, not just reach",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/90">
                <Check className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div
      id="contact-form"
      className="bg-forest-2 border border-lime/20 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24 animate-fade-up"
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
          <button
            type="submit"
            className="w-full mt-2 bg-[#d0e999] text-[#163027] font-medium py-3.5 rounded-lg hover:bg-[#d0e999]/90 transition inline-flex items-center justify-center gap-2"
          >
            Submit <ArrowRight className="w-4 h-4" />
          </button>
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

function ProofBar() {
  const stats = [
    ["50+", "Clients Served"],
    ["200+", "Digital Campaigns Completed"],
    ["5★", "Google Rating"],
  ];
  return (
    <section className="border-y border-lime/20 bg-forest-2/50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map(([n, l]) => (
          <div key={l} className="text-center sm:border-r last:border-r-0 border-lime/15">
            <div className="font-display text-4xl text-lime">{n}</div>
            <div className="mt-1 text-sm text-foreground/70">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-display text-3xl sm:text-5xl text-lime max-w-3xl leading-tight">
        D2C Marketing Built for Indian Brands
      </h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-forest-2 border border-lime/15 rounded-2xl p-7 hover:border-lime/40 transition group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#d0e999]/10 flex items-center justify-center mb-5 group-hover:bg-[#d0e999]/20 transition">
              <Icon className="w-5 h-5 text-lime" />
            </div>
            <h3 className="font-display text-xl text-lime leading-snug">{name}</h3>
            <p className="mt-3 text-foreground/75 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoFor() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-lime/15">
      <h2 className="font-display text-3xl sm:text-5xl text-lime">Who This Is For</h2>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {audience.map((a, i) => (
          <div
            key={a}
            className="bg-forest-2 border border-lime/15 rounded-2xl p-7"
          >
            <div className="font-display text-3xl text-lime/40">0{i + 1}</div>
            <p className="mt-4 text-foreground/90 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="text-lime/40 font-display text-6xl leading-none">"</div>
      <p className="font-display text-2xl sm:text-3xl text-lime leading-snug -mt-4">
        We manage D2C marketing across WhatsApp, Meta, and influencer channels for
        brands across India.
      </p>
      <p className="mt-6 text-sm uppercase tracking-[0.2em] text-foreground/60">
        — Eyelevel Client Portfolio
      </p>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 border-t border-lime/15">
      <h2 className="font-display text-3xl sm:text-5xl text-lime mb-12">
        Frequently Asked
      </h2>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="bg-forest-2 border border-lime/15 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[#d0e999]/5 transition"
              >
                <span className="font-display text-lg text-lime">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-lime shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-foreground/80 leading-relaxed animate-fade-up">
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

function RepeatCTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="font-display text-3xl sm:text-5xl text-lime leading-tight">
        Let's build your D2C engine.
      </h2>
      <p className="mt-5 text-foreground/75 max-w-xl mx-auto">
        Tell us where you're stuck. We'll tell you what we'd do in the first 30
        days.
      </p>
      <a
        href="#contact-form"
        className="mt-8 inline-flex items-center gap-2 bg-[#d0e999] text-[#163027] px-7 py-4 rounded-full font-medium hover:bg-[#d0e999]/90 transition"
      >
        Ready to start? Fill in the form above →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-lime/15 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
        <div className="font-display text-lime text-xl">eyelevel.</div>
        <div>© {new Date().getFullYear()} Eyelevel. D2C Marketing, India.</div>
      </div>
    </footer>
  );
}
