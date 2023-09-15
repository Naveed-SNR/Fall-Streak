import Image from "next/image";
const imagePaths = [
  '/images/gallery/Gallery1.webp',
  '/images/gallery/Gallery2.webp',
  '/images/gallery/Gallery3.webp',
  '/images/gallery/Gallery4.webp',
  '/images/gallery/Gallery5.webp',
  '/images/gallery/Gallery6.webp',
  '/images/gallery/Gallery7.webp',
  '/images/gallery/Gallery8.webp',
  // Add more image file names as needed
];

// // Modal Image Gallery
// export function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
//   }

export default function Gallery () {
  return (
    <div>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}   id="gallery">
        <h3 className="w3-center">GALLERY</h3>
        <p className="w3-center w3-large">Lorem ipsum dolor sit amet consectetur  adipisicing elit. Magnam, at nulla!</p>

        <div className="d-flex flex-wrap justify-content-center">
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[0]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[1]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[2]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[3]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[4]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[5]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[6]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                  <Image className="w3-round  img-fluid w3-hover-opacity"
                    alt="A phone"
                    src={imagePaths[7]}
                    fill
                    objectFit="fit"
                    sizes="100vw"     
                  />
                </div>
              </div>
          </div>
        </div>
        
        {/* <div id="modal01" className="w3-modal w3-black" onclick="this.style.display='none'">
        <span className="w3-button w3-xxlarge w3-black w3-padding-large   w3-display-topright" title="Close Modal Image">X</span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent       w3-padding-64">
          <img id="img01" className="w3-image" />
          <p id="caption" className="w3-opacity w3-large"></p>
        </div>
      </div>  */}
    </div>
      


  );
};


