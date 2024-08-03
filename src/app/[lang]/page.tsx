import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("page.welcome")}</h1>
    </div>
  );
}