import Image from 'next/image'
import React from 'react'
import logo from '@/resources/logo/homeLogo.svg'

export const AnimatedBackgroundLogo = () => {
    return (
        <div className="relative p-5">
            <div className='absolute top-0 right-0 -z-10 w-full -rotate-3 blur-xl h-full bg-[#F2A93B80] rounded-[17%_83%_67%_33%_/_14%_38%_62%_86%] animate-pulse-slow mix-blend-multiply'/>
            <div className='absolute top-0 right-0 -z-10 w-full scale-90 rotate-[110deg] blur-xl  h-full bg-[#F2A93B80] rounded-[17%_83%_67%_33%_/_14%_38%_62%_86%] animate-pulse-slow mix-blend-multiply'/>
            <div className='absolute top-0 right-0 -z-10 w-full scale-90 -rotate-[115deg] blur-xl h-full bg-[#F2A93B80] rounded-[17%_83%_67%_33%_/_14%_38%_62%_86%] animate-pulse-slow mix-blend-multiply'/>
            <div className='absolute top-0 right-5 -z-10 w-full blur-xl h-full mix-blend-multiply bg-[#0DA6C24D]/20 rounded-[17%_83%_67%_33%_/_14%_38%_62%_86%] animate-blob'/>
            <div className='absolute top-0 right-0 -z-10 w-full blur-xl h-full mix-blend-multiply bg-[#880DC24D]/20 rounded-[74%_26%_42%_58%_/_37%_23%_77%_63%] animate-blob animation-delay-2000'/>
            <div className='absolute top-0 right-0 -z-10 w-full blur-xl h-full mix-blend-multiply bg-[#FF66664D]/20 rounded-[37%_63%_80%_20%_/_86%_69%_31%_14%] animate-pulse'/>
            <div className='absolute top-0 right-0 -z-10 w-full blur-xl h-full bg-[#357AFF4D]/20 rounded-[70%_30%_25%_75%_/_62%_83%_17%_38%] animate-pulse'/>
            <Image src={logo} alt='logo'/>
        </div>
    )
}
