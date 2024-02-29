import React from "react";
import Step from "./Step";

const Real_Estate = () => {
  const steps = [
    {
      title: "PSA (lawyers)",
      description:
        "Defines terms and conditions of the transaction & due diligence period by the Buyer’s lawyer",
    },
  ];

  return (
    <div className="bg-[--beige] py-20 px-20">
      <div className="grid grid-cols-2">
        <div>
          <p className="text-2xl">Real Estate Closing</p>
          <button>Get started today!</button>
        </div>

        <div className="bg-white p-10 rounded-2xl">
          {steps.map((step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Real_Estate;
