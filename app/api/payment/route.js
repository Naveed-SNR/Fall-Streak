import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';
const stripe = process.env.STRIPE_SECRET_KEY;

export default async function POST(request) {
      // Create Checkout Sessions from body params.
      const{ price } = await request.json()
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: price,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      return NextResponse.json(session.url);
  } 
  
