import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faHeart, faCog, faGem } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="about">
      <h3 className="w3-center">ABOUT</h3>
      <p className="w3-center w3-large">Here's why FallStreak is the ultimate choice for your next adventure</p>
      <div className="w3-row-padding w3-center" style={{ marginTop: '83px' }}>
        <div className="w3-quarter">
          <FontAwesomeIcon icon={faDesktop} className="w3-margin-bottom w3-jumbo w3-center" />
          <p className="w3-large">Discover FallStreak</p>
          <p>Welcome to FallStreak, your gateway to extraordinary travel experiences. We pride ourselves on being more than just a travel platform - we're your partners in creating unforgettable memories.</p>
        </div>
        <div className="w3-quarter">
          <FontAwesomeIcon icon={faHeart} className="w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Tailored Experiences</p>
          <p>Our travel experts take the time to understand your preferences, interests, and dreams. With this insight, we craft tailored itineraries that match your unique style of travel.</p>
        </div>
        <div className="w3-quarter">
          <FontAwesomeIcon icon={faGem} className="w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Seamless Planning</p>
          <p>We've streamlined the process to ensure your journey is stress-free from start to finish. From booking flights and accommodations to arranging local transportation, our comprehensive services leave no detail overlooked.</p>
        </div>
        <div className="w3-quarter">
          <FontAwesomeIcon icon={faCog} className="w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Expert Guidance</p>
          <p>Our team is your compass to navigating the world. From choosing the perfect destination to selecting the ideal accommodations, we provide expert guidance every step of the way.</p>
        </div>
      </div>
    </div>
  );
}
