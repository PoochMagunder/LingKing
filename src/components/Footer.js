import React from "react";
import '../assets/css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


    return (
        <div className="footer-wrapper" bg='dark' >
            <div className="links-container">
                <p>"Catch" us on our Socials!</p>
            <a href="https://www.instagram.com/lingkingfishing/"
                className="instagram link">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/LingKingFishing"
                className="facebook link">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            </div>
        </div>
    )
}

export default Footer;
