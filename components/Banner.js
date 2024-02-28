import React from "react";
import Image from "next/image";
import blocks from "@/images/blocks.png";

const Banner = () => {
  return (
    <div>
      <Image className="h-20 w-auto -mt-2 pb-1" src={blocks} alt="Blocks" />
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Banner;
