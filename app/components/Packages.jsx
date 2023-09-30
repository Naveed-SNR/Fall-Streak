"use client";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap';
import { useState, useEffect } from "react";
import { colRef } from "../../firebase";
import { getDocs } from "firebase/firestore";

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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [packageName, setPackageName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const packageDataArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          packageName: doc.data()["Package Name"],
          duration: doc.data()["Duration"],
          locations: doc.data()["Locations"],
          price: doc.data()["Price"],
          chargeBasis: doc.data()["Charge Basis"],
          link: doc.data()["Link"]
        }));
        setPackages(packageDataArray);
      })
      .catch(err => {
        console.error('Error getting documents', err);
      });
  }, []);

  const handleBookNowClick = (pkg) => {
    setSelectedPackage(pkg);
    setPackageName(pkg.packageName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your backend API
      setIsLoading(true);
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          packageName,
          name,
          phone,
          emailID,
        }),
      });

      setIsLoading(false);
      window.location.href = selectedPackage.link;
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="w3-container card-container w3-center w3-dark-grey" style={{ padding: '128px 16px' }} id="packages">
        <h3>PRICING</h3>
        <p className="w3-large">Choose a pricing plan that fits your needs.</p>
        <div className="d-flex flex-wrap gap-4 mx-2 justify-content-center" style={{ marginTop: '64px' }}>
          {packages.map((pkg, index) => (
            <div className="flex flex-shrink mt-4 w3-hover-shadow" style={{ width: '452px' }} key={pkg.id}>
              <div className="w3-black w3-large p-4 rounded-top">{pkg.packageName} ({pkg.duration})</div>
              <div style={{ width: '100%', height: '362px', position: 'relative' }}>
                <Image src={imagePaths[index]} alt="Package Image" fill objectFit="cover" sizes="100vw" />
              </div>
              <div className="w3-white p-4 border-bottom ">
                <span>{pkg.locations}</span>
              </div>
              <div className="w3-white p-4">
                <h2 className="w3-wide">&#8377; {pkg.price}</h2>
                <span className="w3-opacity">{pkg.chargeBasis}</span>
              </div>
              <div className="w3-light-grey w3-padding-16 rounded-bottom" style={{ borderRadius: '0' }}>
                <button className="w3-button w3-black w3-padding-large w3-round book-now-button" data-bs-toggle="modal" data-bs-target="#popupform" onClick={() => handleBookNowClick(pkg)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal fade" id="popupform" tabIndex="-1" aria-labelledby="popupform Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-black text-white">
              <h1 className="modal-title fs-4 mb-1" id="exampleModalLabel">Book Your Package</h1>
              <button type="button" className="w3-black w3-border-0" data-bs-target="#popupform" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div className="modal-body mx-4">
              <form id="booking-form" className="form m-4" onSubmit={handleSubmit}>
                <label className="form-label mt-2" htmlFor="package-select">Select a Package:</label>
                <select className="form-select" id="package-select" name="package" value={selectedPackage ? selectedPackage.packageName : ''} onChange={(e) => setSelectedPackage(packages.find(pkg => pkg.packageName === e.target.value))}>
                  {packages.map((pkg, index) => (
                    <option key={index} value={pkg.packageName}>
                      {pkg.packageName}
                    </option>
                  ))}
                </select>
                <label className="form-label mt-2" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                <label className="form-label mt-2" htmlFor="phone">Phone Number:</label>
                <input className="form-control" type="tel" id="phone" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
                <label className="form-label mt-2" htmlFor="email">Email:</label>
                <input className="form-control" type="email" id="email" name="email" value={emailID} onChange={(e) => { setEmailID(e.target.value) }} required />
                <div className="d-grid justify-content-center mt-4 border-0">
                  <button className="btn btn-block w3-black" style={{ height: "40px", minHeight: "40px" }} type="submit">
                    {isLoading ? (
                      <div className="spinner-border spinner-border-sm text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : `Proceed to checkout`
                    }
                  </button>
                  <p className="fw-light mt-4" style={{ fontSize: "11px" }}>For UPI payments, custom packages, etc. Contact us on <Link href="https://wa.me/9149969998" className="w3-hover-opacity" aria-label="social">WhatsApp
                  </Link> or use the <Link href="/#contact" data-bs-target="popupform" data-bs-dismiss="modal" className="w3-hover-opacity" aria-label="social">Contact Form.
                  </Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
