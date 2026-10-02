"use client";

import { useLanguage } from "@/components/LanguageProvider";
import AnimatedLogo from "@/components/AnimatedLogo";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>

      <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-5xl justify-end px-6 pt-5"><LanguageSwitch /></div>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-14">
        <div className="flex flex-col items-center">
          <AnimatedLogo />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 font-merriweather">Pobe Poxo</h1>
            <p className="mt-2 max-w-sm text-lg text-gray-600 font-merriweather">{t("Art, games & interactive things.")}</p>
            <div className="mx-auto mt-6 grid w-64 grid-cols-3 items-center border-t border-neutral-900/10 pt-5 text-center">
              <Link href="/about" className="text-lg text-gray-700 hover:text-black">{t("About")}</Link>
              <Link href="/games" className="text-lg text-gray-700 hover:text-black">{t("Games")}</Link>
              <Link href="/contact" className="text-lg text-gray-700 hover:text-black">{t("Contact")}</Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      </div>
    </>
  );
}
