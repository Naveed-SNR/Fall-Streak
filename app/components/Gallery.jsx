import Image from "next/image";
import images from "../../images";
import Link from 'next/link'

export default function Gallery() {
  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="gallery">
        <h3 className="w3-center">GALLERY</h3>
        <p className="w3-center w3-large">Soulful Snapshots: Capturing Kashmir's Essence</p>

        <div className="d-flex flex-wrap justify-content-center">
          {images.map((image, id) => (
            <div className="mt-2 mx-2" >
              <Link key={id} href={`/gallery/${id}`}>
                <div style={{ width: '50vh', height: '300px', position: 'relative' }}>
                  <Image
                    className="w3-round img-fluid"
                    alt="A phone"
                    src={image.imagePath}
                    fill
                    quality={74}
                    sizes="100vw"
                    />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


        




