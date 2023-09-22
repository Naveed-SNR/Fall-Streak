"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import Logo from '../../public/images/logo/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTh, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Fade as Hamburger } from 'hamburger-react';


export default function Navbar() {

  const [sidebar, setSidebar] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const [activeLink, setActiveLink] = useState('/')
  const currentPath = usePathname()
  

  const toggleMenu=()=> {
    setOpen(!isOpen)
    setSidebar(!sidebar)

  }

  const handleClick = () => {

    setActiveLink(currentPath + window.location.hash)
    console.log(activeLink)
    console.log(currentPath)
   
  }
  return (
    
    <>  
      <nav className="w3-top w3-card">
                 
        <div className="w3-bar">
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
          <div className="w3-right" id="navlinks">
                <Link href="/#about" onClick={handleClick} className={`w3-bar-item w3-button w3-round me-2 d-none d-lg-flex mt-3 ${activeLink === '/#about' ? 'active-nav' : ''}`}>ABOUT</Link>

                <Link href="/gallery" onClick={handleClick} className={`w3-bar-item w3-button w3-round me-2 d-none d-lg-flex mt-3 ${currentPath === '/gallery' ? 'active-nav' : ''}`}>
                  <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2 mt-1" /> GALLERY
                </Link>

                <Link href="/#packages" onClick={handleClick} className={`w3-bar-item w3-button w3-round me-2 d-none d-lg-flex mt-3 ${activeLink === '/#packages' ? 'active-nav' : ''}`}>
                  <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2 mt-1" /> PACKAGES
                </Link>

                <Link href="/#contact" onClick={handleClick} className={`w3-bar-item w3-button w3-round me-2 d-none d-lg-flex mt-3 ${activeLink === '/#contact' ? 'active-nav' : ''}`}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2 mt-1" /> CONTACT
                </Link>
                <div className="d-lg-none d-block mt-2" onClick={toggleMenu}>
                  <Hamburger rounded size={21} direction="right" label="Toggle Sidebar"  toggled={isOpen}/>
                </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={sidebar ? 'd-block' : 'd-none'}  >
            <div className="w3-sidebar w3-bar-block w3-animate-right w3-round w3-card" onClick={toggleMenu}>
            <Link href="/#about" className="w3-bar-item w3-button me-2">ABOUT</Link>
              
              <Link href="/gallery" className="w3-bar-item w3-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
              </Link>
              
              <Link href="/#packages" className="w3-bar-item w3-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
              </Link>
              
              <Link href="/#contact" className="w3-bar-item w3-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
              </Link>
            </div>
      </div>
      </nav>
    </>
  );
}
