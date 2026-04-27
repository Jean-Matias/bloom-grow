import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdant & Stone" },
      { name: "description", content: "A boutique landscape studio of designers, horticulturists, and stonemasons working across Northern California." },
      { property: "og:title", content: "About — Verdant & Stone" },
      { property: "og:description", content: "A boutique landscape studio working at the intersection of design and horticulture." },
      { property: "og:image", content: craft },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-7xl text-balance">
            A studio shaped by <em className="text-accent not-italic">place</em>.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Verdant &amp; Stone was founded in 2009 by landscape architect Naomi Castellanos and stonemason Eli Park, on the conviction that the best gardens are made by small teams who stay involved.
            </p>
            <p>
              Today we are twelve — designers, project leads, horticulturists, and craftspeople — working on a small number of residential projects each year across the Bay Area, the wine country, and the central coast.
            </p>
            <p>
              We measure success in decades, not seasons.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <img src={craft} alt="A craftsman pruning a hedge" loading="lazy" width={1600} height={1200} className="rounded-2xl object-cover h-full w-full shadow-soft" />
        </div>
      </section>

      <section className="bg-secondary/40 grain border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-3">
          {[
            { k: "150+", v: "Gardens designed and built" },
            { k: "12", v: "Designers and craftspeople on staff" },
            { k: "15 yrs", v: "Average client relationship" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-6xl font-medium text-primary">{s.k}</p>
              <p className="mt-3 text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-balance">
          Curious whether we'd be the right fit?
        </h2>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Start a conversation
        </Link>
      </section>
    </>
  );
}
