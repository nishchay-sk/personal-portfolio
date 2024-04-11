import React from "react"
import Heart from "../assets/heart.svg";

const Footer = () => {
    return (
        <div id="footer">
            <p id="text">Developed with{<img src={Heart} alt="Love" />}by<strong>{`${'<Nishchay SK />'}`}</strong></p>
        </div>
    )
}

export default Footer;