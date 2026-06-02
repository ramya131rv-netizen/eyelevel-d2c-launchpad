export function Footer() {
  return (
    <footer className="border-t border-lime/15 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
        <div className="font-display text-lime text-xl">eyelevel.</div>
        <div>© {new Date().getFullYear()} Eyelevel. D2C Marketing, India.</div>
      </div>
    </footer>
  );
}
