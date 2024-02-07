"use client";
import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";
import { m } from "framer-motion";
import CustomLazy from "@/components/CustomLazy";
import Image from "next/image";

export default function JoinEvent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const imageUrl = searchParams.get("img");
  const intro = searchParams.get("intro");
  const timeLines = searchParams.getAll("timeLines");
  const howToJoin = searchParams.get("howToJoin");
  const applyLink = searchParams.get("applyLink");
  const noted = searchParams.get("noted");

  const handleClickBack = () => {
    router.push("/communities");
  };

  const eventData = [
    {
      img: "https://s3-alpha-sig.figma.com/img/fc2d/6a75/f794b8542e7ff502cf17315379ee4031?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9knrVOBFRfsv~toBuYOndEwhLJjIES8eI6c7t8U4VQJsWPccSCLqYvC55cS4acuFfKIkiafG80v1IXFdUqKap9z1n78nCOV4CAHymkm7fPBb-pdDcly4oxjltyGxUY33D9F19ibTSxjiKAc5DGZ4f-WWmDjc1YhrNwjzGMciCPpcxNPVbwVezDWWtz3h-IvMEa4XHKg-a3dubdSS3nR6NXZU6--KdEFNiSLtS87eqONDU-TTGfNaML4qMea5S222OjUdl4jJgYiCFX3v2l54YNuARK4hR8CMzVwIVW4hG-XVmkMBIt4pUrOE3OwZMjp8n5J38WXP3TyOcUKX2oeIQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "",
    },
  ];

  return (
    <CustomLazy>
      <m.div className="mb-10 md:-mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex max-lg:flex-col-reverse justify-center items-center relative">
          <h1 className="text-center font-bold text-2xl pb-10 max-w-xl">
            If you hold 1 Web3 Together Membership 
            Pass = 1 Free NFT in Each NFT Project
          </h1>
          <Button label="Back"
            className="!bg-white/20 !text-custom-yellow !px-10 lg:absolute max-lg:mb-5 max-lg:w-fit self-end top-0 right-0" onClick={handleClickBack} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid xl:grid-cols-2 gap-5">
            <Image
              className="mb-5 rounded-lg w-full xl:col-span-2"
              src={`${imageUrl}`}
              alt="Event Image"
              width={500}
              height={500}
            />

            {eventData.map((data, index) => (
              <SmallEvenCard data={data} key={index} />
            ))}
          </div>

          <div>
            <p>
              {intro}
            </p>
            <h1 className="text-xl xl:text-2xl font-bold pt-5">
              How can I join?
            </h1>
            <p>
              {howToJoin}
            </p>
            <h1 className="text-xl xl:text-2xl font-bold pt-5">
              Timeline:
            </h1>
            <p>
              <ul className="list-disc ml-4">
                {timeLines.map((timeLine, index) => (
                  <li key={index}>
                    {timeLine}
                  </li>
                ))}
              </ul>
            </p>
            <h1 className="my-5">
              <span className="text-xl xl:text-2xl font-bold">
                How can apply:
              </span>
              {' '}{applyLink}
            </h1>
            <h1>
              <span className="text-xl xl:text-2xl font-bold">
                Noted:
              </span>
              {' '}{noted}
            </h1>
          </div>
        </div>
      </m.div>
    </CustomLazy>
  );
}
