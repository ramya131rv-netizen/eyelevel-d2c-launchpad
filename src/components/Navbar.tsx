import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#163027]/80 border-b border-lime/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-lime tracking-tight">
          eyelevel.
        </a>
        <a href="#contact-form">
          <Button
            className="inline-flex items-center gap-2 bg-[#d0e999] text-[#163027] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#d0e999]/90 transition cursor-pointer h-auto"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </header>
  );
}
