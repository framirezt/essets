import React from "react";
import Image from "next/image";
import sponsor from "@/images/amazon.png";
import america from "@/images/centralamerica.png";

const Sponsors = () => {
  return (
    // sponsors
    <div className="mt-6 h-72 overflow-y-auto">
      <div className="mt-10 flex flex-row gap-12 text-base justify-center ">
        <div>
          <p className="text-3xl text-neutral-600 border-l-2 pl-4 border-orange-500">
            +40
          </p>
          <p className="text-lg mt-3 text-stone-400">
            years of combined <br /> experience in the industry
          </p>
        </div>
        <div>
          <Image className="h-44 w-72" src={america} alt="Central America" />
        </div>
        <div>
          <p className="text-3xl text-neutral-600  border-l-2 pl-4 border-orange-500">
            +$2B
          </p>
          <p className="text-lg mt-3 text-stone-400">
            managed by our team for real <br /> estate and M&A transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
