import React from "react";
import Image from "next/image";
import sponsor from "@/images/amazon.png";
import america from "@/images/centralamerica.png";

const Sponsors = () => {
  const stats = [
    {
      title: "+40",
      subtitle: (
        <p className="text-lg mt-3 text-stone-400">
          years of combined <br /> experience in the industry
        </p>
      ),
    },
    {
      title: "+$2B",
      subtitle: (
        <p className="text-lg mt-3 text-stone-400">
          managed by our team for real <br /> estate and M&A transactions
        </p>
      ),
    },
  ];

  return (
    // sponsors
    <div className="mt-6 h-72 overflow-y-auto">
      <div className="mt-10 flex flex-row gap-4 md:gap-12 text-base justify-center ">
        <Stat
          title={"+40"}
          subtitle={
            <p className="text-sm md:text-lg mt-3 text-stone-400">
              years of combined <br /> experience in the industry
            </p>
          }
        />

        <div>
          <Image
            className="w-64 md:h-44  md:w-72"
            src={america}
            alt="Central America"
          />
        </div>

        <Stat
          title={"+$2B"}
          subtitle={
            <p className="text-sm md:text-lg mt-3 text-stone-400">
              managed by our team for real <br /> estate and M&A transactions
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
    <div>
      <p className="text-2xl md:text-3xl font-medium text-neutral-600  border-l-2 pl-4 border-orange-500">
        {title}
      </p>
      <p className="text-lg mt-3 text-stone-400">{subtitle}</p>
    </div>
  );
}
