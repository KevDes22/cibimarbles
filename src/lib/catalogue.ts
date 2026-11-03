
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import staircase from "@/assets/staircase.jpg";
import hero from "@/assets/hero.jpg";
import lobby from "@/assets/lobby.jpg";
import { siteConfig } from "./config";

export const company = {
  name: siteConfig.companyName,
  email: siteConfig.email,
  phones: siteConfig.phones,
  abuja: siteConfig.abuja,
  kaduna: siteConfig.kaduna,
};

// Support PNG, JPG, JPEG and WebP images.
const stoneImages = import.meta.glob<string>(
  "/src/assets/stones/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const appImages = import.meta.glob<string>(
  "/src/assets/apps/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const extensions = ["png", "jpg", "jpeg", "webp"] as const;

function findImage(
  files: Record<string, string>,
  folder: "stones" | "apps",
  filename: string
) {
  for (const ext of extensions) {
    const image = files[
      `/src/assets/${folder}/${filename}.${ext}`
    ];
    if (image) return image;
  }
  return undefined;
}

export type UseId = "kitchen" | "floor" | "wall";

export const uses: {
  id: UseId;
  label: string;
  title: string;
  description: string;
  fallback: string;
}[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    title: "Kitchen Countertops & Islands",
    description:
      "Explore natural stone for kitchen countertops, islands and backsplashes.",
    fallback: kitchen,
  },
  {
    id: "floor",
    label: "House Floor",
    title: "Residential Flooring",
    description:
      "Explore stone finishes for living rooms, hallways and entrance halls.",
    fallback: hero,
  },
  {
    id: "wall",
    label: "Wall",
    title: "Feature Walls & Cladding",
    description:
      "Explore stone as a feature wall or architectural wall finish.",
    fallback: lobby,
  },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string | null;
  tone: string;
  colour: string;
  description: string;
  image: string;
  gallery: {
    src: string;
    label: string;
    position?: string;
  }[];
  applications: Record<
    UseId,
    { src: string; specific: boolean }
  >;
  specs: { label: string; value: string }[];
  related: string[];
};

type Seed = Pick<
  Product,
  | "slug"
  | "name"
  | "tone"
  | "colour"
  | "description"
  | "related"
>;

const seeds: Seed[] = [
  {
    slug: "Nigerian_Juprano",
    name: "Nigerian Juprano",
    tone: "Dark",
    colour: "Black and white",
    description:
      "A dramatic granite with bold, sweeping white and charcoal mineral movement.",
    related: [
      "kakanya",
      "africa-black",
      "amc-yakowa",
    ],
  },
  {
    slug: "Champagne_Gold",
    name: "Champagne Gold Granite",
    tone: "Warm",
    colour: "Champagne gold and grey",
    description:
      "A warm champagne surface marked by flowing grey mineral patterns and natural depth.",
    related: [
      "champagne-white",
      "yellow-fantasy",
      "gudi-white",
    ],
  },
  {
    slug: "AMC_Yakowa",
    name: "AMC Yakowa",
    tone: "Warm",
    colour: "Rose pink and charcoal",
    description:
      "An expressive granite with pink tones and dark, flowing mineral details.",
    related: [
      "jigawa-red",
      "nigerian-juprano",
      "champagne-gold-granite",
    ],
  },
  {
    slug: "Ice_Grey",
    name: "Ice Grey",
    tone: "Grey",
    colour: "Light grey and black",
    description:
      "A refined, light-grey surface with an intricate, evenly distributed mineral pattern.",
    related: [
      "crystal-white",
      "tatara",
      "gudi-white",
    ],
  },
  {
    slug: "Yellow_Fantasy",
    name: "Yellow Fantasy",
    tone: "Warm",
    colour: "Golden beige and black",
    description:
      "A distinctive golden-beige granite with dark speckles and a warm, inviting appearance.",
    related: [
      "champagne-gold-granite",
      "champagne-white",
      "amc-yakowa",
    ],
  },
  {
    slug: "01_Tatara",
    name: "Tatara",
    tone: "Grey",
    colour: "White, grey and black",
    description:
      "A classic granite with dense black, white and grey mineral detailing.",
    related: [
      "ice-grey",
      "crystal-white",
      "kakanya",
    ],
  },
  {
    slug: "02_Africa_Black",
    name: "Africa Black",
    tone: "Dark",
    colour: "Deep charcoal black",
    description:
      "A deep charcoal granite with subtle, fine-grained mineral texture.",
    related: [
      "green-pearl",
      "nigerian-juprano",
      "tatara",
    ],
  },
  {
    slug: "03_Kakanya",
    name: "Kakanya",
    tone: "Contrast",
    colour: "Grey, black and white",
    description:
      "A striking stone defined by dramatic black-and-white flowing mineral bands.",
    related: [
      "nigerian-juprano",
      "tatara",
      "ice-grey",
    ],
  },
  {
    slug: "04_Crystal_White",
    name: "Crystal White",
    tone: "Light",
    colour: "White with dark mineral flecks",
    description:
      "A bright granite with crisp white tones and contrasting dark mineral detailing.",
    related: [
      "gudi-white",
      "ice-grey",
      "champagne-white",
    ],
  },
  {
    slug: "05_Champagne_White",
    name: "Champagne White",
    tone: "Light",
    colour: "Cream, beige and black",
    description:
      "A light cream-coloured granite with warm minerals and delicate dark flecks.",
    related: [
      "champagne-gold-granite",
      "yellow-fantasy",
      "crystal-white",
    ],
  },
  {
    slug: "06_Jigawa_Red",
    name: "Jigawa Red",
    tone: "Warm",
    colour: "Coral red and dark grey",
    description:
      "A rich red-toned stone with expressive dark, flowing mineral patterns.",
    related: [
      "amc-yakowa",
      "champagne-gold-granite",
      "yellow-fantasy",
    ],
  },
  {
    slug: "07_Green_Pearl",
    name: "Green Pearl",
    tone: "Dark",
    colour: "Deep green and black",
    description:
      "A dark stone with distinctive green mineral reflections and speckled detail.",
    related: [
      "africa-black",
      "nigerian-juprano",
      "tatara",
    ],
  },
  {
    slug: "Gudi_White_Template",
    name: "Gudi White",
    tone: "Light",
    colour: "White and light grey",
    description:
      "A clean, pale granite with a subtle fine-grained pattern.",
    related: [
      "crystal-white",
      "ice-grey",
      "champagne-white",
    ],
  },
];

