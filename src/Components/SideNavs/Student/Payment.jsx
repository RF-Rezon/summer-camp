import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth";
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PKEY);

const Payment = () => {
    // const location = useLocation();
  const { singlePayClass, setsinglePayClass } = UseAuth();

//    const { state: { singlePaidClass } } = location;
  const courseId = singlePayClass?._id;
//   const email = singlePayClass.email; // Who take the course
  const productPrice = singlePayClass?.price;

  const handlePayment = async (token) => {
    const response = await fetch(
      `${import.meta.env.VITE_WEB_URL}/create-payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: courseId,
          price: productPrice,
          email: singlePayClass?.email,
          token: token.id,
        }),
      }
    );

    const { clientSecret } = await response.json();

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: singlePayClass?.email,
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else {
      console.log(paymentIntent);
      Swal.fire({
        icon: "success",
        title: "Payment successful!",
      });
    }
  };

  return (
    <div className="min-h-screen py-36 dash_classes">
      <p className="bg-red-400 p-5 font-semibold text-xl">Payment Page bro</p>

      <div>
        <Elements stripe={stripePromise}>
          <PaymentForm handlePayment={handlePayment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
