import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Verdant & Stone" },
      { name: "description", content: "Get in touch to schedule a consultation for your landscape project." },
      { property: "og:title", content: "Contact — Verdant & Stone" },
      { property: "og:description", content: "Schedule a consultation with our landscape design studio." },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-6xl text-balance">
          Let's walk the <em className="text-accent not-italic">site</em>.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          Tell us a bit about your project. We respond within two business days and consultations are complimentary.
        </p>
        <div className="mt-10 space-y-5 text-foreground">
          <div className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5 text-accent" /><div><p className="text-sm text-muted-foreground">Studio</p><p>(415) 555-0142</p></div></div>
          <div className="flex items-start gap-3"><Mail className="h-5 w-5 mt-0.5 text-accent" /><div><p className="text-sm text-muted-foreground">Email</p><p>hello@verdantstone.co</p></div></div>
          <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5 text-accent" /><div><p className="text-sm text-muted-foreground">Studio</p><p>318 Magnolia Ave, Larkspur CA</p></div></div>
        </div>
      </div>

      <div className="md:col-span-7">
        {submitted ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="font-display text-3xl">Thank you.</h2>
            <p className="mt-3 text-muted-foreground">We've received your note and will be in touch within two business days.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5 shadow-soft"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Project location" name="location" placeholder="City or neighborhood" />
            <div>
              <label className="block text-sm font-medium mb-2">Project type</label>
              <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm">
                <option>Garden design</option>
                <option>Full design + build</option>
                <option>Hardscape & stonework</option>
                <option>Stewardship only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tell us about your garden</label>
              <textarea rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm resize-none" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Send inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}{required && <span className="text-accent"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
