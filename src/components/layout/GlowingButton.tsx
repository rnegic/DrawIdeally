import React from "react";
import useIdeaStore from '../../store/IdeaStore';
import generateIdea from "@/utils/GenerateIdea";
import useCategoryStore from '../../store/CategoryStore';

interface ButtonProps {
    text: string;
};

const GlowingButton = ({ text }: ButtonProps) => {

    const category = useCategoryStore((state) => state.category);
    const setGeneratedIdea = useIdeaStore((state) => state.setGeneratedIdea);
    const handleClick = () => {
        if (category) {
            const newIdea = generateIdea(category);
            setGeneratedIdea(newIdea);
          } else {
            const newIdea = generateIdea();
            setGeneratedIdea(newIdea);
        }
    };
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300
            to-violet-300 rounded-lg blur opacity-50 group-hover:opacity-100 transition
            duration-1000 group-hover:duration-200"></div>
            <button onClick={handleClick} className="relative w-56 h-12 rounded-3xl bg-buttonBg text-white">
                {text}
            </button>
        </div>
    );
};

export default GlowingButton;