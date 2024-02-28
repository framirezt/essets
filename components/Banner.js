import React from "react";
import Image from "next/image";
import blocks from "@/images/blocks.png";

const Banner = () => {
  return (
    <div className="relative h-[80vh] overflow-y-hidden">
      {/* blocks */}
      <Image
        className="h-80 w-auto -mt-2 pb-1 absolute bottom-0 right-0"
        src={blocks}
        alt="Blocks"
      />
      {/* bolita */}
      <div className=" absolute -bottom-[45%] -left-[40%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,175,240,0.47)_0%,rgba(140,224,255,0.25)_47.5%,_rgba(255,255,255,0.00)_100%)] w-[1192px] h-[947px] rounded-full"></div>

      {/* title */}
      <div className="text-center relative top-32">
        <p className="text-5xl font-bold">
          Buy & Sell Real Estate <br />
          <span className="linear-gradient-orange text-center relative top-20 from-transparent-50 to-orange">
            With Crypto
          </span>
        </p>
        {/* {subtitle} */}
        <p className="relative top-16 text-stone-400">
          Crypto escrow services for real estate
        </p>
      </div>
      <div className="flex gap-4 relative top-56 justify-center">
        {/* buttons */}
        <button className=" px-3 py-1 border bg-black font text-white rounded-md">
          Book Consultation
        </button>
        <button className="border border-black px-6 py-1 rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Banner;
