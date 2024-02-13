import { LazyMotion, domAnimation } from "framer-motion";

import React from 'react'

type Props = {}

const CustomLazy = ({children}: {children:React.ReactNode}) => {
  return (
    <LazyMotion features={domAnimation}>
        {children}
    </LazyMotion>
  )
}

export default CustomLazy