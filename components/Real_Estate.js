import React from "react";
import Step from "./Step";

const Real_Estate = () => {
  const steps1 = [
    {
      title: "PSA (lawyers)",
      description:
        "Defines terms and conditions of the transaction & due diligence period by the Buyer’s lawyer",
    },
    {
      title: "Payment Agreement (Essets)",
      description: "Define the payment conditions, based on the PSA",
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
        "Buyer transfers the funds to complete the transaction to Essets designated account. If deposited in different currencies other than US$, immediately converted in US$ upon receipt",
    },
    {
      title: "Payment Process",
      description:
        "Upon closing funds are disbursed and transferred to designate destiny accounts (time to arrive the usual international wire transfers)",
    },
  ];

  return (
    <div className="bg-[--beige] py-20 px-20">
      {/* first pair */}
      <div className="grid grid-cols-2 mt-16">
        <div>
          <p className="text-3xl text-blue-950 font-bold">
            Real Estate Closing <br />
            Process
          </p>
          <button className="text-white bg-blue-950 mt-6 py-2 px-4 rounded-full">
            Get started today!
          </button>
        </div>

        <div className="bg-white p-10 rounded-2xl">
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
      <div className="grid grid-cols-2 mt-28">
        <div className="bg-white p-10 rounded-2xl">
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
        <p className="ml-16 mt-14 text-3xl text-blue-950 font-bold">
          Payment Processing
        </p>
      </div>
    </div>
  );
};

export default Real_Estate;
