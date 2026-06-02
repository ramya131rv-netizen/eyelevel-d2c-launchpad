const audience = [
  "D2C brands in food & beverage, beauty, personal care, fashion, and wellness",
  "E-commerce brands on Shopify looking to grow beyond paid ads",
  "Product brands with repeat-purchase potential building a loyal customer base",
];

export function WhoFor() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-lime/15 text-left" id="who-for">
      <h2 className="font-display text-3xl sm:text-5xl text-lime">Who This Is For</h2>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {audience.map((a, i) => (
          <div
            key={a}
            className="bg-forest-2 border border-lime/15 rounded-2xl p-7 animate-fade-up"
          >
            <div className="font-display text-3xl text-lime/40">0{i + 1}</div>
            <p className="mt-4 text-foreground/90 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
