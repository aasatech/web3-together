'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from './Button'
import clsx from 'clsx';
import logo from '@/resources/logo/web3_together_logo_white_text.png'

export const Navbar = () => {
  const pathname = usePathname()
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <nav className='flex justify-between items-center'>
      <Link href={'/'} className='-ml-5'>
        <span >
          <Image priority width={100} height={100} src={logo} alt='logo' />
        </span>
      </Link>

      <ul className='flex items-center lg:text-xl gap-5 lg:gap-10 text-white/50 max-md:hidden font-bold'>
        <li>
          <Link href={'/membership'}
            className={clsx({'text-custom-yellow':pathname === '/membership'}, 'hover:text-custom-yellow duration-100')}
          >
            Membership
          </Link>
        </li>
        <li>
          <Link href={'rewards'}
            className={clsx({'text-custom-yellow':pathname === '/rewards'}, 'hover:text-custom-yellow duration-100')}
          >
            Rewards
          </Link>
        </li>
        <li>
          <Link href={'communities'}
            className={clsx({'text-custom-yellow':pathname === '/communities'}, 'hover:text-custom-yellow duration-100')}
          >
            Community
          </Link>
        </li>
        <li>
          <Link href={'faqs'}
            className={clsx({'text-custom-yellow':pathname === '/faqs'}, 'hover:text-custom-yellow duration-100')}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link onClick={() => setToggleMenu(false)} href='mint'>
            <Button label='Mint is live' className='lg:!px-7 lg:!py-5 text-white hover:bg-custom-yellow/80 duration-100' />
          </Link>
        </li>
      </ul>

      <label className={clsx('hamburger-menu md:hidden', toggleMenu && 'fixed right-5')}>
        <input type='checkbox' checked={toggleMenu} onChange={() => setToggleMenu(!toggleMenu)} />
      </label>
      <aside className='sidebar fixed top-0 right-0 duration-300 backdrop-blur bg-white/5 max-md:w-full h-screen overflow-auto z-50 pt-24 pb-10'>
        <ul className='flex flex-col items-center text-xl font-bold gap-10 text-white/50 md:hidden '>
          <li>
            <Link href={'/membership'}
              className={clsx({'text-custom-yellow':pathname === '/membership'})}
              onClick={() => setToggleMenu(false)}
            >
              Membership
            </Link>
          </li>
          <li>
            <Link href={'rewards'}
              className={clsx({'text-custom-yellow':pathname === '/rewards'})}
              onClick={() => setToggleMenu(false)}
            >
              Rewards
            </Link>
          </li>
          <li>
            <Link href={'communities'}
              className={clsx({'text-custom-yellow':pathname === '/communities'})}
              onClick={() => setToggleMenu(false)}
            >
              Community
            </Link>
          </li>
          <li>
            <Link href={'faqs'}
              className={clsx({'text-custom-yellow':pathname === '/faqs'})}
              onClick={() => setToggleMenu(false)}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggleMenu(false)} href='mint'>
              <Button label='Mint is live' className='px-7 py-5 text-white' />
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  )
}