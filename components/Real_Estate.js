import React from "react";
import Step from "./Step";
import Link from "next/link";

const Real_Estate = () => {
  const steps1 = [
    {
      title: "PSA (lawyers)",
      description:
        "Defines terms and conditions of the transaction & due diligence period by the Buyer’s lawyer",
    },
    {
      title: "Payment Agreement (Essets)",
      description: "Define the trade and payment conditions based on the PSA",
    },
    {
      title: "Closing (Lawyers)",
      description:
        "Closing documents are executed & disbursement instructions are electronically signed to Essets",
    },
    {
      title: "Disbursement (Essets)",
      description: "Payment processed by Essets",
    },
  ];

  const steps2 = [
    {
      title: "KYC",
      description:
        "Buyer must complete the onboarding process. Completing KYC forms, source of funds and wallet verification",
    },
    {
      title: "Deposit",
      description:
        "Buyer transfers the crytpo  to complete the transaction to Essets designated wallet. Crypto is immediately converted in US$ upon receipt. Esset will custody the funds until closing occurs",
    },
    {
      title: "Payment Process",
      description:
        "Upon closing funds are disbursed and transferred to designate destiny accounts (time to arrive the usual international wire transfers)",
    },
  ];

  return (
    <div className="bg-[--beige] py-12 md:py-20 px-6 md:px-20" id="how">
      {/* first pair */}
      <div className="flex flex-col md:grid  md:grid-cols-2 mt-16">
        <div>
          <p className="text-3xl text-blue-950 font-bold mb-5">
            Closing Process
          </p>

          <Link
            href={"#contact"}
            // className="text-white bg-blue-950 mt-10 py-2 px-4 rounded-full mb-8"
            className="text-white bg-blue-950  -ml-1 mb-10 py-2 px-4 rounded-full"
          >
            Get started today!
          </Link>
        </div>

        <div className="bg-white lg:p-10 p-6 rounded-2xl mt-8 md:mt-0 w-full">
          {steps1.map((step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              numSteps={steps1.length}
            />
          ))}
        </div>
      </div>
      {/* second pair */}
      <div className="grid md:grid-cols-2 lg:mt-36 mt-20">
        <p className="lg:hidden  my-8 text-3xl text-blue-950 font-bold">
          Payment Processing
        </p>

        <div className="bg-white lg:p-10 p-6 rounded-2xl mt-8 md:mt-0 w-full">
          {steps2.map((step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              numSteps={steps2.length}
            />
          ))}
        </div>

        {/* </div> */}
        <p className="hidden lg:block ml-16 mt-14 text-3xl text-blue-950 font-bold">
          Payment Processing
        </p>
      </div>
    </div>
  );
};

export default Real_Estate;
