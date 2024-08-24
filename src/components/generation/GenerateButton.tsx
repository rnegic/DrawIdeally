'use client';

import { useTranslations } from "next-intl";
import useIdeaStore from '../../store/IdeaStore';
import generateIdea from '@/utils/generateIdea';
import useCategoryStore from '../../store/CategoryStore';

const GenerateButton = () => {
    const t = useTranslations("Index");
    const setGeneratedIdea = useIdeaStore((state) => state.setGeneratedIdea);
    const category = useCategoryStore((state) => state.category);

    const handleClick = () => {
        if (category) {
            const newIdea = generateIdea(category);
            setGeneratedIdea(newIdea);
        }
    };

    return (
        <div>
            <button className='mt-4 w-36 h-8 shadow-2xl rounded-2xl bg-smallButtonBg text-slate-800' onClick={handleClick}>{t("generate.buttonRandom")}</button>
        </div>
    );
};

export default GenerateButton;