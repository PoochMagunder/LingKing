import React from "react";
import '../assets/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


    return (
        <div className="footer-wrapper" bg='dark' >
            <div className="links-container">
                <p>"Catch" us on our Socials!</p>
            <a href=""
                className="instagram link">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href=""
                className="facebook link">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            </div>
        </div>
    )
}

export default Footer;
