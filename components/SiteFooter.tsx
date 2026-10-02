"use client";

import { useLanguage } from "@/components/LanguageProvider";
export default function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto border-t border-neutral-900/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-neutral-500">Pobe Poxo<br />{t("Art & interactive things · Central America")}</p>

      </div>
    </footer>
  );
}
