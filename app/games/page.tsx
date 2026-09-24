import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "MoBooKit",
    type: "Mobile game",
    description: "A virtual pet built around a quirky robot companion, small rituals, and playful minigames.",
    image: "/assets/projects/mobookit.png",
    href: "/games/mobookit",
    imageClassName: "object-contain p-8",
  },
  {
    title: "Cuculcan",
    type: "Interactive map & open data",
    description: "An interactive geographic platform for exploring Central American boundaries and administrative data.",
    image: "/assets/projects/cuculcan.png",
    href: "/games/cuculcan",
    imageClassName: "object-cover",
  },
  {
    title: "Rug Pull Simulator",
    type: "Experimental game",
    description: "A short, chaotic game about hype, greed, and trying to cash out before everything crashes.",
    image: "/assets/projects/rug-pull-simulator.png",
    href: "/games/rug-pull-simulator",
    imageClassName: "object-cover",
  },
  {
    title: "Animaléctrica",
    type: "Educational simulation",
    description: "A tycoon-style game about electrical generation, environmental impact, and the wildlife of Honduras.",
    image: "/assets/Animalectrica/animal0.png",
    href: "/games/animalectrica",
    imageClassName: "object-cover",
  },
];

export default function Games() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Selected work</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight font-playwrite sm:text-5xl">Games & interactive things</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
            Pobe Poxo is an art and interactive studio in Central America. We make playful digital experiences, useful experiments, and unusual little worlds.
          </p>
        </div>

        <div className="mt-14 divide-y divide-neutral-200 border-y border-neutral-200">
          {projects.map((project, index) => (
            <article key={project.title} className="grid gap-8 py-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,1.1fr)] md:items-center md:py-14">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{project.type}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight font-playwrite">{project.title}</h2>
                <p className="mt-4 max-w-md leading-7 text-neutral-600">{project.description}</p>
                <Link href={project.href} className="mt-6 inline-flex border-b border-neutral-900 pb-1 text-sm font-semibold transition hover:text-neutral-500">
                  View project <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3 w-3" />
                </Link>
              </div>

              <Link href={project.href} aria-label={`View ${project.title}`} className={`relative block aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width: 768px) 46vw, 100vw" className={`${project.imageClassName} transition duration-500 hover:scale-[1.02]`} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
