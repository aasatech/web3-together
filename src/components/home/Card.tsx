import React from 'react'

export const Card = () => {
  return (
    <div className='sm:rounded-xl relative lg:w-[679px] max-lg:max-w-full sm:h-[184px] max-sm:h-[410px] flex justify-center items-center overflow-hidden'>
        <div className='animate-spin-slow absolute bg-gradient-to-r from-[#9972E480]/[50%] to-[#F2A93B85]/[52%] h-[1000px] w-[1000px] origin-center'>
        </div>
        <div className='absolute bg-[#19173D] h-[calc(100%-6px)] w-[calc(100%-6px)] top-[3px] left-[3px] sm:rounded-xl max-sm:gap-[20px] flex max-sm:flex-col sm:justify-between sm:items-center text-[16px] font-normal p-[45px]'>
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <h1 className='font-bold text-[36px] leading-[43.57px]'>
                    100M
                </h1>
                <span className='h-[3px] w-[15px] bg-[#8B347D80]/50'></span>
                <p className='leading-[19.36px]'>
                    MEMBERSHIP
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <h1 className='font-bold text-[36px] leading-[43.57px]'>
                    333k
                </h1>
                <span className='h-[3px] w-[15px] bg-[#8B347D80]/50'></span>
                <p className='leading-[19.36px]'> 
                    Rating
                </p>
            </div>
            <div className='flex flex-col justify-center items-center relative top-[-10px] gap-[15px]'>
                <h1 className='font-bold text-[48px] bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#8B347D] text-transparent'>
                    100%
                </h1>
                <p className='leading-[19.36px]'>
                    JOIN COMMUNITY
                </p>
            </div>
        </div>
    </div>
  )
}
