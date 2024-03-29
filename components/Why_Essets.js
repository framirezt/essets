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
    <div className="py-20 px-8 md:px-20 mb-32">
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
        <Block
          image={stars}
          description={
            "Broad experience in the real estate industry in Central America, Mexico and the Caribbean"
          }
        />
        <Block
          image={lock}
          description={
            "Secure transaction processed trough licensed corporate providers"
          }
        />
        <Block
          image={agreement}
          description={
            "Extense network of real estate lawyers in the region that can assist you with your transaction"
          }
        />
      </div>
    </div>
  );
};

export default Why_Essets;

function Block({ image, description }) {
  return (
    <div className="rounded-custom flex flex-1 flex-col rounded ring-[0.8px] ring-inset ring-black ring-opacity-10 bg-[#F8F8F8] px-6 py-6">
      <Image className="mx-4 mt-4  md:mt-10 h-12 w-12" src={image} alt="Lock" />
      <p className="mt-4 md:mt-8">{description}</p>
    </div>
  );
}
