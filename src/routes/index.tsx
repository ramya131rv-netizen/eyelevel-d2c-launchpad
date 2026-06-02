import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { WhoFor } from "../components/sections/WhoFor";
import { Testimonial } from "../components/sections/Testimonial";
import { FAQ } from "../components/sections/FAQ";
import { RepeatCTA } from "../components/sections/RepeatCTA";
import { Footer } from "../components/Footer";

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

function Index() {
  return (
    <div className="min-h-screen bg-forest text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <WhoFor />
      <Testimonial />
      <FAQ />
      <RepeatCTA />
      <Footer />
    </div>
  );
}


