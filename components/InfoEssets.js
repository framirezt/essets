import React from "react";
import Image from "next/image";
import house from "@/images/home.png";
import deal from "@/images/transaction-history.png";
import exchange from "@/images/Screenshot_2024-02-24_at_5.34.15_PM-removebg-preview.png";
import handshake from "@/images/handshake.png";

const InfoEssets = () => {
  const cards = [
    {
      icon: house,
      description: (
        <p className="text-center">
          Now with Essets is easy to sell or <br></br>purchase real estate
        </p>
      ),
    },
    {
      icon: deal,
      description: (
        <p className="text-center">
          Essets is the neutral third party <br />
          between buyer and seller that
          <br /> facilitates the transaction
        </p>
      ),
    },

    {
      icon: handshake,
      description: (
        <p className="text-center">
          Digital escrow is available in <br />
          partnership with recognized payment <br />
          providers
        </p>
      ),
    },
    {
      icon: exchange,
      description: (
        <p className="text-center ">
          Payment processing available in <br />
          different currencies converted to US$
        </p>
      ),
    },
  ];

  return (
    <>
      {/* catchphrase */}
      <div>
        <p className="mt-16 font-bold text-blue-600 text-xl md:text-3xl flex justify-center text-center">
          MAKING POSSIBLE TO BUY AND SELL
          <br /> REAL ESTATE IN MEXICO, CENTRAL
          <br /> AMERICA AND THE CARIBBEAN
        </p>
      </div>
      <div className="mt-24 flex md:flex-row flex-col justify-center gap-4 mb-56 px-8">
        {cards.map((card, index) => (
          <Card icon={card.icon} description={card.description} key={index} />
        ))}
      </div>
    </>
  );
};

export default InfoEssets;

function Card({ icon, description }) {
  return (
    <div className="rounded-custom flex flex-col items-center rounded-lg p-4 border-2 bg-gray-50 flex-grow">
      <Image className="mb-4 h-12 w-12" src={icon} alt="Exchange" />
      {description}
    </div>
  );
}
