import { useState } from "react";
import type { Product } from "@/lib/catalogue";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProductGallery({ product }: { product: Product }) {
  const [shot, setShot] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = product.gallery[shot] ?? product.gallery[0];
  if (!current) return null;

  return (
    <>
      <Button variant="ghost" onClick={() => setZoom(true)} className="group relative block aspect-[4/3] h-auto w-full overflow-hidden rounded-none bg-paper p-0 hover:bg-paper md:aspect-[5/4]" aria-label="Zoom image">
        <img src={current.src} alt={`${product.name} — ${current.label}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className="eyebrow absolute bottom-4 right-4 bg-charcoal/80 px-3 py-2 text-ivory/80">Zoom</span>
      </Button>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
        {product.gallery.map((image, index) => (
          <div key={image.label} className="min-w-0">
            <Button variant="ghost" onClick={() => setShot(index)} aria-label={image.label} aria-pressed={index === shot}
              className={`relative aspect-[4/3] h-auto w-full overflow-hidden rounded-none border bg-paper p-0 hover:bg-paper ${index === shot ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}>
              <img src={image.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </Button>
            <p className="mt-2 text-xs leading-relaxed text-stone">{image.label}</p>
          </div>
        ))}
      </div>
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-5xl rounded-none border-0 bg-paper p-0">
          <DialogTitle className="sr-only">{product.name} — {current.label}</DialogTitle>
          <img src={current.src} alt={`${product.name} — ${current.label}`} className="max-h-[88vh] w-full object-contain" />
        </DialogContent>
      </Dialog>
    </>
  );
}