import React from "react";

interface ButtonProps {
    text: string;
};

const Button = ({ text }: ButtonProps) => {
    return (
        <button className="w-44 md:w-48 h-12 rounded-3xl bg-buttonBg text-white">{text}</button>
    );
};

export default Button;