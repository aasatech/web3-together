'use client'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Template = ({ children }: Props) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div className="mt-5 lg:mt-10 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.3 }}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}

export default Template