"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/logo/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTh, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Fade as Hamburger } from 'hamburger-react';

export default function Navbar() {

  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar=()=> setSidebar(!sidebar)
  return (
    <main>
      <nav className="w3-top navbar-expand-lg w3-top">
                 
        <div className="w3-bar w3-card">
        <Link href="/#home" className="w3-bar-item w3-wide">
            <Image
              className="animate"
              src={Logo}
              alt="Logo"
              width={111}
              position="fixed"
              top={0}
              left={0}
            />
          </Link>
          <div className="w3-right mt-3" id="navbarSupportedContent">
                <Link href="/#about" className="w3-bar-item w3-button me-2 d-none d-lg-flex">ABOUT</Link>

                <Link href="/gallery" className="w3-bar-item w3-button d-none d-lg-flex">
                  <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
                </Link>

                <Link href="/#packages" className="w3-bar-item w3-button d-none d-lg-flex">
                  <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
                </Link>

                <Link href="/#contact" className="w3-bar-item w3-button d-none d-lg-flex">
                  <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
                </Link>
                <div className="d-lg-none d-flex" onClick={toggleSidebar}>
                  <Hamburger direction="right" />
                </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={sidebar ? 'd-block' : 'd-none'}  >

            <div className="w3-sidebar w3-bar-block w3-animate-right w3-round">
            <Link href="/#about" className="w3-bar-item w3-button me-2">ABOUT</Link>
              
              <Link href="/gallery" className="w3-bar-item w3-button">
                <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
              </Link>
              
              <Link href="/#packages" className="w3-bar-item w3-button">
                <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
              </Link>
              
              <Link href="/#contact" className="w3-bar-item w3-button">
                <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
              </Link>

            </div>

      </div>
      </nav>
    </main>
  );
}
