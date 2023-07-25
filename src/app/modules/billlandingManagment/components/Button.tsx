import React, { FC } from "react";

interface IProps {
    onClick?: any
    text: string
}

const Button:FC<IProps> = ({onClick, text}) => {
    return (
        <button
            onClick={onClick}
            className="mb-4 rounded-lg bg-indigo-600 px-8 py-4"
        >
            <span className="font-YekanBold text-white">{text}</span>
        </button>
    );
};

export default Button;
