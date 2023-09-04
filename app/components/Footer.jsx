import React from 'react';

const Footer = () => {
  return (
    <footer className="w3-center w3-black w3-padding-64">
      <a href="#home" className="w3-button w3-light-grey w3-round"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
      <div className="w3-xlarge w3-section">
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </div>
      <p className="w3-small">Copyright © 2023 FallStreak. Made by Naveed SNR</p>
      <a className="w3-button w3-round-xxlarge w3-small w3-light-grey w3-margin-bottom" href="https://www.w3schools.com/spaces" target="_blank">Start now</a>
    </footer>
  );
};

export default Footer;
