
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site";
import { projectCategories, type ProjectPhoto } from "@/lib/projects";
import { Reveal } from "@/components/reveal";
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


function ProjectImage({
  project,
  index,
}: {
  project: ProjectPhoto;
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 120}><figure className="group">
      <div
        className={`overflow-hidden bg-[#E9E2D6] aspect-[4/3]`}
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
    </figure></Reveal>
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
            <Reveal><div className="mb-12 grid gap-6 md:grid-cols-12">
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
            </div></Reveal>

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
