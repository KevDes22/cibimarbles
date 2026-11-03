import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import kitchen from "@/assets/kitchen.jpg";
import staircase from "@/assets/staircase.jpg";
import bathroom from "@/assets/bathroom.jpg";
import hero from "@/assets/hero.jpg";
import lobby from "@/assets/lobby.jpg";
import { PageIntro } from "@/components/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — CIBI Marbles & Granite Installations" },
      { name: "description", content: "Granite and marble countertops, staircases, flooring and vanities — natural stone in finished spaces." },
      { property: "og:title", content: "Projects — CIBI Marbles & Granite" },
      { property: "og:description", content: "Spaces that tell our story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const items = [
  { img: kitchen, label: "Kitchen countertops" },
  { img: staircase, label: "Natural stone staircases" },
  { img: bathroom, label: "Bathroom vanities" },
  { img: hero, label: "Flooring" },
  { img: lobby, label: "Interior surfaces" },
];

function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = items.length;
  const go = useCallback((i: number) => setIndex(((i % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [index, go]);

  const current = items[index]!;

  return (
    <>
      <PageIntro eyebrow="Projects" title="Spaces That Tell Our Story.">
        A selection of applications. CIBI installation photography will appear here as projects are documented.
      </PageIntro>
      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal sm:aspect-[16/9]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => { touchX.current = e.touches[0]?.clientX ?? null; setPaused(true); }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX;
            if (start != null && end != null && Math.abs(end - start) > 40) go(index + (end < start ? 1 : -1));
            touchX.current = null;
          }}
          aria-roledescription="carousel"
        >
          {items.map((it, i) => (
            <img
              key={it.label}
              src={it.img}
              alt={`${it.label} — inspiration`}
              aria-hidden={i !== index}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6 text-ivory md:p-12">
            <p className="eyebrow text-ivory/70">Inspiration · {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</p>
            <h2 className="mt-3 text-3xl md:text-5xl">{current.label}</h2>
          </div>
          <button onClick={() => go(index - 1)} aria-label="Previous slide" className="eyebrow absolute left-0 top-1/2 -translate-y-1/2 bg-charcoal/50 px-5 py-4 text-ivory transition-colors hover:bg-charcoal">←</button>
          <button onClick={() => go(index + 1)} aria-label="Next slide" className="eyebrow absolute right-0 top-1/2 -translate-y-1/2 bg-charcoal/50 px-5 py-4 text-ivory transition-colors hover:bg-charcoal">→</button>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2 md:gap-4">
          {items.map((it, i) => (
            <button
              key={it.label}
              onClick={() => go(i)}
              aria-label={`Show ${it.label}`}
              aria-current={i === index}
              className={`relative aspect-[16/9] overflow-hidden transition-opacity ${i === index ? "opacity-100 outline outline-1 outline-offset-2 outline-gold" : "opacity-50 hover:opacity-90"}`}
            >
              <img src={it.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="pt-14"><Link to="/contact" className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background">Discuss your project</Link></div>
      </section>
    </>
  );
}
