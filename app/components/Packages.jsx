"use client"
import Image from "next/image";
import 'bootstrap'
import { useState, useEffect } from "react";

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

  const [packageNames, setPackageNames] = useState([]); // State for package names
  const [selectedPackage, setSelectedPackage] = useState(""); // Default selected package


  // //Use this to load pacakages statically; array needs to be manualyy updated in case of changes [Comment out the hook for package names if you want to use this]
  // const packageNames = [
  //   "4 Nights 5 Days with Gulmarg Night Stay",
  //   "4 Nights 5 Days Group Package From Srinagar",
  //   "6 Nights 7 Days Honeymoon Package",
  //   "4 Nights 5 Days with Gulmarg Night Stay",
  //   "4 Nights 5 Days Group Package From Srinagar",
  //   "6 Nights 7 Days Honeymoon Package",
  //   // Add more package names as needed
  // ];

  // Extract package names from the first li element of each ul. Only edit html to update packages, no need to update anything here
  useEffect(() => {
    const names = [];
    const ulElements = document.querySelectorAll(".w3-ul"); // Assuming all ul elements have this class

    ulElements.forEach((ul) => {
      const liElement = ul.querySelector("li");
      if (liElement) {
        const packageName = liElement.textContent.trim();
        names.push(packageName);
      }
    });

    setPackageNames(names);
  }, []);

    document.querySelectorAll('.book-now-button').forEach((button) => {
    button.addEventListener('click', () => handleBookNowClick(button));
  });
  
  const handleBookNowClick = (button) => {

    // Find the parent <ul> element of the clicked button
    const parentUl = button.closest("ul");
    const packageElement = parentUl.querySelector('li:first-child');

    setSelectedPackage(packageElement.textContent.trim());
  };

  return (
    <div>
        <div className="w3-container card-container w3-center w3-dark-grey" style={{ padding: '128px 16px' }}     id="packages">
          <h3>PRICING</h3>
          <p className="w3-large">Choose a pricing plan that fits your needs.</p>
          <div className="row mx-2 justify-content-center" style={{ marginTop: '64px' }}>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days with Gulmarg     Night Stay</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[0]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 15,750</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16" style={{ borderRadius: '0' }}>
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days Group Package From Srinagar</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[1]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Sonamarg</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 9999</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4" style={{ width: '481px' }}>
              <ul className="w3-ul w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>6 Nights 7 Days Honeymoon    Package</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[2]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam | Doodpathri</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 39,500</h2>
                  <span className="w3-opacity">Inc. Taxes</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days with Gulmarg     Night Stay</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[3]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 15,750</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days Group Package From Srinagar</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[4]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Sonamarg</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 9999</h2>
                  <span className="w3-opacity">Per person</span>
                </li>
                <li className="w3-light-grey w3-padding-16">
                  <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform">Book Now</button>
                </li>
              </ul>
            </div>
            <div className="mt-4 " style={{ width: '481px' }}>
              <ul className="w3-ul w3-round w3-white w3-hover-shadow">
                <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>6 Nights 7 Days Honeymoon    Package</li>
                <div style={{ width: '100%', height: '362px', position: 'relative'}}>
                  <Image src={imagePaths[5]} alt="" className="img-fluid overflow-hidden aspect-ratio" fill objectFit="fit"     sizes="100vw" />
                </div>
                <li className="w3-padding-16">
                  <span>Srinagar | Gulmarg | Pahalgam | Doodpathri</span>
                </li>
                <li className="w3-padding-16">
                  <h2 className="w3-wide">&#8377; 39,500</h2>
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
              <select className="form-select" id="package-select" name="package" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
                {packageNames.map((packageName, index) => (
                  <option key={index} value={packageName}>
                    {packageName}
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
