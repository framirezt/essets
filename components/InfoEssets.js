import React from "react";
import Image from "next/image";
import house from "@/images/home.png";
import deal from "@/images/transaction-history.png";
import exchange from "@/images/Screenshot_2024-02-24_at_5.34.15_PM-removebg-preview.png";

const InfoEssets = () => {
  // Informacion de Essets dividido en tres secciones
  return (
    <div className="mt-16 flex justify-center gap-8 mb-56 px-4">
      {/* Seccion 1 House*/}
      <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50 flex-grow">
        <Image className="mb-4 h-12 w-12" src={house} alt="House" />
        <p className="text-center text-xs">
          Now with Essets is easy to sell or <br></br>purchase real estate
        </p>
      </div>
      {/* Seccion 2  Deal*/}
      <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50 flex-grow">
        <Image className="mb-4 h-12 w-12" src={deal} alt="Deal" />
        <p className="text-center text-xs">
          Essets is the neutral third party <br />
          between buyer and seller that
          <br /> facilitates the transaction
        </p>
      </div>
      {/* Seccion 3 Exchange */}
      <div className="rounded-custom flex flex-col items-center rounded-lg p-4 border-2 bg-gray-50 flex-grow">
        <Image className="mb-4 h-12 w-12" src={exchange} alt="Exchange" />
        <p className="text-center text-xs">
          Digital escrow is available in <br />
          partnership with recognized payment <br />
          providers
        </p>
      </div>
      <div className="rounded-custom flex flex-col items-center rounded-lg p-4 border-2 bg-gray-50 flex-grow">
        <Image className="mb-4 h-12 w-12" src={exchange} alt="Exchange" />
        <p className="text-center text-xs">
          Payment processing available in <br />
          different currencies converted to US$
        </p>
      </div>
    </div>
  );
};

export default InfoEssets;
