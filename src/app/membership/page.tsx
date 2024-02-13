import { Card } from '@/components/membership/Card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import etoro from '@/resources/membership/etoro.png'

const page = () => {
  return (
      <div className='my-10'>
        <div className='pb-5'>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-5">
            How to be a Membership?
          </h1>
          <p className="xl:text-2xl pb-5">
            When you buy a
            <span className='font-bold'> Web3 Together NFT Membership Pass, </span>
            you’re not simply buying an NFT. You will gain membership access to a Web3 Together Membership Pass: Genesis Edition whose benefits and offerings will increase over time.<span className='font-bold'> Web3 Together pass supply</span> will be limited to 3333.
          </p>
          <p className='xl:text-2xl'>Link here:{' '}
            <Link href={'#'} className='underline underline-offset-2 xl:text-2xl'>
              https://www.google.com/
            </Link>
          </p>
        </div>
        <div className='grid md:grid-cols-2 place-items-center'>
          <Card />
          <div className='w-full flex md:justify-end max-md:pt-5'>
            <Link href={'#'} className='md:w-4/5'>
              <Image
                src={etoro} alt='etoro' />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default page