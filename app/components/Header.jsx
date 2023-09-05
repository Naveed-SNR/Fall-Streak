import Image from "next/image"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faSnapchat, faPinterestP, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import background from "../../public/images/background/background.webp"

const headerStyle = {
  backgroundImage: `url(${background.src})`, // Use the imported background image
  backgroundSize: 'cover', // Adjust the size as needed
  backgroundRepeat: 'no-repeat', // Prevent image repetition
  backgroundPosition: 'center', // Center the image
  minHeight: '100vh', // Set a minimum height to cover the entire viewport
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Header () {
  return (
    <header className="cover w3-display-container w3-grayscale-min" id="home" style={headerStyle} >
      <div className="covertext w3-display-left w3-text-white" style={{ padding: '48px' }}>
        <span className="w3-jumbo w3-hide-small fw-medium">Journey Through Timeless Beauty</span><br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium fw-semibold fs-xl-1">Journey Through Timeless Beauty</span><br />
        <span className="w3-xxlarge">Craft Unforgettable Memories In Kashmir</span>
        <p><Link href="/#packages" className="w3-button w3-white w3-round w3-large w3-margin-top w3-hover-opacity-off">Book Your Trip</Link></p>
      </div>
      <div className="w3-display-bottomleft ms-3 mb-4 me-2 d-flex w3-text-white w3-large" style={{ width: '11', padding: '48px', justifyContent: 'space-between' }}>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faFacebookSquare} className="p-1 py-2"/>
        </a>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faInstagram} className="p-1 py-2"/>
        </a>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faSnapchat} className="p-1 py-2"/>
        </a>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faPinterestP} className="p-1 py-2"/>
        </a>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faTwitter} className="p-1 py-2"/>
        </a>
        <a href="#" className="w3-hover-opacity">
          <FontAwesomeIcon icon={faLinkedin} className="p-1 py-2"/>
        </a>
      </div>
    </header>
  );
};


