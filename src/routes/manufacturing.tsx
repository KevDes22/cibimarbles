import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site";
import kitchen from "@/assets/projects/a.jpeg";

// Upload all 18 photos to src/assets/manufacturing/ with these exact filenames.
import Q from "@/assets/manufacturing/Q.jpeg";
import W from "@/assets/manufacturing/W.jpeg";
import X from "@/assets/manufacturing/stone.png";
import Y from "@/assets/manufacturing/Y.jpeg";
import Z from "@/assets/manufacturing/Z.jpeg";
import U from "@/assets/manufacturing/U.jpeg";
import S from "@/assets/manufacturing/S.jpeg";
import T from "@/assets/manufacturing/T.jpeg";
import A1 from "@/assets/manufacturing/A1.jpeg";
import A2 from "@/assets/manufacturing/A2.jpeg";
import A3 from "@/assets/manufacturing/A3.jpeg";
import A4 from "@/assets/manufacturing/A4.jpeg";
import A5 from "@/assets/manufacturing/A5.jpeg";
import A6 from "@/assets/manufacturing/A6.jpeg";
import A7 from "@/assets/manufacturing/A7.jpeg";
import A8 from "@/assets/manufacturing/A8.jpeg";
import A9 from "@/assets/manufacturing/A9.jpeg";
import B1 from "@/assets/manufacturing/B1.jpeg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Our Manufacturing Process — CIBI Marbles & Granite" },
      {
        name: "description",
        content:
          "Follow the journey of Nigerian natural stone: quarry extraction, block handling, precision slab cutting, surface finishing and dispatch.",
      },
      { property: "og:title", content: "From Quarry to Finished Stone — CIBI" },
      {
        property: "og:description",
        content: "A closer look at how natural stone becomes an architectural surface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Manufacturing,
});

type ProcessPhoto = {
  src: string;
  title: string;
  caption: string;
  alt: string;
};

type ProcessStage = {
  number: string;
  title: string;
  kicker: string;
  intro: string;
  photos: ProcessPhoto[];
};

const stages: ProcessStage[] = [
  {
    number: "01",
    title: "From the Earth",
    kicker: "Quarry extraction",
    intro:
      "Every remarkable stone surface begins with a raw granite deposit. At the quarry, large sections of natural rock are prepared, cut and carefully separated into transportable blocks.",
    photos: [
      {
        src: W,
        title: "Preparing the stone for extraction",
        caption:
          "Workers drill into the exposed rock, preparing the stone for controlled separation into large quarry blocks.",
        alt: "Workers drilling into exposed rock at a quarry",
      },
      {
        src: Y,
        title: "Cutting at the quarry",
        caption:
          "Heavy-duty stone-cutting equipment works across the quarry surface to create the cuts needed to release large sections of rock.",
        alt: "Large quarry cutting machine operating over natural rock",
      },
      {
        src: X,
        title: "Newly extracted granite blocks",
        caption:
          "Rough-cut blocks reveal the raw scale and natural character of the material before precision processing begins.",
        alt: "Rough granite blocks arranged outdoors at a quarry",
      },
      {
        src: Z,
        title: "Moving heavy stone blocks",
        caption:
          "A wheel loader handles substantial stone sections, helping position them safely for the next stage of production.",
        alt: "Industrial wheel loader handling a granite block",
      },
    ],
  },
  {
    number: "02",
    title: "Moving the Material",
    kicker: "Handling & transportation",
    intro:
      "Extracted stone is handled with specialised lifting equipment and transported from the quarry to the processing facility, where the blocks can be transformed into slabs.",
    photos: [
      {
        src: U,
        title: "Loading blocks for transport",
        caption:
          "Large natural stone blocks are positioned on a flatbed truck with lifting equipment, ready for movement from the quarry.",
        alt: "Large stone blocks being lifted onto a flatbed truck",
      },
      {
        src: S,
        title: "Handling blocks at the stone yard",
        caption:
          "An overhead gantry crane lifts and positions heavy granite blocks in the processing yard, reducing manual handling of these enormous loads.",
        alt: "Gantry crane above stacked granite blocks at a processing yard",
      },
    ],
  },
  {
    number: "03",
    title: "Precision in Every Cut",
    kicker: "Block & slab cutting",
    intro:
      "At the manufacturing stage, industrial saws reduce massive blocks into thinner stone sections. Water is used during cutting to cool the blades and carry away stone particles.",
    photos: [
      {
        src: A8,
        title: "Primary block sawing",
        caption:
          "A large circular blade begins dividing a raw granite block into sections suitable for further processing.",
        alt: "Large industrial circular saw cutting a raw stone block",
      },
      {
        src: Q,
        title: "Multiple slabs from one block",
        caption:
          "A multi-blade saw creates a series of closely spaced cuts through the granite block, producing individual slabs.",
        alt: "Multi-blade stone cutting machine slicing a granite block with cooling water",
      },
      {
        src: A6,
        title: "Water-cooled cutting in progress",
        caption:
          "Continuous water flow cools the cutting area as the blades pass through the stone, helping maintain a controlled cutting process.",
        alt: "Water flowing over the same multi-blade granite saw during cutting",
      },
      {
        src: A3,
        title: "The emerging slab profile",
        caption:
          "Parallel cuts reveal a stack of thin stone sections, showing how a single block is transformed into multiple slabs.",
        alt: "Close view of parallel cuts in a granite block beneath a saw",
      },
      {
        src: A7,
        title: "Trimming slabs to size",
        caption:
          "A circular cutting machine trims stone along a guided bed, preparing sections for their required dimensions.",
        alt: "Industrial circular saw working over a stone slab on a cutting bed",
      },
      {
        src: A1,
        title: "Uniform stone sections",
        caption:
          "Freshly sawn slabs are separated into even sections, ready to advance to further finishing and fabrication.",
        alt: "Closely spaced granite slab sections after machine cutting",
      },
    ],
  },
  {
    number: "04",
    title: "Revealing Natural Beauty",
    kicker: "Surface finishing & fabrication",
    intro:
      "After cutting, stone surfaces are processed to improve their texture and finish. Different machinery prepares slabs for architectural uses while allowing each granite's natural pattern to remain the focal point.",
    photos: [
      {
        src: T,
        title: "Preparing the surface",
        caption:
          "Stone slabs pass through a mechanised finishing line where equipment works across the surface in preparation for the desired finish.",
        alt: "Granite slabs travelling beneath a mechanised finishing machine",
      },
      {
        src: A2,
        title: "Surface treatment in progress",
        caption:
          "A granite slab moves along a processing line as finishing equipment works on the stone's exposed surface.",
        alt: "Granite slab travelling across rollers under a finishing machine",
      },
    ],
  },
  {
    number: "05",
    title: "Ready for the Journey Ahead",
    kicker: "Sorting, packing & dispatch",
    intro:
      "Processed stone is organised by size and format, secured for handling and prepared for delivery. Careful loading and protective packing help the slabs travel to their destination.",
    photos: [
      {
        src: A4,
        title: "Organised finished stone sections",
        caption:
          "Cut granite pieces are grouped in stacks so their dimensions and quantities can be managed before packing.",
        alt: "Stacks of cut granite pieces supported by a timber rack",
      },
      {
        src: A5,
        title: "Protected storage",
        caption:
          "Bundles of stone slabs are braced with timber supports and arranged in the storage area ahead of shipment.",
        alt: "Crated granite slabs stacked in a covered warehouse",
      },
      {
        src: B1,
        title: "Prepared for transport",
        caption:
          "Stone sections are grouped into strapped, timber-supported bundles on a delivery vehicle to limit movement in transit.",
        alt: "Packed granite sections secured on a truck bed",
      },
      {
        src: A9,
        title: "Loaded for delivery",
        caption:
          "Large packaged stone sections are secured onto a flatbed vehicle, marking the final stage before dispatch.",
        alt: "Wooden-braced granite bundles loaded on a flatbed truck",
      },
    ],
  },
];

