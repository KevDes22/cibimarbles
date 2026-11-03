
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
import photoO from "@/assets/projects/o.jpeg";
import photo1 from "@/assets/projects/z1.jpeg";
import photo2 from "@/assets/projects/z2.jpeg";
import photo3 from "@/assets/projects/z3.jpeg";
import photo4 from "@/assets/projects/z4.jpeg";
import cobble5 from "@/assets/projects/z5.jpeg";
import cobble6 from "@/assets/projects/z6.jpeg";
import cobble7 from "@/assets/projects/z7.jpeg";


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
  
  {
    id: "cobblestones",
    number: "06",
    title: "Cobblestone Paving",
    introduction:
      "Where natural stone meets outdoor architecture. Our cobblestone paving creates elegant, enduring surfaces for driveways, courtyards, walkways and landscaped spaces — combining distinctive patterns with timeless character.",
    photos: [
      {
        image: photo1,
        title: "Precision Cobblestone Installation",
        description:
          "An overhead view of carefully arranged granite cobblestones, laid in sweeping fan patterns to create a distinctive courtyard surface.",
      },
      {
        image: photo2,
        title: "Elegant Residential Driveway",
        description:
          "A beautifully paved residential entrance where natural stone cobbles complement the architecture, gardens and surrounding landscape.",
      },
      {
        image: photo3,
        title: "Landscaped Cobblestone Courtyard",
        description:
          "A thoughtfully designed outdoor courtyard featuring curved cobblestone patterns, landscaped garden borders and inviting seating areas.",
      },
      {
        image: photo4,
        title: "Decorative Outdoor Stone Paving",
        description:
          "An expansive paved outdoor space featuring interlocking fan-shaped cobblestone arrangements framed by greenery and architectural features.",
      },
      
      {
        image: cobble5,
        title: "Decorative Cobblestone Entrance",
        description:
          "An elegant entrance paved with natural stone cobbles arranged in graceful fan-shaped patterns, complementing the boundary walls and architectural surroundings.",
      },
      {
        image: cobble6,
        title: "Curved Cobblestone Walkway",
        description:
          "A beautifully patterned stone walkway featuring sweeping cobblestone arrangements, thoughtfully integrated with natural stone wall cladding and landscape borders.",
      },
      {
        image: cobble7,
        title: "Expansive Cobblestone Courtyard",
        description:
          "An overhead view of an expansive courtyard showcasing carefully arranged granite cobblestones in continuous interlocking fan patterns, creating a distinctive architectural finish.",
      },

    ],
  },

];

export const projectPhotos = projectCategories.flatMap((c) => c.photos);
