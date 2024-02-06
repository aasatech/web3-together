"use client";
import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";

export default function JoinEvent() {
  const searchParams = useSearchParams();

  const imageUrl = searchParams.get("img");

  const paragraphs = searchParams.get("paragraphs");

  const router = useRouter();

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
    <div className="w-full flex justify-center">
      <div className="w-full ">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto mb-10 md:mb-10">
          <div className="mx-auto text-center mb-5 md:mb-0">
            <h1 className="font-inter font-bold text-base md:text-xl lg:text-xl tracking-widest">
              If you hold 1 Web3 Together Membership <br />
              Pass = 1 Free NFT in Each NFT Project
            </h1>
          </div>
          <div>
            <Button label="Back" className="!bg-white/20 !text-custom-yellow !px-10" onClick={handleClickBack}/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="items-center justify-center ">
            {imageUrl ? (
              <img
                className="mb-10 rounded-lg w-full"
                src={imageUrl}
                alt="Event Image"
              />
            ) : (
              <img
                className="mb-10 rounded-lg w-full"
                src="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ"
                alt="Event Image"
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {eventData.map((data, index) => (
                <div className="w-full" key={index}>
                  <SmallEvenCard data={data} />
                </div>
              ))}
            </div>
          </div>
          <div className="md:full w-5/6 pl-3 md:pl-10 mt-5 mb-10 md:mt-0">
            <h1 className="font-sans text-base text-white tracking-wider leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </h1>
            <h1 className="mt-5 w-5/6 font-inter font-bold text-xl md:text-2xl leading-snug tracking-widest">
              How can I join?
            </h1>
            <h1 className="font-sans text-base leading-loose text-white tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h1>
            <h1 className="mt-5 font-inter font-bold text-xl md:text-2xl leading-snug tracking-widest">
              Timeline:
            </h1>
            <h1 className="w-full md:w-4/5 font-sans text-base text-white tracking-wider leading-loose">
              <ul className="list-disc pl-4">
                <li>27 March 2023: Open application</li>
                <li>
                  02 May 2023: Deadline of the 300-word proposal<br></br>{" "}
                  submission
                </li>
                <li>13 June 2023: Submission of the first paper draft</li>
                <li>13 July 2023: Final papers September</li>
                <li>2023: Publication</li>
              </ul>
            </h1>
            <h1 className="my-7 font-sans text-base text-white">
              <span className=" font-inter font-bold text-xl md:text-2xl leading-[40px] tracking-widest">
                How can apply:
              </span>
              https//:www.event.com
            </h1>
            <h1 className="w-full md:w-4/5 font-sans text-base text-white tracking-wider leading-loose">
              <span className="font-inter font-bold text-xl md:text-2xl leading-[40px] tracking-widest">
                Noted:
              </span>
              {paragraphs}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
