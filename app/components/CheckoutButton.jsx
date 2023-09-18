import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe('process.env.STRIPE_PUBLISHABLE_KEY');

const CheckoutButton = () => {
  const router = useRouter();
  
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageName: selectedPackage.packageName,
          price: selectedPackage.price,
          name: e.target.name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        }),
      });
  
      const { sessionId } = await response.json();
  
      // Redirect the user to the Stripe checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });
  
      if (error) {
        console.error("Error in redirecting to Stripe checkout:", error);
      }
    } catch (err) {
      console.error("Error in creating checkout session:", err);
    }
  };
  
  
  return <button className="w3-button w3-black w3-round px-4 py- mt-4" type="submit" onClick={handleCheckout}>Submit</button>
};

export default CheckoutButton;