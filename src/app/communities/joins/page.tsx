"use client";
import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";
import Image from "next/image";
import EventsData from '@/data/events.json'
import shuffle from "@/utils/shuffle";

export default function JoinEvent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id")
  const event = EventsData.find(event => event.id === id)
  const eventDetails = event?.details

  const otherEvents = EventsData.filter(event=>event.id !== id)
  const randomEvents = shuffle(otherEvents).slice(0,2)
  console.log(randomEvents);

  const handleClickBack = () => {
    router.push("/communities");
  };

  return (
    <div className="mb-10">
      <div className="flex max-lg:flex-col-reverse justify-center items-center relative">
        <h1 className="text-center font-bold text-2xl pb-20 max-w-xl">
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
            src={`${eventDetails?.img}`}
            alt="Event Image"
            width={500}
            height={500}
          />

          {randomEvents.map((event)=>(
            <SmallEvenCard data={event} key={event.id}/>
          ))}
        </div>

        <div>
          <p>
            {eventDetails?.intro}
          </p>
          <h1 className="text-xl xl:text-2xl font-bold pt-5">
            How can I join?
          </h1>
          <p>
            {eventDetails?.howToJoin}

          </p>
          <h1 className="text-xl xl:text-2xl font-bold pt-5">
            Timeline:
          </h1>
          <div>
            <ul className="list-disc ml-4">
              {eventDetails?.timeLines.map((timeLine, index) => (
                <li key={index}>
                  {timeLine}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="my-5">
            <span className="text-xl xl:text-2xl font-bold">
              How can apply:
            </span>
            {' '}{eventDetails?.applyLink}
          </h1>
          <h1>
            <span className="text-xl xl:text-2xl font-bold">
              Noted:
            </span>
            {' '}{eventDetails?.noted}
          </h1>
        </div>
      </div>
    </div>
  );
}
