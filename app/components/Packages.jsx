"use client";
import Image from "next/image";
import 'bootstrap';
import { useState, useEffect } from "react";
import { colRef } from "../../firebase";
import { getDocs } from "firebase/firestore";
import stripePromise from "../../stripe.js";
import CheckoutForm from "../components/CheckoutForm";

const imagePaths = [
  '/images/packages/Packages1.webp',
  '/images/packages/Packages2.webp',
  '/images/packages/Packages3.webp',
  '/images/packages/Packages4.webp',
  '/images/packages/Packages5.webp',
  '/images/packages/Packages1.webp',
  '/images/packages/Packages2.webp',
  '/images/packages/Packages3.webp',
  // Add more image file names as needed
];

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState([]);

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const packageData = {
            id: doc.id,
            packageName: doc.data()["Package Name"],
            price: doc.data()["Price"],
            chargeBasis: doc.data()["Charge Basis"],
            locations: doc.data()["Locations"],
            duration: doc.data()["Duration"]
          };
          packages.push(packageData);
        });
        setPackages(packages.map((packageData) => packageData));
      })
      .catch(err => {
        console.error('Error getting documents', err);
      });
  }, []);

  const handleBookNowClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  // Add this useEffect to log the selected package when it changes
  useEffect(() => {
    console.log(selectedPackage);
  }, [selectedPackage]);
  
  const handleSubmit = async (pkg) => {
    const stripe = await stripePromise;
    const response = await fetch('../api/Checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: pkg.price, // You should set up your own pricing on the server-side
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
      }),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  
    if (result.error) {
      console.error(result.error);
    }
    return (
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="w3-container card-container w3-center w3-dark-grey" style={{ padding: '128px 16px' }} id="packages">
        <h3>PRICING</h3>
        <p className="w3-large">Choose a pricing plan that fits your needs.</p>

        <div className="row mx-2 justify-content-center" style={{ marginTop: '64px' }}>
          {packages.map((pkg, index) => (
            <div className="mt-4" style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>{pkg.packageName} ({pkg.duration})</li>
                <div style={{ width: '100%', height: '362px', position: 'relative' }}>
                  <Image src={imagePaths[index]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>{pkg.locations}</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; {pkg.price}</h2>
                  <span className="w3-opacity">{pkg.chargeBasis}</span>
                </li>
                <li className="w3-light-grey w3-padding-16" style={{ borderRadius: '0' }}>
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform" onClick={() => handleBookNowClick(pkg)}>Book Now</button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="modal fade" id="popupform" tabIndex="-1" aria-labelledby="popupform Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-black text-white">
              <h1 className="modal-title fs-4 mb-1" id="exampleModalLabel">Book Your Package</h1>
              <button type="button" className="w3-black w3-border-0" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div className="modal-body">
              <form id="booking-form" className="form m-4" onSubmit={handleSubmit} >
                <label className="form-label mt-2" htmlFor="package-select">Select a Package:</label>
                <select className="form-select" id="package-select" name="package" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
                  {packages.map((pkg, index) => (
                    <option key={index} value={pkg.packageName}>
                      {pkg.packageName}
                    </option>
                  ))}
                </select>
                <label className="form-label mt-2" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" required />
                <label className="form-label mt-2" htmlFor="phone">Phone Number:</label>
                <input className="form-control" type="tel" id="phone" name="phone" required />
                <label className="form-label mt-2" htmlFor="email">Email:</label>
                <input className="form-control" type="email" id="email" name="email" required />
                <div className="modal-footer justify-content-center">
                  <button className="w3-button w3-black w3-round px-4 py- mt-4" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
