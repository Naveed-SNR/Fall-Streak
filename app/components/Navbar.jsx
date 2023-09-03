import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faTh, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the specific icons you need

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
                            position="fixed"
                            top={0}
                            left={0}
                        />
                    </Link>
                    <div className="w3-right w3-hide-small p-2 mt-1">
                        <Link href="/" className="w3-bar-item w3-button me-2">ABOUT</Link>
                        
                        <Link href="/gallery" className="w3-bar-item w3-button">
                            <FontAwesomeIcon icon={faImages} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
                        </Link> 
                        
                        <Link href="/" className="w3-bar-item w3-button">
                            <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
                        </Link>
                        <Link href="/" className="w3-bar-item w3-button">
                            <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
                        </Link>
                    </div>
                </div>
            </nav>
        </main>
    )
}
