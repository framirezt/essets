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
