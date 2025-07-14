import type { Metadata } from "next";

import { getDirection } from "@/lib/utils";
import { Locale } from "@/lib/types/i18n";

import LocaleSwitch from "@/components/i18n/locale-switch";
import I18NProvider from "@/components/i18n/translations-provider";

import "../globals.css";
import { serverSideTranslation } from "@/lib/i18n";
import Header from "@/components/header";

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
          <Header locale={locale} />
          {children}
        </I18NProvider>
      </body>
    </html>
  );
}
