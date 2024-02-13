import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import EventsData from '@/data/events.json' 

const Communities = () => {
  const events = EventsData;
  return (
      <div className="w-full">
        <h1 className="text-center font-bold text-3xl">
          Community
        </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
            {events.map((event) => (
              <SmallEvenCard key={event.id} data={event} />
            ))}
          </div>
      </div>
  );
};

export default Communities;
