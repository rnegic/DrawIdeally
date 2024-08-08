'use client'

import React from "react";
import Image from "next/image";

interface CategoryCardProps {
    image: string,
    title: string,
    description: string,
};

const CategoryCard = ({image, title, description}: CategoryCardProps) => {
    const generateIdea = () => {
        return 0;
    };
    return (
        <div className="w-56 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={generateIdea}
        >
            <Image
                src={image}
                width={224}
                height={150}
                alt="Category Image"
                className="object-cover"
            />
            <div className="flex flex-col text-center p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="text-sm text-gray-600">{description}</h4>
            </div>
        </div >
    );
};

export default CategoryCard;