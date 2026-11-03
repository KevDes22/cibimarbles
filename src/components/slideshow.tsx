import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

export type Slide = { img: string; label: string; to?: string; search?: Record<string, string> };

/** Self-playing slideshow: every photo shares one uniform 16:9 frame. */
export function Slideshow({ slides, interval = 4500, eyebrow = "Inspiration" }: { slides: Slide[]; interval?: number; eyebrow?: string }) {
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0); // restarts the timer after manual navigation
  const touchX = useRef<number | null>(null);
  const go = (i: number) => { setIndex(((i % n) + n) % n); setTick((t) => t + 1); };

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval, tick]);

  const current = slides[index]!;

  return (
    <div>
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal sm:aspect-[16/9]"
        onTouchStart={(e) => { touchX.current = e.touches[0]?.clientX ?? null; }}
        onTouchEnd={(e) => {
          const s = touchX.current, end = e.changedTouches[0]?.clientX;
          if (s != null && end != null && Math.abs(end - s) > 40) go(index + (end < s ? 1 : -1));
          touchX.current = null;
        }}
        aria-roledescription="carousel"
      >
        {slides.map((it, i) => (
          <img
            key={it.label}
            src={it.img}
            alt={`${it.label} — ${eyebrow.toLowerCase()}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${i === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-gradient-to-t from-charcoal/80 to-transparent p-6 text-ivory md:p-12">
          <div>
            <p className="eyebrow text-ivory/70">{eyebrow} · {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</p>
            <h3 className="mt-3 text-3xl md:text-5xl">{current.label}</h3>
          </div>
          {current.to && (
            <Link to={current.to as "/collections"} search={(current.search ?? {}) as never} className="eyebrow hidden border border-ivory/60 px-6 py-3 hover:bg-ivory hover:text-charcoal sm:inline-block">Explore</Link>
          )}
        </div>
        <button onClick={() => go(index - 1)} aria-label="Previous slide" className="eyebrow absolute left-0 top-1/2 -translate-y-1/2 bg-charcoal/50 px-5 py-4 text-ivory hover:bg-charcoal">←</button>
        <button onClick={() => go(index + 1)} aria-label="Next slide" className="eyebrow absolute right-0 top-1/2 -translate-y-1/2 bg-charcoal/50 px-5 py-4 text-ivory hover:bg-charcoal">→</button>
        {/* progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-ivory/20">
          <div key={`${index}-${tick}`} className="h-full bg-gold" style={{ animation: `slide-progress ${interval}ms linear forwards` }} />
        </div>
      </div>
      <div className="mt-4 grid gap-2 md:gap-4" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {slides.map((it, i) => (
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
    </div>
  );
}
