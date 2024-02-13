import { Card } from '@/components/rewards/Card'
import React from 'react'
import image1 from '@/resources/rewards/image1.png'
import image2 from '@/resources/rewards/image2.png'
import { useTranslations } from 'next-intl'

const Rewards = () => {
  const t = useTranslations('Rewards')
  const cardData = [{
    title: t('cards.one.title'),
    description: t('cards.one.description'),
    image: image1,
    date: 'Jun, 28, 2024'
  }, {
    title: t('cards.two.title'),
    description: t('cards.two.description'),
    image: image2,
    date: 'Jun, 28, 2024'
  }, {
    title: t('cards.three.title'),
    description: t('cards.three.description'),
    image: image1,
    date: 'Jun, 28, 2024'
  }, {
    title: t('cards.four.title'),
    description: t('cards.four.description'),
    image: image2,
    date: 'Jun, 28, 2024'
  },]
  return (
      <div className='my-10'>
        <div className='grid lg:w-4/6 pb-10'>
          <h1 className='font-normal md:text-lg lg:text-xl xl:text-2xl pb-5'>
            {t('title.sub')}
          </h1>
          <h2 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-5'>
            Use NFT Rewards to Power Loyalty
          </h2>
          <p className='text-white/50 text-base font-normal'>
            {t('description')}
          </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-5'>
          {
            cardData.map((data, index) => (
              <Card data={data} key={index} />
            ))
          }
        </div>
      </div>
  )
}

export default Rewards