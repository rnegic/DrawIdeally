'use client';

import ideas from '@/api/ideas';
import { useTranslations } from "next-intl";
import useIdeaStore from '../../store/IdeaStore';

interface GenerateButtonProps {
    category: string;
}

const GenerateButton = ({ category }: GenerateButtonProps) => {
    const t = useTranslations("Index");

    const setGeneratedIdea = useIdeaStore((state) => state.setGeneratedIdea);

    const handleClick = () => {
        const rnd = Math.floor(Math.random() * 10);
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