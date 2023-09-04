import { useState } from 'react';

// Modal Image Gallery
export default function Gallery() {
  // Create a state variable to manage the src of the displayed image
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalCaption, setModalCaption] = useState('');

  // Function to handle the click event
  const onClick = (element) => {
    setModalImageSrc(element.src);
    setModalCaption(element.alt);
  };

  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="gallery">
      <h3 className="w3-center">GALLERY</h3>
      <p className="w3-center w3-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, at nulla!</p>

      <div className="w3-row-padding" style={{ marginTop: '64px' }}>
        <div className="w3-col l3 m6 mt-2">
          <img
            src="./src/assets/images/Gallery1.webp"
            className="w3-round img-fluid w3-hover-opacity"
            style={{ width: '100%', height: '300px' }}
            alt="A microphone"
            onClick={() => onClick({ src: "./src/assets/images/Gallery1.webp", alt: "A microphone" })}
          />
        </div>
        {/* Repeat this block for other images */}
      </div>

      {/* Add your modal here using modalImageSrc and modalCaption */}
    </div>
  );
}