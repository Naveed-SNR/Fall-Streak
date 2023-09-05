import Image from "next/image";

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
  return (
    <div className="w3-container card-container w3-center w3-dark-grey" style={{ padding: '128px 16px' }} id="packages">
      <h3>PRICING</h3>
      <p className="w3-large">Choose a pricing plan that fits your needs.</p>
      <div className="row mx-2" style={{ marginTop: '64px' }}>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days with Gulmarg Night Stay</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[0]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Pahalgam</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 15,750</h2>
              <span className="w3-opacity">Per person</span>
            </li>
            <li className="w3-light-grey w3-padding-16" style={{ borderRadius: '0' }}>
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days Group Package From Srinagar</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[1]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Sonamarg</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 9999</h2>
              <span className="w3-opacity">Per person</span>
            </li>
            <li className="w3-light-grey w3-padding-16">
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>6 Nights 7 Days Honeymoon Package</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[2]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Pahalgam | Doodpathri</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 39,500</h2>
              <span className="w3-opacity">Inc. Taxes</span>
            </li>
            <li className="w3-light-grey w3-padding-16">
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days with Gulmarg Night Stay</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[3]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Pahalgam</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 15,750</h2>
              <span className="w3-opacity">Per person</span>
            </li>
            <li className="w3-light-grey w3-padding-16">
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>4 Nights 5 Days Group Package From Srinagar</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[4]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Sonamarg</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 9999</h2>
              <span className="w3-opacity">Per person</span>
            </li>
            <li className="w3-light-grey w3-padding-16">
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 mt-4">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-large w3-padding-24" style={{ border: 'none' }}>6 Nights 7 Days Honeymoon Package</li>
            <div style={{ width: '100%', height: '362px', position: 'relative'}}>
              <Image src={imagePaths[5]} alt="" className="img-fluid aspect-ratio" fill objectFit="fit" sizes="100vw" />
            </div>
            <li className="w3-padding-16">
              <span>Srinagar | Gulmarg | Pahalgam | Doodpathri</span>
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">&#8377; 39,500</h2>
              <span className="w3-opacity">Inc. Taxes</span>
            </li>
            <li className="w3-light-grey w3-padding-16">
              <button className="w3-button w3-black w3-padding-large w3-round">Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
