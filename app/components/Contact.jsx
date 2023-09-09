import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperPlane, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact () {
  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
      <h3 className="w3-center">CONTACT</h3>
      <p className="w3-center w3-large">Let's get in touch. Send us a message:</p>
      <div style={{ marginTop: '48px' }}>
        <p><FontAwesomeIcon className="me-3" icon={faLocationDot} size="2xl" /> Srinagar, IN</p>
        <p><FontAwesomeIcon className="me-3" icon={faPhone} size="2xl" /> Phone: +00 151515</p>
        <p><FontAwesomeIcon className="me-3" icon={faEnvelope} size="2xl" /> Email: mail@mail.com</p>
        <br />
        <form action="/action_page.php" target="_blank">
          <p><input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
          <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" /></p>
          <p><input className="w3-input w3-border" type="text" placeholder="Subject" required name="Subject" /></p>
          <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
          <p>
            <button className="w3-button w3-black w3-round" type="submit">
            <FontAwesomeIcon className="me-2" icon={faPaperPlane} size="xl" /> SEND MESSAGE
            </button>
          </p>
        </form>
        {/* Image of location/map */}
        {/* <img src="https://www.w3schools.com/w3images/map.webp" className="w3-image w3-greyscale" style={{ width: '100%', marginTop: '48px' }} /> */}
      </div>
    </div>
  );
};


