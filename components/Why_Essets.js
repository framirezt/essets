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
    <div className="py-20 px-20 mb-32">
      <div className="text-center">
        <div className="relative text-5xl font-bold">
          <h1 className="mb-2 text-blue-600 -ml-16">WHY</h1>
          <h1 className="text-green-200 absolute top-2 -ml-12 left-1/2 mt-8 ">
            ESSETS
          </h1>
        </div>
      </div>
      {/* blocks */}
      <div className="mt-36 flex flex-col md:flex-row md:justify-between gap-5 md:mx-8">
        {/* first block */}
        <div className="rounded-custom flex flex-1 flex-col rounded p-4 border-2 bg-gray-50">
          <Image className="mt-10 mx-6 h-16 w-16" src={stars} alt="Stars" />
          <p className="mt-8 ml-2">
            Broad experience in the real estate industry in Central America,
            Mexico and <br />
            the Caribbean
          </p>
        </div>
        {/* second block */}
        <div className="rounded-custom flex flex-1 flex-col rounded p-4 border-2 bg-gray-50 ">
          <Image className="mx-6 mt-10 h-16 w-16" src={lock} alt="Lock" />
          <p className="mt-8">
            Secure transaction processed trough licensed corporate providers
          </p>
        </div>
        {/* third block */}
        <div className="flex-1 rounded-custom flex flex-col rounded p-4 border-2 bg-gray-50">
          <Image
            className="mx-6 h-16 w-16 mt-10"
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
