import Image from "next/image";
const imagePaths = [
  'images/cards/Card1.webp',
  'images/cards/Card2.webp',
  'images/cards/Card3.webp',
  'images/cards/Card4.webp',
  // Add more image file names as needed
];

export default function Highlights() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="team">
      <h3 className="w3-center">HIGHLIGHTS</h3>
      <p className="w3-center w3-large">Take a peek at the paradise on earth</p>
      <div className="w3-row-padding" style={{ marginTop: '64px' }}>
        {imagePaths.map((imagePath, index) => (
          <div className="w3-col l3 m6 w3-margin-bottom" key={index}>
            <div className="w3-card">
              <img
                src={`${imagePath}`} // Adjust the path to your images
                className="img-fluid"
                alt={`Image ${index}`}
                style={{ width: '100%', height: '481px' }}
              />
            </div>
          </div>
        ))}
        <p className="w3-center">
          <a href="#work" className="w3-button w3-black w3-round mt-4 p4">
            <i className="fa fa-th"></i> View All
          </a>
        </p>
      </div>
    </div>
  );
}
