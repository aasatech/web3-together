import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '../Button'
import { useTranslations } from 'next-intl'

type Props = {
    data: {
        title: string;
        description: string;
        image: StaticImageData | string;
        date: string;
    }
}

export const Card = ({ data }: Props) => {
    const t=useTranslations('Rewards')
    return (
        <div className='rounded-lg p-5 bg-[#D9D9D91A] grid gap-5'>
            <div className='grid sm:grid-cols-[30%_1fr] gap-5'>
                <Image src={data.image} alt='image' className='rounded-lg' />
                <div>
                    <h1 className='font-bold lg:text-xl pb-5'>
                        {data.title}
                    </h1>
                    <p className='font-normal text-base'>
                        {data.description}
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <span>{data.date}</span>
                <Button label={t('cards.button')} />
            </div>
        </div>
    )
}
