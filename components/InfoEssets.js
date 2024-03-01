import React from "react";
import Image from "next/image";
import house from "@/images/home.png";
import deal from "@/images/transaction-history.png";
import exchange from "@/images/Screenshot_2024-02-24_at_5.34.15_PM-removebg-preview.png";

const InfoEssets = () => {
  // Informacion de Essets dividido en tres secciones
  return (
    <div className="mt-16 flex flex-row justify-center gap-8 mb-56">
      {/* Seccion 1 House*/}
      <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50">
        <Image className="mb-4 h-12 w-12" src={house} alt="House" />
        <p className="text-center text-xs">
          Now with Essets is easy to sell or <br></br>purchase real estate with
          crypto <br /> currencies
        </p>
      </div>
      {/* Seccion 2  Deal*/}
      <div className="rounded-custom flex flex-col items-center rounded p-4 border-2 bg-gray-50">
        <Image className="mb-4 h-12 w-12" src={deal} alt="Deal" />
        <p className="text-center text-xs">
          Essets is the neutral third party between buyer and <br /> seller that
          facilitates the conversion of <br />
          cryptocurrency to fiat currency in partnership with <br></br>
          recognized crypto payments provider
        </p>
      </div>
      {/* Seccion 3 Exchange */}
      <div className="rounded-custom flex flex-col items-center rounded-lg p-4 border-2 bg-gray-50">
        <Image className="mb-4 h-12 w-12" src={exchange} alt="Exchange" />
        <p className="text-center text-xs">
          Essets can process the payment either in <br /> cryptocurrency or, in
          case seller does not want to <br />
          receive crypto, it will convert the crypto to fiat to <br />
          complete the payment
        </p>
      </div>
    </div>
  );
};

export default InfoEssets;
