import React from "react";
import Image from "next/image";
import bank from "@/images/Screenshot_2024-02-24_at_5.12.57_PM-removebg-preview.png";

const Essets = () => {
  return (
    <div>
      <div className="flex flex-row">
        {/* titulo y descripcion de Essets */}
        <div className="ml-32">
          <h1 className="text-2xl font-bold text-blue-600">Essets</h1>
          <p className="mt-8">
            A digital platform that facilitates real estate <br />
            crypto transactions in Central America, Mexico and the Caribbean.
          </p>
        </div>

        {/* bolita y banco (imagenes) */}
        <div className=" w-96 h-96 ml-72 mr-32 float-right">
          <Image src={bank} alt="Bank" />
        </div>
      </div>

      {/* catchphrase */}
      <div>
        <p className="mt-0 font-bold text-blue-600 text-2xl flex justify-center text-center">
          MAKING POSSIBLE TO BUY AND <br /> SELL REAL ESTATE WITH CRYPTO
          <br /> CURRENCY
        </p>
      </div>
    </div>
  );
};

export default Essets;
