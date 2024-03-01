import React from "react";
import Image from "next/image";
import stars from "@/images/experience.png";
import lock from "@/images/lock.png";
import agreement from "@/images/agreement.png";

const Why_Essets = () => {
  const info1 = [
    {
      src: "stars",
      description:
        "Broad experience in the real estate industry  in Central America, Mexico and the Caribbean",
    },
  ];

  return (
    // titulo
    <div className="py-20 px-20 mb-24">
      <div class="text-center">
        <div class="relative text-4xl font-bold">
          <h1 class="mb-2 text-blue-600">WHY</h1>
          <h1 class="text-green-200 absolute top-0 ml-40 left-80 transform translate-x-full mt-8">
            ESSETS
          </h1>
        </div>
      </div>
      {/* blocks */}
      <div className="mt-24 flex justify-between gap-5 mx-8">
        {/* first block */}
        <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50">
          <Image
            className="-ml-56 mt-10 mx-6 h-16 w-16"
            src={stars}
            alt="Stars"
          />
          <p className="mt-8 ml-2">
            Broad experience in the real estate industry in Central America,
            Mexico and <br />
            the Caribbean
          </p>
        </div>
        {/* second block */}
        <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50">
          <Image
            className="mx-6 mt-10 h-16 w-16 -ml-48"
            src={lock}
            alt="Lock"
          />
          <p className="mt-8">
            Secure transaction processed trough licensed corporate providers
          </p>
        </div>
        {/* third block */}
        <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50">
          <Image
            className="mx-6 h-16 w-16 mt-10 -ml-72"
            src={agreement}
            alt="Agreement"
          />
          <p className="mt-8">
            Extense network of real estate lawyers in the region that can assist
            you with your transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why_Essets;
