'use client';

import ideasEnglish from '@/api/ideasEnglish';
import ideasRussian from '@/api/ideasRussian';
import { useTranslations } from "next-intl";
import useIdeaStore from '../../store/IdeaStore';
import useLocaleStore from '../../store/LocaleStore';

interface GenerateButtonProps {
    category: string;
}

const GenerateButton = ({ category }: GenerateButtonProps) => {
    const t = useTranslations("Index");

    const setGeneratedIdea = useIdeaStore((state) => state.setGeneratedIdea);
    const locale = useLocaleStore((state) => state.locale);

    const handleClick = () => {
        const rnd = Math.floor(Math.random() * 10);

        const ideas = locale === "en" ? ideasEnglish : ideasRussian;
        const newIdea = ideas[category][rnd];
        setGeneratedIdea(newIdea);
    };

    return (
        <div>
            <button onClick={handleClick}>{t("generate.buttonRandom")}</button>
        </div>
    );
};

export default GenerateButton;