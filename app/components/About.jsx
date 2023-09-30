import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faHeart, faCog, faGem } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="about">
      <h3 className="w3-center">ABOUT</h3>
      <p className="w3-center w3-large ">Why FallStreak is the ultimate choice for your next adventure</p>
      <div className="row" style={{ marginTop: '83px' }}>
        <div className="col-lg-3 col-md-6 w3-center">
          <FontAwesomeIcon icon={faDesktop} className="w3-margin-bottom w3-jumbo w3-center" />
          <div className="mt-4">
            <p className="w3-large">Discover FallStreak</p>
            <p>{`We pride ourselves on being more than just a travel platform - we're your partners in creating unforgettable memories.`}</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 w3-center">
          <FontAwesomeIcon icon={faHeart} className="w3-margin-bottom w3-jumbo" />
          <div className="mt-4">
            <p className="w3-large">Tailored Experiences</p>
            <p>We take the time to understand your preferences, interests, and dreams and craft tailored itineraries that match your unique style of travel.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 w3-center">
          <FontAwesomeIcon icon={faGem} className="w3-margin-bottom w3-jumbo" />
          <div className="mt-4">
            <p className="w3-large">Seamless Planning</p>
            <p>From booking flights and accommodations to arranging local transportation, we streamline the process and leave no detail overlooked.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 w3-center">
          <FontAwesomeIcon icon={faCog} className="w3-margin-bottom w3-jumbo" />
          <div className="mt-4">
            <p className="w3-large">Expert Guidance</p>
            <p>From choosing the perfect destination to selecting the ideal accommodations, we provide expert guidance every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
