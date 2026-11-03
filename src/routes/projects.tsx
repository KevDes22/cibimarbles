import { createFileRoute, Link } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen.jpg";
import staircase from "@/assets/staircase.jpg";
import bathroom from "@/assets/bathroom.jpg";
import hero from "@/assets/hero.jpg";
import lobby from "@/assets/lobby.jpg";
import { PageIntro } from "@/components/site";
import { Slideshow } from "@/components/slideshow";

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
  return (
    <>
      <PageIntro eyebrow="Projects" title="Spaces That Tell Our Story.">
        A selection of applications. CIBI installation photography will appear here as projects are documented.
      </PageIntro>
      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12">
        <Slideshow slides={items} />
        <div className="pt-14"><Link to="/contact" className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background">Discuss your project</Link></div>
      </section>
    </>
  );
}
