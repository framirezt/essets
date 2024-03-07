import React from "react";
import Image from "next/image";
import linkedin from "@/images/linkedin.png";
import profile1 from "@/images/profile1.png";
import profile2 from "@/images/profile2.png";

const Team = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 mb-36">
      {/* primer team member */}
      <Profile
        name={"ORLANDO LOPEZ"}
        url={profile1}
        bio={
          "25 years experience in the industry, he has structured numerous trust transactions, administration and custody of funds for banks and ﬁnancial institutions at a national and international level, in an amount that exceeds US $1.8B"
        }
      />
      {/* segundo team member */}
      <Profile
        name={"ESTEBAN RODRIGUEZ"}
        url={profile2}
        bio={
          " 15 years experience in the industry he has participated in the structuring of ﬁduciary transactions and custody of funds for  amounts exceeding US $1.5B."
        }
      />
    </div>
  );
};

export default Team;

function Profile({ url, name, bio }) {
  return (
    <div className="bg-gray-50 relative flex flex-col items-center px-10 border-2 rounded-lg p-4 pt-9 pb-28 flex-grow-0 w-[25rem]">
      <Image src={url} alt="" />
      <p className="text-2xl text-center mt-4 ">{name}</p>
      <p className="mt-10 text-center">{bio}</p>
      <Image
        className="w-12 h-12 bottom-10 mt-16 absolute"
        src={linkedin}
        alt="LinkedIn"
      />
    </div>
  );
}