// Automatically build all 13 complete products.
export const products: Product[] = seeds.map((s) => {
  const image =
    findImage(stoneImages, "stones", s.slug) ?? hero;

  const applications = Object.fromEntries(
    uses.map((u) => {
      const src = findImage(
        appImages,
        "apps",
        `${s.slug}-${u.id}`
      );

      return [
        u.id,
        {
          src: src ?? u.fallback,
          specific: Boolean(src),
        },
      ];
    })
  ) as Product["applications"];

  return {
    id: s.slug,
    ...s,
    category: "Granite",
    image,

    gallery: [
      {
        src: image,
        label: "Showroom presentation",
      },
    ],

    applications,

    specs: [
      {
        label: "Material",
        value: "Granite",
      },
      {
        label: "Colour",
        value: s.colour,
      },
      {
        label: "Finish",
        value: "Ask CIBI about available finishes",
      },
      {
        label: "Dimensions",
        value:
          "60×60, 60×120, Cut-to-Size (confirm availability)",
      },
      {
        label: "Thickness",
        value:
          "15mm, 20mm, 30mm (confirm availability)",
      },
      {
        label: "Applications",
        value:
          "Kitchen, flooring, wall finishes — subject to suitability",
      },
      {
        label: "Company manufacturing location",
        value: "Kaduna, Nigeria",
      },
    ],
  };
});

export const materialCategories = [
  "Granite",
  "Marble",
  "Quartz",
  "Porcelain",
  "Tiles",
];

// Used by the existing contact page.
export const applications = [
  {
    id: "kitchen",
    label: "Kitchen",
    image: kitchen,
  },
  {
    id: "flooring",
    label: "House Floor",
    image: hero,
  },
  {
    id: "walls",
    label: "Wall",
    image: lobby,
  },
  {
    id: "bathroom",
    label: "Bathroom",
    image: bathroom,
  },
  {
    id: "staircase",
    label: "Staircase",
    image: staircase,
  },
] as const;

export function enquiryMessage(
  productName?: string,
  application?: string
) {
  if (!productName) return "";

  return `Hello CIBI, I am interested in ${productName}${
    application
      ? ` for my ${application.toLowerCase()}`
      : ""
  }. I would like to enquire about availability, finishing and pricing.`;
}
