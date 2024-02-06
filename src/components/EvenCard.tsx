import React from "react";

type Props = {
  data:{
    cardimg:string; 
    title:string; 
    description:string; 
    onClick:()=>void;
  }
}

export const EventCard = ({ data }: Props) => {
  const { cardimg, title, description, onClick } = data;

  return (
    <div className="flex h-[285px] w-[610px] bg-[#D9D9D91A] rounded-lg justify-between">
      <div>
        <img
          className="h-[163px] w-[198px] mx-[22px] mt-[35px]"
          src={cardimg}
          alt="Event Image"
        />
        <p className="ml-5 mt-[50px]">Jun,28,2024</p>
      </div>

      <div className="h-[221px] w-[341px] pt-[17px] text-left mr-[20px] ml-5">
        <h1 className="font-inter font-bold text-sm mb-2 tracking-widest">
          {title}
        </h1>
        <p className="font-inter font-normal text-base leading-7 tracking-wider ">
          {description}
        </p>
        <button
          onClick={onClick}
          className="w-[116px] h-[42px] bg-custom-yellow rounded-lg ml-[210px] mt-[33px]"
        >
          Joint
        </button>
      </div>
    </div>
  );
};
