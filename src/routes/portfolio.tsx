import { createFileRoute } from "@tanstack/react-router";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import hero from "@/assets/hero-landscape.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Verdant & Stone" },
      { name: "description", content: "Selected residential landscape projects across Northern California." },
      { property: "og:title", content: "Portfolio — Verdant & Stone" },
      { property: "og:description", content: "Selected residential landscape projects across Northern California." },
      { property: "og:image", content: p1 },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: hero, title: "Olive Ridge", place: "Sonoma · 2024", desc: "A modernist hillside reimagined with mature olive groves and a glass-edge infinity pool.", span: "md:col-span-12 aspect-[16/8]" },
  { img: p1, title: "Hedgerow House", place: "Atherton · 2024", desc: "Formal boxwood parterres meet a wild meadow at the property's edge.", span: "md:col-span-7 aspect-[4/5]" },
  { img: p2, title: "Twilight Terrace", place: "Mill Valley · 2024", desc: "A sunken courtyard built around fire, water, and a vertical garden wall.", span: "md:col-span-5 aspect-[4/5]" },
  { img: p3, title: "Tea House Garden", place: "Berkeley · 2023", desc: "A serene Japanese-inspired meditation garden with koi pond and pruned acers.", span: "md:col-span-5 aspect-[4/5]" },
  { img: p4, title: "Meadow Reverie", place: "Healdsburg · 2023", desc: "Three acres of pollinator meadow surrounding a working farmhouse.", span: "md:col-span-7 aspect-[4/5]" },
];

function Portfolio() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-7xl text-balance max-w-4xl">
            Fifteen years, <em className="text-accent not-italic">one garden at a time</em>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-12">
          {projects.map((p) => (
            <figure key={p.title} className={`group relative overflow-hidden rounded-2xl bg-muted ${p.span}`}>
              <img src={p.img} alt={p.title} loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                <p className="text-xs uppercase tracking-widest text-cream/70">{p.place}</p>
                <h3 className="mt-1 font-display text-3xl font-medium">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm text-cream/80 leading-relaxed">{p.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
