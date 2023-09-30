"use client"
import Image from "next/image";
import { useState } from "react";
import images from "../../images";
import 'bootstrap'

// const images = [
//   {
//     id: 0,
//     imagePath: '/images/gallery/Gallery1.webp',
//   },
//   {
//     id: 1,
//     imagePath: '/images/gallery/Gallery2.webp',
//   },
//   {
//     id: 2,
//     imagePath: '/images/gallery/Gallery3.webp',
//   },
//   {
//     id: 3,
//     imagePath: '/images/gallery/Gallery4.webp',
//   },
//   {
//     id: 4,
//     imagePath: '/images/gallery/Gallery5.webp',
//   },
//   {
//     id: 5,
//     imagePath: '/images/gallery/Gallery6.webp',
//   },
//   {
//     id: 6,
//     imagePath: '/images/gallery/Gallery7.webp',
//   },
//   {
//     id: 7,
//     imagePath: '/images/gallery/Gallery8.webp',
//   }
//   // Add more image file names as needed
// ];

export default function Gallery() {
  
  const [fullImagePath, setFullImagePath] = useState('');
  
  const handleClick = (image) => {
    setFullImagePath(image.imagePath);
  
  }
  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="gallery">
        <h3 className="w3-center">GALLERY</h3>
        <p className="w3-center w3-large">{`Soulful Snapshots: Capturing Kashmir's Essence`}</p>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {images.map((image) => (
                <div className="d-flex" key={image.id} style={{minWidth: '380px', width: '380px', height: '300px', position: 'relative'}} data-bs-toggle="modal" data-bs-target="#imageModal"
                    onClick={()=>handleClick(image)}>
                  <Image
                    className="w3-round"
                    alt="A phone"
                    src={image.imagePath}
                    fill
                    quality={74}
                    sizes="100vw"
                    />
                </div>
            
          ))}
        </div>
      </div>
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModal Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header w3-black w3-border-0">
              <h4 className="modal-title fs" id="imageModalLabel">Image</h4>
              <button type="button" className="w3-black w3-border-0" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div className="modal-body">
              <div style={{minWidth: '380px', width: '50vh', minHeight: '300px'}}>
                <Image
                  alt="A phone"
                  src={fullImagePath}
                  fill
                  quality={100}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


        




