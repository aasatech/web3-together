import React from 'react'

type Props = {
    label: string;
    onClick?: ()=>void;
    className?: string;
}

export const Button = ({ label, onClick, className }: Props) => {
    return (
            <button onClick={onClick}
                className={`lg:text-xl whitespace-nowrap font-bold bg-custom-yellow rounded-lg py-3 px-5 ${className}`}
            >
                {label}
            </button>
    )
}