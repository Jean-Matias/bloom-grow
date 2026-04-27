import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Trees, Hammer, Sprout, Sparkles } from "lucide-react";
import hero from "@/assets/hero-landscape.jpg";
import craft from "@/assets/craft.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant & Stone — Landscape Design & Build Studio" },
      { name: "description", content: "Award-winning landscape design, build, and stewardship for discerning homeowners. Bay Area boutique landscape studio." },
      { property: "og:title", content: "Verdant & Stone — Landscape Design & Build Studio" },
      { property: "og:description", content: "Crafting deliberate, living landscapes. Design · Build · Maintain." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Twilight aerial view of a luxury landscaped backyard" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bark/30 via-bark/40 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-40 md:pt-48 md:pb-56">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-sm uppercase tracking-[0.3em] text-cream/80"
          >
            EST. 2009 · BAY AREA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-cream md:text-7xl lg:text-8xl text-balance"
          >
            Landscapes that <em className="text-accent not-italic">live</em>, breathe, and belong.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-cream/85 leading-relaxed"
          >
            We design and build exceptional gardens — quiet, considered places
            shaped by stone, water, light, and the patient growth of plants.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shadow-elegant hover:bg-accent/90 transition-all"
            >
              Begin your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
            >
              View our work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Our craft</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
              A boutique studio for gardens of consequence.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We believe a great garden is built slowly — with conviction in
              every paver laid, every tree placed, every line of sight composed.
              Our team of designers, horticulturists, and stonemasons works in
              tight collaboration from first sketch to final pruning.
            </p>
            <p>
              Each project is bespoke. Each is a fifteen-year conversation with
              the land.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 grain">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">What we do</p>
              <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">Four disciplines, one studio.</h2>
            </div>
            <Link to="/services" className="text-sm font-medium text-foreground hover:text-accent inline-flex items-center gap-2">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-border">
            {[
              { icon: Sprout, title: "Garden Design", body: "Master plans rooted in your site, climate, and how you actually live outdoors." },
              { icon: Hammer, title: "Build & Hardscape", body: "Stonework, terraces, water features, lighting, and outdoor architecture." },
              { icon: Trees, title: "Planting & Trees", body: "Mature specimens, native palettes, and four-season planting design." },
              { icon: Sparkles, title: "Stewardship", body: "Year-round horticultural care that lets a garden truly settle in." },
            ].map((s) => (
              <div key={s.title} className="bg-background p-8 group hover:bg-card transition-colors">
                <s.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">Recent gardens.</h2>
          </div>
          <Link to="/portfolio" className="text-sm font-medium text-foreground hover:text-accent inline-flex items-center gap-2">
            Full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          <PortfolioCard className="md:col-span-7 aspect-[4/3]" img={p1} title="Hillside Estate" tag="Sonoma · 2024" />
          <PortfolioCard className="md:col-span-5 aspect-[4/3]" img={p2} title="Twilight Terrace" tag="Mill Valley · 2024" />
          <PortfolioCard className="md:col-span-5 aspect-[4/3]" img={p3} title="Tea House Garden" tag="Berkeley · 2023" />
          <PortfolioCard className="md:col-span-7 aspect-[4/3]" img={p4} title="Meadow Reverie" tag="Healdsburg · 2023" />
        </div>
      </section>

      {/* CRAFT BANNER */}
      <section className="relative isolate overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[28rem]">
          <div className="relative">
            <img src={craft} alt="Hands pruning a hedge" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
          </div>
          <div className="bg-primary text-primary-foreground p-12 md:p-20 flex flex-col justify-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary-foreground/60">Philosophy</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
              "A garden is the slowest of the performing arts."
            </h2>
            <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed">
              — Mary Cantwell. We work to that tempo. Patient, attentive, and
              built to mature gracefully across decades.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
              Meet the studio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl text-balance">
          Ready to begin? <span className="text-accent italic">Let's walk the site.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Initial consultations are unhurried, on-site, and free. We'd love to hear what you're imagining.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-elegant hover:bg-primary/90 transition-all"
        >
          Schedule a consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

function PortfolioCard({ img, title, tag, className = "" }: { img: string; title: string; tag: string; className?: string }) {
  return (
    <div className={`relative group overflow-hidden rounded-2xl bg-muted ${className}`}>
      <img src={img} alt={title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-cream">
        <p className="text-xs uppercase tracking-widest text-cream/70">{tag}</p>
        <h3 className="mt-1 font-display text-2xl font-medium">{title}</h3>
      </div>
    </div>
  );
}
