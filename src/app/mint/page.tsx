'use client'
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/Button";
import { m } from "framer-motion";
import Image from "next/image";
import logo from '@/resources/logo/web3_together_logo_white_text.png'
import Link from "next/link";
import CustomLazy from "@/components/CustomLazy";

const Page = () => {

  return (
    <CustomLazy>
      <m.div className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <m.div className="text-center flex justify-center items-center -mt-14 max-md:hidden"
          initial={{ x: '-50%', y: -44, opacity: 1, translateX: 159 }}
          animate={{ x: 0, y: 0, opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href={'/'} className="md:flex items-center justify-center text-2xl md:text-4xl">
            <Image priority width={100} height={100} src={logo} alt='logo' />
            <m.h1 className="whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Web3 <span className="text-custom-yellow">Together</span>
            </m.h1>
          </Link>
        </m.div>

        <div className="grid max-w-4xl gap-8 mx-auto bg-white/10 p-10 rounded-3xl">
          <div className="grid sm:grid-cols-[30%_1fr] gap-8">
            <div className="text-center">
              <Image
                src="https://s3-alpha-sig.figma.com/img/1b79/2794/632d7a1a13be6cd38c2583a945baffe9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ix8oZoqdMaHF6FZze5i3t9GV2ErUg4vPUAE6pOhFWBQGXJdDtG7qLxwRL8DCrBibSFcm5mi3qSo8u0-wNC~cLdxLxgTzH9hk26o97rAgUKDs3tSq-40hEW3p2JwlWdeXRxwQSECM-aaEY8GKR1gAVAH32kcHpdmyWEgf-1KsC7pIy1GGmxM1MDQY3jsj8~QxHnh2EzyrLC9W9qWO7R8UdQCLcwj477c9c3dHEOQRQkODcKLIOmigW1B8QuAba1faznP8aDrPYtSERH1a-k26MqtxQtccIwqiVt6Wu3JgR9ELAeacxuzqb--X1~CnQNDyPBmc7ojPA3Uj5Y-3iDgXzQ__"
                className="rounded-full h-32 w-32 md:h-20 md:w-20 mx-auto"
                alt="Web3 Together"
                width={100}
                height={100}
              />
              <h1 className="font-bold text-xl mt-5 whitespace-nowrap">
                Web3 together
              </h1>
              <div className="mt-5">
                <h1>Current price</h1>
                <h2 className="font-bold mt-2">
                  $0.000097456
                </h2>
              </div>
              <div className="mt-5">
                <h1>Current price</h1>
                <h1 className="font-bold mt-2">
                  $0.000097456
                </h1>
              </div>
              <div className="mt-10 grid grid-cols-4 px-5 sm:px-3 gap-3 place-items-center">
                <Link href={'#'}>
                  <FaTwitter className="h-7 w-7" />
                </Link>
                <Link href={'#'}>
                  <FaInstagram className="h-7 w-7" />
                </Link>
                <Link href={'#'}>
                  <MdFacebook className="h-7 w-7" />
                </Link>
                <Link href={'#'}>
                  <FaGithub className="h-7 w-7" />
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold duration-300">
                Mint Your Web3 Together Digital <br /> Membership Pass : Founders
                Edition!
              </h1>
              <div className="mt-5 md:mt-8 text-white/50">
                <p className="">
                  A private group of 3333 dedicated NFT collectors and artists.
                  Membership to the collective and all of the benefits come from
                  holding the Web3 Together Membership Pass.
                  <br />
                  <br />
                  A private group of 3333 dedicated NFT collectors and artists.
                  Membership to the collective and all of the benefits come from
                  holding the Web3 Together Membership Pass.
                  <br />
                  <br />
                  A private group of 3333 dedicated NFT collectors and artists.
                  Membership to the collective and all of the benefits come from
                  holding the Web3 Together Membership Pass.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Button label="Connect Wallet!" onClick={()=>alert('No wallet!')}/>
          </div>
        </div>
      </m.div>
    </CustomLazy>
  );
};

export default Page;
