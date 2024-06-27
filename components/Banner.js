import React from "react";
import Image from "next/image";
import blocks from "@/images/blocks.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative h-[80vh] max-w-[100vw] overflow-hidden px-4 md:px-0"
      id="home"
    >
      {/* blocks */}
      <Image
        className="h-48 md:h-80 w-auto -mt-2 pb-1 absolute bottom-0 right-0"
        src={blocks}
        alt="Blocks"
      />
      {/* bolita */}
      <div className=" absolute -bottom-[25%] md:-bottom-[45%] -left-[85%] md:-left-[40%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,175,240,0.47)_0%,rgba(140,224,255,0.25)_47.5%,_rgba(255,255,255,0.00)_100%)] w-[892px] md:w-[1192px] h-[547px]  md:h-[947px] rounded-full"></div>

      {/* title */}
      <div className="text-center relative top-16 md:top-32">
        <p className="text-2xl md:text-5xl font-bold">
          Your Crypto Real Estate Transaction <br />
          <span className="linear-gradient-orange text-center top-[70px] h-[4rem] relative md:top-[90px] text-nowrap">
            With Confidence
          </span>
        </p>
        {/* {subtitle} */}
        <p className="relative text-sm md:text-lg top-16 text-stone-500 md:mt-4">
          Crypto Trading, Custody and Payment processing service
          <br /> for real estate transactions
          {/* transactions */}
        </p>
      </div>
      <div className="flex gap-4 relative top-40 md:top-56 justify-center text-sm text-nowrap">
        {/* buttons */}
        <Link
          href={"#contact"}
          className=" px-6 py-2 border bg-black  text-white rounded-lg "
        >
          Book Consultation
        </Link>
        <Link
          href={"#about"}
          className="border border-black px-12 py-2 rounded-lg "
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Banner;
