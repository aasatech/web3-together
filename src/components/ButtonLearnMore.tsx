import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

type Props = {
    onClick?: ()=>void
    className?: string; 
}

export const ButtonLearnMore = ({onClick, className}: Props) => {
    return (
        <button onClick={onClick}
            className={`${className} text-xl whitespace-nowrap font-normal rounded-lg py-3 px-5 ring-1 ring-white/50 flex items-center relative overflow-clip pr-16 hover:text-custom-yellow duration-100 hover:ring-custom-yellow`}
        >
            Learn More
            <IoIosArrowForward className='absolute bg-white/20 right-0 h-full w-12 flex justify-center items-center'/>
        </button>
    )
}