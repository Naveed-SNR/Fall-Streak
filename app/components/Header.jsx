import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import background from "../../public/images/background/background.webp";
import Image from "next/image";

export default function landing () {

    return (
        <header id="home">
          <div style={{position: 'relative', width: '100%', height: '100vh'}}>            
            <Image
              alt="background"
              src={background}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
            <div className="covertext w3-display-left w3-text-white" style={{ padding: '48px' }}>
                <span className="w3-jumbo w3-hide-small fw-medium">Journey Through Timeless Beauty</span><br />
                <span className="w3-xxlarge w3-hide-large w3-hide-medium fw-semibold    fs-xl-1">Journey Through Timeless Beauty</span><br />
                <span className="w3-xxlarge">Craft Unforgettable Memories In Kashmir</span>
                <p><Link href="/#packages" className="w3-button w3-white w3-round w3-large      w3-margin-top w3-hover-opacity-off">Book Your Trip</Link></p>
            </div>
            <div className="w3-display-bottomleft ms-4 mb-4 me-2 d-flex  p-4 justify-content-between w3-text-white w3-large">
              <Link href="https://wa.me/9149969998" className="w3-hover-opacity" aria-label="social">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="me-2 p-1 py-2"/>
              </Link>
              <Link href="https://www.instagram.com/sofiham_id/" className="w3-hover-opacity" aria-label="social">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="me-2 p-1 py-2"/>
              </Link>
              <Link href="https://www.facebook.com/hamidbashir.bashirsofi" className="w3-hover-opacity" aria-label="social">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="me-2 p-1 py-2"/>
              </Link>
            </div>
      </header>
    )
}