function ManufacturingPhoto({ photo }: { photo: ProcessPhoto }) {
  return (
    <figure className="group min-w-0">
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <figcaption className="pt-5">
        <h3 className="font-display text-2xl leading-snug text-foreground">
          {photo.title}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
          {photo.caption}
        </p>
      </figcaption>
    </figure>
  );
}

function Manufacturing() {
  return (
    <>
      <PageIntro eyebrow="Proudly Manufactured in Nigeria" title="From Our Quarries To Your Home.">
        Follow the journey of natural granite — from the first quarry cut to
        carefully prepared slabs ready for homes and architectural projects.
      </PageIntro>

      <div className="relative h-[360px] overflow-hidden bg-charcoal md:h-[560px]">
        <img
          src={A8}
          alt="Stone cutting equipment working on a raw granite block"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute bottom-8 left-6 right-6 max-w-3xl text-ivory md:bottom-14 md:left-12">
          <p className="eyebrow text-ivory/80">The manufacturing journey</p>
          <p className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Crafted from the strength of the earth.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-36">
        <div className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <p className="eyebrow text-stone md:col-span-3">Our process</p>
          <div className="md:col-span-9">
            <h2 className="max-w-4xl font-display text-3xl leading-tight md:text-5xl">
              Every beautiful finish begins long before the stone reaches its final space.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
              Discover the people, equipment and processes behind granite
              extraction, handling, cutting, finishing and delivery.
            </p>
          </div>
        </div>

        {stages.map((stage) => (
          <section key={stage.number} className="border-t border-border py-16 md:py-24">
            <div className="mb-12 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-2">
                <span className="font-display text-3xl text-gold">{stage.number}</span>
              </div>
              <div className="md:col-span-10">
                <p className="eyebrow text-stone">{stage.kicker}</p>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                  {stage.title}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  {stage.intro}
                </p>
              </div>
            </div>
            <div className="grid items-start gap-x-8 gap-y-14 md:grid-cols-2">
              {stage.photos.map((photo) => (
                <ManufacturingPhoto key={photo.alt} photo={photo} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-12 md:py-28">
          <img
            src={kitchen}
            alt="Natural stone countertop in a finished kitchen"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <p className="eyebrow text-gold">From raw stone to remarkable spaces</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Built by Nature. Shaped for Your Space.
            </h2>
            <p className="mt-6 max-w-md leading-8 text-ivory/75">
              Explore natural stone for kitchens, floors, walls and staircases.
              Speak with CIBI about available finishes, sizes and custom fabrication.
            </p>
            <Link
              to="/contact"
              className="eyebrow mt-10 inline-block bg-ivory px-8 py-4 text-charcoal transition-opacity hover:opacity-80"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
