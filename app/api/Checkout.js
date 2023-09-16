
import { stripe } from '../../stripe.js'; // Import your Stripe configuration

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a Stripe Checkout Session here
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          // Define the line items for your purchase
          {
            price: price, // Replace with your actual Price ID
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success', // Specify your success URL
        cancel_url: 'https://yourwebsite.com/cancel',   // Specify your cancel URL
      });

      // Send the session ID as a response to the client
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Unable to create checkout session' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}