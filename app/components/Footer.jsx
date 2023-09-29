"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faWhatsapp, faSnapchat, faPinterestP, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <footer className="w3-center w3-black w3-padding-64">
      <button onClick={scrollToTop} className="w3-button w3-light-grey w3-round">
        <FontAwesomeIcon icon={faArrowUp} className="w3-margin-right" /> To the top
      </button>
      <div className="w3-xlarge w3-section">
      <Link href="https://wa.me/9149969998" className="w3-hover-opacity" aria-label="social">
        <FontAwesomeIcon icon={faWhatsapp} className="p-1 py-2"/>
      </Link>
      <Link href="https://www.instagram.com/sofiham_id/" className="w3-hover-opacity" aria-label="social">
        <FontAwesomeIcon icon={faInstagram} className="p-1 py-2"/>
      </Link>
      <Link href="https://www.facebook.com/hamidbashir.bashirsofi" className="w3-hover-opacity" aria-label="social">
        <FontAwesomeIcon icon={faFacebookSquare} className="p-1 py-2"/>
      </Link>
      </div>
      <p className="w3-small">Copyright © 2023 FallStreak. Made by <Link href="https://github.com/Naveed-SNR">Naveed SNR</Link></p>

    </footer>
  );
};

export default Footer;
