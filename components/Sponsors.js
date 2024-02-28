import React from "react";
import Image from "next/image";
import sponsor from "@/images/amazon.png";

const Sponsors = () => {
  return (
    // sponsors
    <div className="mt-6 h-screen overflow-y-auto">
      <p className="h-12 text-center">Trusted by</p>
      {/* fotos */}
      <div className="flex justify-center">
        <Image
          className="mx-6 h-32 w-32 object-cover"
          src={sponsor}
          alt="Sponsor"
        />
        <Image
          className="mx-6 h-32 w-32 object-cover"
          src={sponsor}
          alt="Sponsor"
        />
        <Image
          className="mx-6 h-32 w-32 object-cover"
          src={sponsor}
          alt="Sponsor"
        />
        <Image
          className="mx-6 h-32 w-32 object-cover"
          src={sponsor}
          alt="Sponsor"
        />
      </div>
      {/* line break */}
      <div className=" border-b-2 w-5/6 my-0 mx-auto"></div>
      {/* statistics */}
      <div className="mt-10 flex flex-row gap-12 text-base justify-center ">
        <div>
          <p className="text-2xl text-neutral-600 font-bold border-l-2 pl-4 border-orange-500">
            +40
          </p>
          <p className="mt-3 text-stone-400">
            years of experience in <br /> trust issues
          </p>
        </div>
        <div>
          <p className="text-2xl text-neutral-600 font-bold border-l-2 pl-4 border-orange-500">
            +$1B
          </p>
          <p className="mt-3 text-stone-400">
            on third-party funds <br /> managed by our team
          </p>
        </div>
        <div>
          <p className="text-2xl text-neutral-600 font-bold border-l-2 pl-4 border-orange-500">
            +$1.5B
          </p>
          <p className="mt-3 text-stone-400">
            have been guarded in our <br /> portfolio{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
