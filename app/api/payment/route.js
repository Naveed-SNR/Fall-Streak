// api/create-payment-intent.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Return a 405 response for non-POST requests
    res.status(405).end();
    return;
  }

  const { amount } = req.body;
  const stripe = require('stripe')('STRIPE_SECRET_KEY');

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change to your currency
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating a Payment Intent.' });
  }
}
  