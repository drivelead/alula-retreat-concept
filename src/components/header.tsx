import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";
import LocaleSwitch from "@/components/i18n/locale-switch";

type Props = { locale: Locale };

export default async function Header({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.proposed-names",
  });
  return (
    <header className="p-2 text-black absolute top-0 left-0 z-50 h-screen w-full bg-gradient-to-b">
      <div className="fixed top-0 left-0 w-full h-28 text-black flex items-center justify-center pointer-events-auto p-4">
        <div className="relative rounded-full w-full h-full bg-white shadow p-6 flex justify-between items-center text-black">
          <div className="flex items-center gap-4">
            <div className="rounded-full h-full bg-white px-6 pt-2 pb-1.5 hover:bg-gray-100 transition-colors duration-300">
              About
            </div>
            <div className="rounded-full h-full bg-white px-6 pt-2 pb-1.5 hover:bg-gray-100 transition-colors duration-300">
              Rooms
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <p className="quiverleaf font-black text-5xl mb-1">الحِجر فيـوز</p>
            <p className="uppercase font-medium text-sm tracking-[0.4rem] -mr-1.5">
              Hegra Views
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSwitch />
            <div className="rounded-full h-full bg-emerald-600 text-white px-6 pt-2 pb-1.5 hover:bg-emerald-700 transition-colors duration-300">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
