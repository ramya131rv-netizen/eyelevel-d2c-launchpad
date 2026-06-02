import {
  MessageCircle,
  Target,
  Sparkles,
  Users,
  Palette,
} from "lucide-react";

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

export function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-left" id="services">
      <h2 className="font-display text-3xl sm:text-5xl text-lime max-w-3xl leading-tight">
        D2C Marketing Built for Indian Brands
      </h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-forest-2 border border-lime/15 rounded-2xl p-7 hover:border-lime/40 transition group animate-fade-up"
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
