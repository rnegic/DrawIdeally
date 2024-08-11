import React from "react";
import CategoryCard from "./CategoryCard";
import { useTranslations } from "next-intl";

const CategoryContainer = () => {

    const t = useTranslations("Index");
    const CategoryArray = [
        {
            "image": "/cards/nature.svg",
            "key": "nature"
        },
        {
            "image": "/cards/portrait.png",
            "key": "portrait"
        },
        {
            "image": "/cards/architecture.png",
            "key": "architecture"
        },
        {
            "image": "/cards/adoptable.svg",
            "key": "adoptables"
        },
        {
            "image": "/cards/humanization.svg",
            "key": "humanization"
        },
        {
            "image": "/cards/anatomy.svg",
            "key": "anatomy"
        },
        {
            "image": "/cards/anime.svg",
            "key": "anime"
        },
        {
            "image": "/cards/furry.svg",
            "key": "furry"
        },
        {
            "image": "/cards/animal.svg",
            "key": "animals"
        },
        {
            "image": "/cards/plot",
            "key": "plot"
        },
        {
            "image": "/cards/mythology.svg",
            "key": "mythology"
        },
        {
            "image": "/cards/cyberpunk.png",
            "key": "cyberpunk"
        },
    ];
    return (
        <div className="grid grid-cols-4 gap-4 mt-16">
            {CategoryArray.map((category, idx) => {

                const title = t(`categories.${category.key}.title`);
                const description = t(`categories.${category.key}.description`);

                return (
                    <CategoryCard
                        key={idx}
                        image={category.image}
                        title={title}
                        description={description}
                    />
                );
            })}
        </div>
    );
};

export default CategoryContainer;