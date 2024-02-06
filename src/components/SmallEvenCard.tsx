"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type Props = {
  data:{
    img: string; 
    title:string; 
    description: string; 
    date:string; 
    joinLink: string; 
    query?:{
      paragraphs:string;
      img: string;
    }
  }
}

export const SmallEvenCard = ({ data }: Props) => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const imageUrl = searchParams.get("img");

  const { img, title, description, date, joinLink, query } = data;

  return (
    <div className="bg-white bg-opacity-10 rounded-lg">
      <div className="grid gap-5 ">
        {imageUrl ? (
          <img
            className="rounded-lg object-cover h-72  w-full "
            src={imageUrl}
            alt="Event Image"
          />
        ) : (
          <img
            className="rounded-lg object-cover h-72  w-full "
            src={img}
            alt="Event Image"
          />
        )}
        <div className=" top-20 mx-5">
          <h1 className="font-inter font-bold text-xl mb-2 tracking-widest">
            {title}
          </h1>
          <p className=" font-inter font-normal text-base leading-7 tracking-wider">
            {description}
          </p>
          <div className="flex flex-row justify-between pb-2 pt-10">
            <h1 className="font-inter font-normal text-base leading-7 text-white text-opacity-40 tracking-wider">
              {date}
            </h1>
            <Link
              href={{
                pathname: joinLink,
                query: query,
              }}
              className="text-[#F2A93B] font-inter font-bold text-base leading-7 tracking-wider"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
