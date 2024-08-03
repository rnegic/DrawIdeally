import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({

  locales: locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(en|ru)/:path*"],
};