import React from "react";
import Image from "next/image";
import linkedin from "@/images/linkedin.png";

const Team = () => {
  return (
    <div className="flex flex-row justify-center gap-8 mb-36">
      {/* primer team member */}
      <div className="bg-gray-50 flex flex-col items-center px-10 border-2 rounded-lg p-4 py-20">
        {/* <Image src={team} alt="House" /> */}
        <p className="text-2xl text-center">ORLANDO LOPEZ</p>
        <p className="mt-10">
          25 years experience in the industry, he has <br />
          structured numerous trust transactions, <br />
          administration and custody of funds for <br />
          banks and ﬁnancial institutions at a national <br />
          and international level, in an amount that <br />
          exceeds US $1.8B
        </p>
        <div className="mt-8">
          <Image className="w-12 h-12" src={linkedin} alt="LinkedIn" />
        </div>
      </div>
      {/* segundo team member */}
      <div className="bg-gray-50 flex flex-col items-center px-10 border-2 rounded-lg p-4 py-20 flex-grow-0">
        {/* <Image src={team} alt="House" /> */}
        <p className="text-2xl text-center">ESTEBAN RODRIGUEZ</p>
        <p className="mt-14">
          15 years experience in the industry he has <br />
          participated in the structuring of ﬁduciary <br />
          transactions and custody of funds for <br />
          amounts exceeding US $1.5B.
        </p>
        <div className="mt-16">
          <Image className="w-12 h-12" src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Team;
