import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Hammer, Trees, Sparkles, Droplets, Lightbulb } from "lucide-react";
import craft from "@/assets/craft.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Verdant & Stone" },
      { name: "description", content: "Garden design, hardscape build, planting, lighting, irrigation, and year-round stewardship." },
      { property: "og:title", content: "Services — Verdant & Stone" },
      { property: "og:description", content: "Design, build, plant, and tend extraordinary residential gardens." },
      { property: "og:image", content: craft },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Sprout, title: "Garden Design", body: "Site analysis, master planning, planting design, and detailed construction documents.", items: ["Conceptual master plans", "3D visualizations", "Planting palettes"] },
  { icon: Hammer, title: "Build & Hardscape", body: "Our in-house craftsmen execute every line of your plan with precision.", items: ["Natural stone & paving", "Pergolas & outdoor kitchens", "Walls, steps & terraces"] },
  { icon: Trees, title: "Planting & Trees", body: "Sourcing mature specimens and assembling layered, climate-appropriate planting.", items: ["Specimen tree sourcing", "Native & drought-tolerant", "Edible & cutting gardens"] },
  { icon: Droplets, title: "Water Features", body: "From quiet reflecting pools to natural swimming ponds and bubbling rills.", items: ["Pools & spas", "Koi ponds & streams", "Reflecting basins"] },
  { icon: Lightbulb, title: "Lighting & Irrigation", body: "Low-voltage landscape lighting and smart irrigation that thinks for itself.", items: ["Architectural lighting", "Smart irrigation", "Lawn alternatives"] },
  { icon: Sparkles, title: "Stewardship", body: "A small team of horticulturists who know your garden by name.", items: ["Seasonal pruning", "Soil & plant health", "Annual rotations"] },
];

function Services() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-7xl text-balance max-w-4xl">
            From first sketch to <em className="text-accent not-italic">final bloom</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We are one studio, end to end. Working with a single team — designers, builders, and gardeners — keeps your vision intact from concept through the decades a garden takes to mature.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card p-8 hover:shadow-soft hover:-translate-y-1 transition-all">
              <s.icon className="h-8 w-8 text-accent" />
              <h2 className="mt-6 font-display text-2xl font-medium">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-4">
                {s.items.map((i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" /> {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-12">
          {[
            ["01", "Discover", "We walk the site, listen carefully, and learn how you live."],
            ["02", "Design", "Concept, master plan, and presentation — typically 8–12 weeks."],
            ["03", "Build & Tend", "Construction, planting, and a long stewardship together."],
          ].map(([n, t, d]) => (
            <div key={n}>
              <p className="font-display text-5xl text-accent">{n}</p>
              <h3 className="mt-4 font-display text-2xl font-medium">{t}</h3>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
