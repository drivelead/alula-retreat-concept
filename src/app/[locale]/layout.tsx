import type { Metadata } from "next";

import { getDirection } from "@/lib/utils";
import { Locale } from "@/lib/types/i18n";

import LocaleSwitch from "@/components/i18n/locale-switch";
import I18NProvider from "@/components/i18n/translations-provider";

import "../globals.css";
import { serverSideTranslation } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body className="antialiased relative">
        {/* pass locale to client-side i18n provider */}
        <I18NProvider locale={locale} namespaces={[]} resources={[]}>
          {children}
          <div className="fixed top-8 end-8 z-10 rounded-full px-2 py-1 bg-white/20 hover:bg-white/30 shadow border border-neutral-50 text-white">
            <LocaleSwitch />
          </div>
        </I18NProvider>
      </body>
    </html>
  );
}
