"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const team = [
  { name: "Gisele Castillo", role: "Production & Writing" },
  { name: "Maci Reynaud", role: "Development & Art" },
  { name: "Mario Cárcamo", role: "3D Modeling, Art & Commissions" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <div className="page-container">
        <section className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">{t("About the studio")}</p>
            <h1 className="page-title"><span className="text-neutral-900">{t("games!")}</span><br /><span className="text-neutral-600">{t("games!")}</span><br /><span className="text-neutral-400">{t("games!")}</span></h1>
          </div>
          <div className="lg:pt-10">
            <p className="text-xl leading-9 text-neutral-800">{t("We’re Pobe Poxo, an art and interactive studio in Central America.")}</p>
            <p className="mt-5 leading-7 text-neutral-600">{t("We bring together writing, development, and visual art to make games, digital experiences, and playful experiments. Sometimes that means a little world to explore. Sometimes it’s a useful tool or an unusual idea worth trying.")}</p>
            <Link href="/games" className="text-link mt-6">{t("Explore our projects")} <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" /></Link>
          </div>
        </section>
        <section aria-labelledby="team-heading" className="mt-16 border-t border-neutral-900/10 pt-10 sm:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="team-heading" className="font-merriweather text-2xl font-bold tracking-tight">{t("The people behind it")}</h2>
            <p className="text-sm text-neutral-500">{t("Different practices. Shared projects.")}</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="rounded-2xl border border-neutral-900/10 bg-white/70 p-6">
                <h3 className="font-merriweather text-lg font-bold">{person.name}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{t(person.role)}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-[#eeeae4] px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div><h2 className="font-merriweather text-lg font-bold">{t("Have something in mind?")}</h2><p className="mt-2 text-sm leading-6 text-neutral-600">{t("We also work on games, prototypes, and interactive software with others.")}</p></div>
          <Link href="/contact" className="text-link shrink-0">{t("Let’s talk")} <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" /></Link>
        </section>
        <aside aria-label={t("Macicola on YouTube")} className="mt-8">
        <a href="https://www.youtube.com/@macicola" target="_blank" rel="noreferrer" className="group flex max-w-sm items-center gap-3 rounded-lg">
          <Image src="/assets/macicola_mascot.png" alt="" width={44} height={40} className="h-10 w-11 shrink-0 object-contain" />
          <span>
            <span className="text-sm font-medium text-neutral-800 underline decoration-transparent underline-offset-4 group-hover:decoration-pink-400">{t("Check out Macicola on")} <span className="whitespace-nowrap">YouTube <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 inline-block h-3 w-3" aria-hidden="true" /></span></span>
            <span className="mt-1 block text-xs leading-5 text-neutral-500">{t("Where we talk about some of our projects.")}</span>
          </span>
        </a>
        </aside>
      </div>
    </PageShell>
  );
}
