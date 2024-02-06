import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/Button";

const Page = () => {
  return (
    <div>
      <div className="text-4xl text-center">
        Web3 <span className="text-[#F2A93B]">Together</span>
      </div>
      <div className="mt-12 bg-white bg-opacity-10 grid grid-cols-1 justify-center items-center rounded-3xl sm:mx-8 md:mx-20 lg:mx-40 xl:mx-80 mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 text-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/1b79/2794/632d7a1a13be6cd38c2583a945baffe9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ix8oZoqdMaHF6FZze5i3t9GV2ErUg4vPUAE6pOhFWBQGXJdDtG7qLxwRL8DCrBibSFcm5mi3qSo8u0-wNC~cLdxLxgTzH9hk26o97rAgUKDs3tSq-40hEW3p2JwlWdeXRxwQSECM-aaEY8GKR1gAVAH32kcHpdmyWEgf-1KsC7pIy1GGmxM1MDQY3jsj8~QxHnh2EzyrLC9W9qWO7R8UdQCLcwj477c9c3dHEOQRQkODcKLIOmigW1B8QuAba1faznP8aDrPYtSERH1a-k26MqtxQtccIwqiVt6Wu3JgR9ELAeacxuzqb--X1~CnQNDyPBmc7ojPA3Uj5Y-3iDgXzQ__"
              className="rounded-full h-32 w-32 md:h-20 md:w-20  mx-auto"
              alt="Web3 Together"
            />
            <h1 className="font-inter text-sm md:text-sm lg:text-base font-bold leading-10 tracking-wider mt-5">
              Web3 together
            </h1>
            <div className="mt-5">
              <h1>Current price </h1>
              <h1 className="font-inter text-base md:text-sm  font-bold leading-10 tracking-wider">
                $0.000097456
              </h1>
            </div>
            <div className="mt-5">
              <h1>Current price </h1>
              <h1 className="font-inter text-base md:text-sm  font-bold leading-10 tracking-wider">
                $0.000097456
              </h1>
            </div>
            <div className="mt-10 flex justify-evenly">
              <FaTwitter className="h-7 w-7" />
              <FaInstagram className="h-7 w-7" />
              <MdFacebook className="h-7 w-7" />
              <FaGithub className="h-7 w-7" />
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col items-center">
            <h1 className="font-inter text-base md:text-base lg:text-lg font-bold leading-10 tracking-wider text-center mt-2">
              Mint Your Web3 Together Digital <br /> Membership Pass : Founders
              Edition!
            </h1>
            <div className="mt-5 md:mt-10">
              <p className="font-inter text-xs md:text-sm lg:text-base font-normal leading-10 tracking-wider text-left text-white text-opacity-50 mb-5">
                A private group of 3333 dedicated NFT collectors and artists.
                Membership to the collective and all of the benefits come from
                holding the Web3 Together Membership Pass.
              </p>
              <p className="font-inter text-xs md:text-sm lg:text-base font-normal leading-10 tracking-wider text-left text-white text-opacity-50 mb-5">
                A private group of 3333 dedicated NFT collectors and artists.
                Membership to the collective and all of the benefits come from
                holding the Web3 Together Membership Pass.
              </p>
              <p className="font-inter text-xs md:text-sm lg:text-base font-normal leading-10 tracking-wider text-left text-white text-opacity-50 mb-5">
                A private group of 3333 dedicated NFT collectors and artists.
                Membership to the collective and all of the benefits come from
                holding the Web3 Together Membership Pass.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button label="Connect Wallet!"/>
        </div>
      </div>
    </div>
  );
};

export default Page;
