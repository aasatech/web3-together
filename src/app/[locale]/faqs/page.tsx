'use client'
import { Accordion } from "@/components/faqs/Accordion"
import { useTranslations } from "next-intl"
import React from "react"

const FAQs = () => {
  const t = useTranslations('FAQs')
  let faqsData = [{
    question: t('one.question'),
    answer: t('one.answer')
  }, {
    question: t('two.question'),
    answer: t('two.answer')
  }, {
    question: t('three.question'),
    answer: t('three.answer')
  }]
  
  return (
      <div className='my-10 grid gap-5'>
        <Accordion data={faqsData} />
      </div>
  )
}

export default FAQs
