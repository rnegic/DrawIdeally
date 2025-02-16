import { useTranslations } from "next-intl";
import Button from "@/components/layout/Button";
import styles from "./home.module.css";
import classNames from 'classnames';
import Image from "next/image";
import Slider from "@/components/gallery/Slider";
import Link from 'next/link';
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.textCol}>
          <div className={styles.maintext}>
            <div className="flex gap-4">
              <h1 className={styles.gradientFirst}>{t("page.dontever")}</h1>
              <h1>{t("page.start")}</h1>
            </div>
            <h1>{t("page.welcomePartTwo")}</h1>
            <div className="flex">
              <h1 className={styles.gradientFirst}>{t("page.draw")}</h1>
              <h1 className={styles.gradientSecond}>{t("page.idea")}</h1>
              <h1>{t("page.rest")}</h1>
            </div>
          </div>
          <div className={styles.additionalText}>
            <h3>{t("page.welcomePartFour")}</h3>
            <h3>{t("page.welcomePartFive")}</h3>
          </div>
          <Link href={`/${locale}/generate`}>
            <Button text={t("page.buttonStart")} />
          </Link>
        </div>
        <Image src="/woman.png" alt="woman" quality={50} width={500} height={500} className={styles.image} />
      </main>
      <div className="my-10">
        <Slider />
      </div>
      <h1 className={classNames(styles.sliderText, styles.gradientFirst)}>{t("page.sliderText")}</h1>
    </div>
  );
}
