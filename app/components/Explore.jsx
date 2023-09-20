import Image from 'next/image';
import exp from '../../public/images/explore/Explore3.webp'
export default function Explore () {
  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
      <div className=" row">
      <div className="col-sm-12 col-lg-6">
          <div className="mt-4">
            <Image className="w3-image w3-round d-md-inline img-fluid" 
            src={exp} 
            alt="Buildings"
            width={740}
         
            minheight={263}
            />
          </div>
          {/* <img className="w3-image w3-round d-md-inline" src="./Assests/Explore2.webp" alt="Buildings" style={{ minHeight: '263px', width: '740px', maxWidth: '100%' }} /> */}
        </div>
        <div className=" col-sm-12 col-lg-6">
          <h2 className="fw-medium">Explore the Enchanted Paradise</h2>
          <p className="w3-justify me-4 mt-4 lead lead-lg fs-4">Discover the enchanting beauty of Kashmir, a paradise nestled in the northern part of the Indian subcontinent. With its pristine valleys, snow-capped peaks, and serene lakes, Kashmir offers a captivating experience. Immerse yourself in its rich culture, explore historic landmarks, and indulge in thrilling adventures amidst the stunning Himalayas. Kashmir awaits, beckoning you to experience its timeless allure. Awaken your senses to the symphony of nature's wonders and immerse yourself in the tranquility that only Kashmir can offer.</p>
        </div>

      </div>
    </div>
  );
};

