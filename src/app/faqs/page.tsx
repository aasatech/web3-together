'use client'
import CustomLazy from '@/components/CustomLazy'
import { Accordion } from '@/components/faqs/Accordion'
import { m } from 'framer-motion'
import React from 'react'

const page = () => {
  const faqsData = [{
    question: 'How to mint 99x Club NFT Pass?',
    answer: 'There will be 3333 99x Club NFT Passes available. Whitelist Mint Price will be 0.1 ETH per pass. Whitelist Mint Date : 20 Feb-23 13:30 UTC. Mint Link will be updated on httos://99x.club'
  }, {
    question: 'How to mint 99x Club NFT Pass?',
    answer: 'There will be 3333 99x Club NFT Passes available. Whitelist Mint Price will be 0.1 ETH per pass. Whitelist Mint Date : 20 Feb-23 13:30 UTC. Mint Link will be updated on httos://99x.club'
  }, {
    question: 'How to mint 99x Club NFT Pass?',
    answer: 'There will be 3333 99x Club NFT Passes available. Whitelist Mint Price will be 0.1 ETH per pass. Whitelist Mint Date : 20 Feb-23 13:30 UTC. Mint Link will be updated on httos://99x.club'
  }]
  return (
    <CustomLazy>
      <m.div className='my-10 grid gap-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Accordion data={faqsData} />
      </m.div>
    </CustomLazy>
  )
}

export default page
