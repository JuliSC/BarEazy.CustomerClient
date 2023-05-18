import React from "react";

import {Elements, PaymentElement} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51N1Pw7Fayn9zz5E3NJYFP9OfytAmPGNrw3wrol5xATlh6kwwJboYySEXidh5vksenUbsDloY1cY7vtN5fNQwdro200wLOF2qG3"
);

interface PaymentFormProps {}

const PaymentForm: React.FC<PaymentFormProps> = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51N1Pw7Fayn9zz5E30wCh5TdbjpvmcM7KI24NMusPLGp7HICo5SiIccnK3OwrEshM7drCw47zd024Rro9fzXZzmFg00xBbhjaRY",
  };

  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <form>
          <PaymentElement />
          <button>Submit</button>
        </form>
      </Elements>
    </div>
  );
};

export default PaymentForm;
