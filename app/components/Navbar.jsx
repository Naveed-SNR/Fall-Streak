import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTh, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons"; 


export default function Navbar() {
    return (
        <main>
            {/* Navbar (sit on top) */}
            <nav className="w3-top fw-medium">
                <div className="w3-bar w3-card" id="myNavbar" >
                    <Link href="/#home" className="w3-bar-item w3-wide">
                        <Image className="animate"
                            src={Logo}
                            alt="Logo"
                            width={111}
                            position="fixed"
                            top={0}
                            left={0}
                        />
                    </Link>
                    
                    <div className="w3-right p-2 mt-1">

                        <Link href="/#about" className="w3-bar-item w3-button me-2 d-none d-lg-block">ABOUT</Link>
                        
                        <Link href="/gallery" className="w3-bar-item w3-button d-none d-lg-block">
                            <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
                        </Link> 
                        
                        <Link href="/#packages" className="w3-bar-item w3-button d-none d-lg-block">
                            <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
                        </Link>
                        <Link href="/#contact" className="w3-bar-item w3-button d-none d-lg-block">
                            <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
                        </Link>
                        
                        <button class="btn d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <FontAwesomeIcon icon={faBars} size="xl" style={{ display: 'inline', right: '0px' }} className="me-2" /> 
                    </button>
                    </div>



                </div>



      
            </nav>
            
            <div className="d-lg-none">
                
                <button>off</button>
                <div class="w3-round-medium offcanvas offcanvas-end bg-transparent" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body fw-medium">
                  <div className="w3-bar-block mt-1">
                        <Link href="/#about" className="w3-bar-item w3-button me-2" >ABOUT</Link>
                        
                        <Link href="/gallery" className="w3-bar-item w3-button" >
                            <FontAwesomeIcon icon={faImage} style={{ fontSize: '1rem' }} className="me-2" /> GALLERY
                        </Link> 
                        
                        <Link href="/#packages" className="w3-bar-item w3-button" >
                            <FontAwesomeIcon icon={faTh} style={{ fontSize: '1rem' }} className="me-2" /> PACKAGES
                        </Link>
                        <Link href="/#contact" className="w3-bar-item w3-button" >
                            <FontAwesomeIcon icon={faEnvelope} style={{ display: 'inline' }} className="me-2" /> CONTACT
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
        </main>
    )
}
