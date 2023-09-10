"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/logo/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTh, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Fade as Hamburger } from 'hamburger-react';

export default function Navbar() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Hamburger direction="right" />
          </button>
        <div className="container-fluid">
          <div className="collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/#about" className="w3-bar-item w3-button me-2">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className="w3-bar-item w3-button">
                  <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#packages" className="w3-bar-item w3-button">
                  <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#contact" className="w3-bar-item w3-button">
                  <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
