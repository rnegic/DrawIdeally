import { useTranslations } from "next-intl";
import React from "react";
import styles from './styles.module.css';
import CategoryContainer from "@/components/generation/CategoryContainer";
import GlowingButton from "@/components/layout/GlowingButton";

const GeneratePage = () => {
    const t = useTranslations("Index");
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{t("generate.title")}</h3>
            <h1 className={styles.slogan}>{t("generate.slogan")}</h1>
            <div className={styles.description}>
                <h2>{t("generate.descriptionOne")}</h2>
                <h2>{t("generate.descriptionTwo")}</h2>
            </div>
            <GlowingButton text={t("generate.buttonRandom")}/>
            <CategoryContainer/>
        </div>
    );
}

export default GeneratePage;