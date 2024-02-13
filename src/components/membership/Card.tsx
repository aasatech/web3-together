import React from 'react'
import { useTranslations } from 'next-intl'

export const Card = () => {
    const t = useTranslations('Membership.card')
    return (
        <div className='rounded-xl bg-[#D9D9D91A] p-5'>
            <h1 className='font-bold text-xl pb-3'>{t('title')}</h1>
            <p className='text-white/50'>
                {t('description')}
            </p>
            <div className='flex items-center gap-5 mt-5'>
                <div className='flex items-center gap-3'>
                    <h1>
                        {t('reward.label')}
                    </h1>
                    <span className='bg-[#8B347D80] text-[#8D439E] px-3 py-1 rounded-md'>
                    {t('reward.value')}
                    </span>
                </div>
                <div className='flex items-center gap-3'>
                    <h1>
                    {t('deadline.label')}
                    </h1>
                    <span className='bg-[#007BEC80] text-[#187CF9] px-3 py-1 rounded-md'>
                    {t('deadline.value')}
                    </span>
                </div>
            </div>
        </div>
    )
}
