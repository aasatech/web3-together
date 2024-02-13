import { Accordion } from '@/components/faqs/Accordion'
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
      <div className='my-10 grid gap-5'>
        <Accordion data={faqsData} />
      </div>
  )
}

export default page
