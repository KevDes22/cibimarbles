
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site";

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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Stone Projects & Applications — CIBI Marble & Granite",
      },
      {
        name: "description",
        content:
          "Explore natural stone applications including granite kitchen countertops, bathroom vanities, flooring, wall cladding and staircases.",
      },
      {
        property: "og:title",
        content: "Stone Projects — CIBI Marble & Granite",
      },
      {
        property: "og:description",
        content: "Natural stone in exceptional spaces.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Projects,
});

type ProjectPhoto = {
  image: string;
  title: string;
  description: string;
  portrait?: boolean;
};

type ProjectCategory = {
  id: string;
  number: string;
  title: string;
  introduction: string;
  photos: ProjectPhoto[];
};

const projectCategories: ProjectCategory[] = [
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

function ProjectImage({
  project,
  index,
}: {
  project: ProjectPhoto;
  index: number;
}) {
  return (
    <figure className="group">
      <div
        className={`overflow-hidden bg-[#E9E2D6] ${
          project.portrait
            ? "aspect-[3/4]"
            : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>

      <figcaption className="pt-5">
        <h3 className="font-display text-2xl text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>
      </figcaption>
    </figure>
  );
}

function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Our Projects"
        title="Spaces That Tell Our Story."
      >
        Discover natural stone applications across
        kitchens, bathrooms, floors, walls and staircases.
        Each surface reveals the beauty and versatility
        of thoughtfully selected stone.
      </PageIntro>

      <main className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12">

        {/* Introductory statement */}
        <div className="grid gap-8 border-t border-border py-16 md:grid-cols-12">
          <p className="eyebrow text-stone md:col-span-3">
            The Beauty of Application
          </p>

          <p className="font-display text-2xl leading-snug md:col-span-9 md:text-4xl">
            From everyday surfaces to defining
            architectural details, natural stone
            transforms the way spaces look and feel.
          </p>
        </div>

        {/* Project galleries */}
        {projectCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="border-t border-border py-16 md:py-24"
          >
            <div className="mb-12 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-2">
                <span className="eyebrow text-stone">
                  {category.number} / Application
                </span>
              </div>

              <div className="md:col-span-10">
                <h2 className="font-display text-4xl leading-tight md:text-6xl">
                  {category.title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                  {category.introduction}
                </p>
              </div>
            </div>

            <div className="grid items-start gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {category.photos.map((project, index) => (
                <ProjectImage
                  key={`${category.id}-${index}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Final contact CTA */}
        <section className="mt-12 bg-[#181A19] px-7 py-16 text-center text-white md:px-16 md:py-24">
          <p className="eyebrow text-[#B59B73]">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Exceptional Stone for Exceptional Spaces.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/70">
            Planning a kitchen, staircase, wall finish
            or complete architectural project?
            Speak with CIBI about stone selection,
            fabrication and installation.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-[#B59B73] px-9 py-4 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#B59B73] hover:text-[#181A19]"
            >
              Discuss Your Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
