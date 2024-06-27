import React from "react";
import Image from "next/image";
import sponsor from "@/images/amazon.png";
import america from "@/images/centralamerica.png";

const Sponsors = () => {
  return (
    // sponsors
    <div className="mt-6 md:h-72 overflow-y-auto">
      <div className="mt-10 grid grid-cols-2 md:flex flex-row gap-6 px-8 md:gap-12 text-base justify-center ">
        <Stat
          title={"+40"}
          subtitle={
            <p className="text-sm md:text-lg mt-3 text-stone-400">
              years of combined experience in the industry
            </p>
          }
        />

        <div className="hidden md:block">
          <Image className="h-32  w-56 " src={america} alt="Central America" />
        </div>

        <Stat
          title={"+$2B"}
          subtitle={
            <p className="text-sm md:text-lg mt-3 text-stone-400">
              managed by our team for real estate and M&A transactions
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Sponsors;

function Stat({ title, subtitle }) {
  return (
    <div className="md:w-64">
      <p className="text-2xl md:text-3xl font-medium text-neutral-600  border-l-2 pl-4 border-orange-500">
        {title}
      </p>
      {subtitle}
    </div>
  );
}
