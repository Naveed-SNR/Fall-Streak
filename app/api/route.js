const express = require('express');
const bodyParser = require('body-parser');
const { Stripe } = require('stripe');

const app = express();
const port = 3000; // Replace with your desired port


const stripe = new Stripe(STRIPE_SECRET_KEY);

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { name, phone, email, price } = req.body;

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd', // Change to your desired currency
            product_data: {
              name: package, // The name of the selected package
            },
            unit_amount: price * 100, // Convert price to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://yourwebsite.com/success', // Redirect URL after successful payment
      cancel_url: 'https://yourwebsite.com/cancel', // Redirect URL if payment is canceled
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'An error occurred while creating the Stripe session.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
