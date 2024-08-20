'use client'

import { usePathname } from "next/navigation";
import { locales } from "../../i18n";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const getPathWithLocale = (locale: string) => {
    const segments = pathname.split("/");

    if (locales.includes(segments[1])) {
      segments[1] = locale;
    } else {
      segments.unshift(locale);
    }
    return segments.join("/");
  };

  return (
    <div className="relative inline-block text-left">
      <select
        className="p-0.5 text-sm focus:outline-none sm:w-auto"
        defaultValue={locales.find((locale) => pathname.includes(`/${locale}`)) || locales[0]}
        onChange={(e) => {
          const selectedLocale = e.target.value;
          window.location.href = getPathWithLocale(selectedLocale);
        }}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} className="bg-white text-gray-700">
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
