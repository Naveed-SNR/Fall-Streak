import Image from "next/image";

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

        <div className="w3-row-padding" style={{ marginTop: '64px' }}>
          <div className="w3-col l3 m6 mt-2">
            <img src="../../public/images/Gallery1.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A microphone"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery2.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A phone"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery3.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A drone"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery4.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="Soundbox"   />
          </div>
        </div>

        <div className="w3-row-padding w3-section">
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery5.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A tablet"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery6.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A camera"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery7.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A typewriter"   />
          </div>
          <div className="w3-col l3 m6 mt-2">
            <img src="./src/assets/images/Gallery8.webp" className="w3-round  img-fluid w3-hover-opacity" style={{ width: '100%', height: '300px' }}   alt="A tableturner"   />
          </div>
        </div>
      </div>


      {/* <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
        <span class="w3-button w3-xxlarge w3-black w3-padding-large   w3-display-topright" title="Close Modal Image">X</span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent       w3-padding-64">
          <img id="img01" class="w3-image" />
          <p id="caption" class="w3-opacity w3-large"></p>
        </div>
      </div> */}

    </div>
  );
};



