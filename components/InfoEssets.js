import React from "react";
import Image from "next/image";
import house from "@/images/home.png";
import deal from "@/images/transaction-history.png";
import exchange from "@/images/Screenshot_2024-02-24_at_5.34.15_PM-removebg-preview.png";

const InfoEssets = () => {
  return (
    <div>
      <div>
        <Image src={house} alt="House" />
        <p>
          Now with Essets is easy to sell or purchase real estate with crypto
          currencies
        </p>
      </div>
      <div>
        <Image src={deal} alt="Deal" />
        <p>
          Essets is the neutral third party between buyer and seller that
          facilitates the conversion of cryptocurrency to fiat currency in
          partnership with recognized crypto payments provider
        </p>
      </div>
      <div>
        <Image src={exchange} alt="Exchange" />
        <p>
          Essets can process the payment either in cryptocurrency or, in case
          seller does not want to receive crypto,  it will convert the crypto to
          fiat to complete the payment
        </p>
      </div>
    </div>
  );
};

export default InfoEssets;
