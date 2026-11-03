
// Actual stone application photographs
import photoA from "@/assets/projects/a.jpeg";
import photoB from "@/assets/projects/b.jpeg";
import photoC from "@/assets/projects/c.jpeg";
import photoD from "@/assets/projects/d.jpeg";
import photoE from "@/assets/projects/e.jpeg";
import photoF from "@/assets/projects/f.jpeg";
import photoG from "@/assets/projects/g.jpeg";
import photoH from "@/assets/projects/h.jpeg";
import photoI from "@/assets/projects/i.jpeg";
import photoJ from "@/assets/projects/j.jpeg";
import photoK from "@/assets/projects/k.jpeg";
import photoL from "@/assets/projects/l.jpeg";
import photoM from "@/assets/projects/m.jpeg";
import photoN from "@/assets/projects/n.jpeg";

export type ProjectPhoto = {
  image: string;
  title: string;
  description: string;
  portrait?: boolean;
};

export type ProjectCategory = {
  id: string;
  number: string;
  title: string;
  introduction: string;
  photos: ProjectPhoto[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "kitchens",
    number: "01",
    title: "Kitchen Countertops",
    introduction:
      "Natural stone surfaces that bring lasting character, texture and practical elegance to kitchen spaces.",
    photos: [
      {
        image: photoA,
        title: "Granite Countertop & Sink",
        description:
          "A light granite worktop with an integrated sink cutout and a refined, continuous surface.",
      },
      {
        image: photoC,
        title: "Contemporary Kitchen Worktop",
        description:
          "A polished natural stone countertop incorporating a sink, backsplash and cooking area.",
      },
      {
        image: photoB,
        title: "Dark Cabinetry & Granite",
        description:
          "A richly patterned granite countertop paired with dark cabinetry for a sophisticated contrast.",
      },
    ],
  },
  {
    id: "bathrooms",
    number: "02",
    title: "Bathroom Vanities",
    introduction:
      "Carefully finished stone vanity surfaces combining natural mineral patterns with clean, functional detailing.",
    photos: [
      {
        image: photoD,
        title: "Double Washbasin Vanity",
        description:
          "A natural stone vanity countertop with twin basin cutouts and coordinated stone edging.",
      },
      {
        image: photoE,
        title: "Polished Stone Washbasin",
        description:
          "An elegant granite vanity top with a fitted basin and a warm, organic surface pattern.",
      },
    ],
  },
  {
    id: "flooring",
    number: "03",
    title: "Natural Stone Flooring",
    introduction:
      "Stone floors that provide visual continuity, distinctive patterns and an enduring architectural finish.",
    photos: [
      {
        image: photoG,
        title: "Residential Hallway Flooring",
        description:
          "Large natural stone floor tiles creating a seamless transition through a residential interior.",
        portrait: true,
      },
      {
        image: photoH,
        title: "Coordinated Floor & Stair Finish",
        description:
          "Natural stone flooring extending towards a staircase with complementary surface finishes.",
        portrait: true,
      },
      {
        image: photoK,
        title: "Interior Living Area",
        description:
          "Light granite flooring with subtle natural variations, bringing texture to a furnished interior.",
      },
      {
        image: photoL,
        title: "Commercial Corridor Flooring",
        description:
          "A long polished stone walkway with contrasting dark borders for a refined commercial interior.",
        portrait: true,
      },
    ],
  },
  {
    id: "walls",
    number: "04",
    title: "Architectural Wall Cladding",
    introduction:
      "Natural stone wall finishes that introduce depth, texture and a distinctive architectural presence.",
    photos: [
      {
        image: photoI,
        title: "Feature Wall Cladding",
        description:
          "Large-format natural stone tiles arranged across an architectural wall with warm mineral detailing.",
      },
    ],
  },
  {
    id: "staircases",
    number: "05",
    title: "Natural Stone Staircases",
    introduction:
      "Precision-finished stone steps and stair surfaces that unite practical construction with refined design.",
    photos: [
      {
        image: photoJ,
        title: "Polished Residential Staircase",
        description:
          "Coordinated natural stone stair treads, risers and landings with a reflective polished finish.",
        portrait: true,
      },
      {
        image: photoF,
        title: "Modern Stone Staircase",
        description:
          "A broad natural stone staircase complemented by contemporary metal railings.",
      },
      {
        image: photoM,
        title: "Dark Granite Stair Finish",
        description:
          "A richly toned granite staircase featuring contrasting mineral patterns and polished step edges.",
      },
      {
        image: photoN,
        title: "Contemporary Stairway",
        description:
          "A modern staircase with coordinated stone treads and metal railings.",
      },
      {
        image: photoO,
        title: "Architectural Entrance Staircase",
        description:
          "Natural stone steps creating an elegant entrance within a bright architectural interior.",
      },
    ],
  },
];

export const projectPhotos = projectCategories.flatMap((c) => c.photos);
