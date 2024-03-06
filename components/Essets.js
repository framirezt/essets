import React from "react";
import Image from "next/image";
import bank from "@/images/Screenshot_2024-02-24_at_5.12.57_PM-removebg-preview.png";
import bluehouse from "@/images/bluehouse.png";

const Essets = () => {
  return (
    <div>
      <div className="flex flex-row mt-32 ml-12">
        {/* titulo y descripcion de Essets */}
        <div className="ml-32">
          <h1 className="text-3xl font-bold text-blue-600">Essets</h1>
          <p className="mt-8 text-lg">
            A digital platform that facilitates real estate <br />
            transactions in Central America, Mexico and the <br /> Caribbean.
          </p>
        </div>

        {/* bolita y banco (imagenes) */}
        <div className="w-1/3 h-1/2 -mt-24 ml-72">
          <Image src={bluehouse} alt="House" />
        </div>
      </div>

      {/* catchphrase */}
      <div>
        <p className="mt-16 font-bold text-blue-600 text-3xl flex justify-center text-center">
          MAKING POSSIBLE TO BUY AND SELL
          <br /> REAL ESTATE IN MEXICO, CENTRAL
          <br /> AMERICA AND THE CARIBBEAN
        </p>
      </div>
    </div>
  );
};

export default Essets;
