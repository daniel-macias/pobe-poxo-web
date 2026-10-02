"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PageShell from "@/components/PageShell";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectDetailProps = {
  title: string;
  type: string;
  year: string;
  description: string[];
  technologies: string[];
  hero: string;
  screenshots: string[];
  portrait?: boolean;
  equalScreenshots?: boolean;
  links: ProjectLink[];
};

export default function ProjectDetail({
  title,
  type,
  year,
  description,
  technologies,
  hero,
  screenshots,
  portrait = false,
  equalScreenshots = false,
  links,
}: ProjectDetailProps) {
  const { t } = useLanguage();
  return (
    <PageShell>
      <article className="page-container">
        <Link href="/games" className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900">
          <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3" /> {t("Back to projects")}
        </Link>

        <div className="mt-10 grid gap-10 border-b border-neutral-200 pb-12 md:grid-cols-[1fr_1.15fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {t(type)} · {year}
            </p>
            <h1 className="page-title">{title}</h1>
            <div className="mt-6 space-y-4 leading-7 text-neutral-600">
              {description.map((paragraph) => <p key={paragraph}>{t(paragraph)}</p>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700">
                  {t(link.label)} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <Image src={hero} alt={`${t("Preview")}: ${title}`} fill priority sizes="(min-width: 768px) 48vw, 100vw" className={portrait ? "object-contain p-10" : "object-cover"} />
          </div>
        </div>

        <section className="grid gap-8 py-12 md:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{t("Made with")}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{technologies.join(" · ")}</p>
          </div>
          <div className={portrait ? "grid grid-cols-2 gap-4 sm:grid-cols-4" : "grid gap-5 sm:grid-cols-2"}>
            {screenshots.map((screenshot, index) => (
              <div key={screenshot} className={`relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 ${portrait ? "aspect-[9/16]" : `aspect-[4/3] ${!equalScreenshots && index === 0 ? "sm:col-span-2" : ""}`}`}>
                <Image src={screenshot} alt={`${t("Screenshot")} ${index + 1}: ${title}`} fill sizes={portrait ? "(min-width: 640px) 20vw, 45vw" : "(min-width: 640px) 60vw, 100vw"} className={portrait ? "object-cover" : "object-contain"} />
              </div>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
