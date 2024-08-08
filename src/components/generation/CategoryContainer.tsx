import React from "react";
import CategoryCard from "./CategoryCard";
import { useTranslations } from "next-intl";

const CategoryContainer = () => {

    const t = useTranslations("Index");
    const CategoryArray = [
        {
            "image": "/cards/nature.png",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
        },
        {
            "image": "",
            "key": "nature"
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