"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  data: {
    id: string;
    img: string;
    title: string;
    description: string;
    date: string;
    joinLink: string;
    details?: {
      img: string;
      intro: string;
      howToJoin: string,
      timeLines: string[],
      applyLink: string,
      noted: string;
    }
  }
}

export const SmallEvenCard = ({ data }: Props) => {
  const { img, title, description, date, joinLink, id } = data;
  const pathName = usePathname()
  console.log(pathName);
  
  return (
    <Link
      href={pathName === '/communities' ? 
      { pathname:joinLink, query: {id},} 
      : 
      { href:joinLink, query: {id},}
      }>
      <div className="bg-white/10 rounded-lg">
        <div className="grid">
          <Image
            className="rounded-lg object-cover h-full md:h-44 2xl:min-h-60 w-full"
            src={img}
            alt="Event Image"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h1 className="font-bold text-2xl pb-3">
              {title}
            </h1>
            <p className="pb-3">
              {description}
            </p>
            <div className="flex justify-between items-center">
              <h1 className="text-white/50">
                {date}
              </h1>
              <button
                className="text-custom-yellow font-bold"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
