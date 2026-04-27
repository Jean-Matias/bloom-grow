import { Link } from "@tanstack/react-router";
import { Leaf, Camera, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-semibold">Verdant &amp; Stone</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            Crafting deliberate, living landscapes for discerning homeowners
            since 2009. Design, build, maintain.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-primary-foreground/60">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-primary-foreground/60">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (415) 555-0142</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@verdantstone.co</li>
            <li className="flex items-center gap-2"><Camera className="h-4 w-4" /> @verdantstone</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Verdant &amp; Stone Landscape Co.</p>
          <p>Licensed &amp; insured · CSLB #1098234</p>
        </div>
      </div>
    </footer>
  );
}
