import React from "react";
import Image from "next/image";
import bank from "@/images/Screenshot_2024-02-24_at_5.12.57_PM-removebg-preview.png";
import bluehouse from "@/images/bluehouse.png";

const Essets = () => {
  return (
    <div
      className="flex flex-col md:flex-row pt-24 md:ml-12 px-8 gap-8"
      id="about"
    >
      {/* titulo y descripcion de Essets */}
      <div className="md:ml-32">
        <h1 className="text-3xl font-bold text-blue-600">Essets</h1>
        <p className="mt-8 text-lg">
          A digital platform that facilitates real estate transactions in
          Central America, Mexico and the Caribbean.
        </p>
      </div>

      {/* bolita y banco (imagenes) */}
      <div className=" w-[80vw] md:w-1/3 md:h-1/2 mt-8 md:mt-4 md:mr-56 ">
        <Image src={bluehouse} alt="House" />
      </div>
    </div>
  );
};

export default Essets;
