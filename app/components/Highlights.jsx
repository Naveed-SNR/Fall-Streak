import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";

const imagePaths = [
  '/images/cards/Card1.webp',
  '/images/cards/Card2.webp',
  '/images/cards/Card3.webp',
  '/images/cards/Card4.webp',
  // Add more image file names as needed
];

export default function Highlights() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="team">
      <h3 className="w3-center">HIGHLIGHTS</h3>
      <p className="w3-center w3-large">Take a peek at the paradise on earth</p>
      <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: '64px' }}>
        {imagePaths.map((imagePath, index) => (
              <div className="mx-1 mt-3" style={{ width: '362px', height: '481px', position: 'relative'}} key={index}>
                <Image className="w3-round"
                  alt={`Image ${index}`}
                  src={`${imagePath}`} 
                  fill
                  objectFit="cover"
                  sizes="100vw"
                />
              </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="w3-center">
          <Link href="/gallery" className="w3-button w3-black w3-round mt-4 p4">
          <FontAwesomeIcon className="me-1" icon={faGrip} size="lg" /> View All
          </Link>
        </p>
      </div> 
    </div>
  );
}
