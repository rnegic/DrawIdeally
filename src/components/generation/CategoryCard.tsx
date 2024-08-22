'use client';

import Image from "next/image";
import GenerateButton from "./GenerateButton";

interface CategoryCardProps {
    image: string;
    title: string;
    description: string;
    categoryKey: string;
}

const CategoryCard = ({ image, title, description, categoryKey }: CategoryCardProps) => {

    return (
        <div className="w-56 rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <Image
                src={image}
                width={1024}
                height={1024}
                alt="Category Image"
                className="object-cover"
            />
            <div className="flex flex-col text-center p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="text-sm text-gray-600">{description}</h4>
                <GenerateButton category={categoryKey} />
            </div>
        </div>
    );
};

export default CategoryCard;