"use client"
import Image from "next/image";
import 'bootstrap'
import { useState, useEffect } from "react";
import { db, colRef } from "../../firebase";
import { collection, getDocs, getFirestore, doc, onSnapshot} from "firebase/firestore";

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

  // const [selectedPackage, setSelectedPackage] = useState(""); // Default selected package
  const [packages, setPackages] = useState([])
  
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        
        
        snapshot.docs.forEach((doc) => {
          const packageData = {
            id: doc.id,
            packageName: doc.data()["Package Name"],
            price: doc.data()["Price"],
            chargedBasis: doc.data()["Charge Basis"],
            // Add more fields as needed
          }
          packages.push(packageData);
        })
        setPackages(packages.map((packageData) => packageData));
  })
  .catch(err => {
    console.error('Error getting documents', err);
  })

  }, []);

    document.querySelectorAll('.book-now-button').forEach((button) => {
    button.addEventListener('click', () => handleBookNowClick(button));
  });
  
  // const handleBookNowClick = (button) => {

  //   // Find the parent <ul> element of the clicked button
  //   const parentUl = button.closest("ul");
  //   const packageElement = parentUl.querySelector('li:first-child');

  //   setSelectedPackage(packageElement.textContent.trim());
  // };

  return (
    <div>
        <div className="w3-container card-container w3-center w3-dark-grey" style={{ padding: '128px 16px' }}     id="packages">
          <h3>PRICING</h3>
          <p className="w3-large">Choose a pricing plan that fits your needs.</p>

          
          <div className="row mx-2 justify-content-center" style={{ marginTop: '64px' }}>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package1">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Heavenly Kashmir (4 Nights, 5 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[0]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Pahalgam | Gulmarg | Dal Lake</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 18,000</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16" style={{ borderRadius: '0' }}>
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package2">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Himalayan Getaway (6 Nights, 7 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[1]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Pahalgam | Gulmarg | Doodpathri</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 26,000</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package3">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Kashmir Family Odyssey (7 Nights, 8 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[1]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Pahalgam | Gulmarg | Sonamarg | Yusmarg</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 32,000  </h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package4">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Kashmir Heritage (5 Nights, 6 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[3]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam | Mughal Gardens</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 24,000</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package5">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Honeymoon Retreat (5 Nights, 6 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[4]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Pahalgam | Dal Lake | Mughal Gardens</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 22,000</h2>
                  <span className="w3-opacity">Per couple</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow" id="package6">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>Alpine Serenity (7 Nights, 8 Days)</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[5]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam | Dal Lake | Wular Lake</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 30,000</h2>
                  <span className="w3-opacity">Inc. Taxes</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      <div className="modal fade" id="popupform" tabIndex="-1" aria-labelledby="popupform Label" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-black text-white">
            <h1 className="modal-title fs-4 mb-1" id="exampleModalLabel">Book You Package</h1>
            <button type="button" className="w3-black w3-border-0" data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className="modal-body">
            <form id="booking-form" className="form m-4">
              <label className="form-label mt-2" htmlFor="package-select">Select a Package:</label>
              <select className="form-select" id="package-select" name="package" value="">
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
