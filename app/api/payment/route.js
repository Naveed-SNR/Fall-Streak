// pages/api/submitBooking.js

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export default async (req, res) => {
  const stripeserver = new Stripe('process.env.STRIPE_SECRET_KEY');
  if (req.method === 'POST') {
    try {
      // Extract selectedPackage from the request body
      const { selectedPackage } = req.body;

      // Create a Stripe Checkout Session using the selected package's price
      const session = await stripeserver.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd', // Replace with your desired currency
              product_data: {
                name: selectedPackage.name,
              },
              unit_amount: selectedPackage.price * 100, // Convert price to cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success', // Redirect URL after successful payment
        cancel_url: 'https://yourwebsite.com/cancel', // Redirect URL after canceled payment
      });

      res.json({ sessionId: session.id });
    } catch (error) {
      console.error('Error handling form submission:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }

  return NextResponse.json(selectedPackage.Price.data)
};
