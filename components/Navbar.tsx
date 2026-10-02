"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-900/10">
      <nav aria-label={t("Main navigation")} className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-4 sm:px-6">
        <Link href="/" aria-label={t("Pobe Poxo home")} className="shrink-0 rounded-sm">
          <Image src="/assets/logo_navbar.png" alt="Pobe Poxo" width={112} height={32} className="h-auto w-20 invert sm:w-28" />
        </Link>
        <div className="order-3 flex w-full items-center justify-center gap-6 sm:order-none sm:ml-auto sm:w-auto sm:gap-7">
          {[{ href: "/about", label: "About" }, { href: "/games", label: "Games" }, { href: "/contact", label: "Contact" }].map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`border-b-2 py-2 text-sm transition-colors ${active ? "border-pink-400 text-neutral-950" : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-950"}`}>
                {t(label)}
              </Link>
            );
          })}
        </div>
        <div className="sm:ml-5"><LanguageSwitch /></div>
      </nav>
    </header>
  );
}
