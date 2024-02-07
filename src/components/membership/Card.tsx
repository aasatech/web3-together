import React from 'react'

export const Card = () => {
    return (
        <div className='rounded-xl bg-[#D9D9D91A] p-5'>
            <h1 className='font-bold text-xl pb-3'>Suggestion</h1>
            <p className='text-white/50'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
            </p>
            <div className='flex items-center gap-5 mt-5'>
                <div className='flex items-center gap-3'>
                    <h1>
                        Reward
                    </h1>
                    <span className='bg-[#8B347D80] text-[#8D439E] px-3 py-1 rounded-md'>
                        75 XP
                    </span>
                </div>
                <div className='flex items-center gap-3'>
                    <h1>
                        Reward
                    </h1>
                    <span className='bg-[#007BEC80] text-[#187CF9] px-3 py-1 rounded-md'>
                        75 XP
                    </span>
                </div>
            </div>
        </div>
    )
}
