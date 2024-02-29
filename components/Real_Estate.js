import React from "react";

const Real_Estate = () => {
  return (
    <div className="bg">
      <div>
        <p className="text-2xl">Real Estate Closing</p>
        <button>Get started today!</button>
        <div>
          <div>
            <p>Step 1</p>
            <p>PSA (lawyers)</p>
            <p>
              Defines terms and conditions of the transaction & due diligence
              period by the Buyer’s lawyer
            </p>
          </div>
          <div>
            <p>Step 2</p>
            <p>Payment Agreement (Essets)</p>
            <p>Define the payment conditions, based on the PSA</p>
          </div>
          <div>
            <p>Step 3</p>
            <p>Closing (lawyers) </p>
            <p>
              Closing documents are executed & disbursement instructions are
              electronically signed to Essets
            </p>
          </div>
          <div>
            <p>Step 4</p>
            <p>Disbursement (Essets) </p>
            <p>Payment processed by Essets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Real_Estate;
