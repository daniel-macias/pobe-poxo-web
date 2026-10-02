"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import PageShell from "@/components/PageShell";

const socialLinks = [
  { label: "X", handle: "@pobepoxo", href: "https://x.com/pobepoxo", icon: faXTwitter },
  { label: "TikTok", handle: "@pobepoxo", href: "https://tiktok.com/@pobepoxo", icon: faTiktok },
  { label: "Instagram", handle: "@pobepoxo", href: "https://instagram.com/pobepoxo", icon: faInstagram },
];

export default function Contact() {
  const { t } = useLanguage();
  return (
    <PageShell>

      <section className="page-container">
        <p className="eyebrow">{t("Contact")}</p>
        <h1 className="page-title">
          {t("Want to work with us?")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          {t("We’re available for freelance work involving games, prototypes, and interactive software. If you have an idea you’d like to build, tell us a little about it.")}
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="mailto:maci@pobepoxo.com" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700">
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
            {t("Start a project")}
          </a>
          <a href="mailto:maci@pobepoxo.com" className="text-base text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-black">
            maci@pobepoxo.com
          </a>
        </div>

        <div className="mt-14 border-t border-neutral-200 pt-8">
          <h2 className="text-sm font-semibold text-neutral-700">{t("You can also find us here:")}</h2>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black" aria-label={`${social.label}: ${social.handle}`}>
                <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                {social.handle}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
