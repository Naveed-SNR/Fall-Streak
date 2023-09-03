import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

// <FontAwesomeIcon icon={faCheck} className="fas fa-check" style={{ color: "red" }}
// ></FontAwesomeIcon>


// // var mySidebar = document.getElementById("mySidebar");

// function w3_open() {
//   if (mySidebar.style.display == 'block') {
//     mySidebar.style.display = 'none';
//   } else {
//     mySidebar.style.display = 'block';
//   }
// }

// // Close the sidebar with the close button
// function w3_close() {
//     mySidebar.style.display = "none";
// }

export default function Navbar() {
    return (
        <main>
        {/* Navbar (sit on top) */}
        <nav className="w3-top fw-medium">
          <div className="w3-bar w3-card" id="myNavbar">
            <Link href="/" className="w3-bar-item w3-wide">
            <Image className="animate" 
                src={Logo}
                alt="Logo"
                width={111}
                position="absolute"
                top={0}
                left={0}
                />

            </Link>
            <div className="w3-right w3-hide-small">
              <Link href="/" className="w3-bar-item w3-button me-2">ABOUT</Link>
              <Link href="/gallery" className="w3-bar-item w3-button"><i className="fa fa-photo me-2"></i>GALLERY</Link>
              <Link href="/" className="w3-bar-item w3-button"><i className="fa fa-th me-2"></i>PACKAGES</Link>
              <Link href="/" className="w3-bar-item w3-button"><i className="fa fa-envelope me-2"></i>CONTACT</Link>
            </div>
            {/* <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={w3_open}>
              <i className="fa fa-bars"></i>
            </a> */}
          </div>
        </nav>
{/* 
        Sidebar on small screens when clicking the menu icon
        <nav className="w3-sidebar w3-bar-block w3-animate-right d-md-none w3-hide-large fw-medium" style={{ display: 'none', right: 0 }} id="mySidebar">
          <Link href="javascript:void(0)" onClick={w3_close} className="w3-bar-item w3-button w3-large w3-padding-16 w3-animate-right" id="Open">Close X</Link>
          <Link href="/" onClick={w3_close} className="w3-bar-item w3-button">ABOUT</Link>
          <Link href="/gallery" onClick={w3_close} className="w3-bar-item w3-button">GALLERY</Link>
          <Link href="/" onClick={w3_close} className="w3-bar-item w3-button">PACKAGES</Link>
          <Link href="/" onClick={w3_close} className="w3-bar-item w3-button">CONTACT</Link>
        </nav> */}

        
      </main>
    )
}
