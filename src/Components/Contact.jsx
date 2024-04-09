import React from "react";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg"
import Instagram from "../assets/instagram.svg"
import Gmail from "../assets/gmail.svg"

const Contact = () => {

    const contacts = [
        {
            contact: "linkedin",
            logo: LinkedIn,
            src: "https://www.linkedin.com/in/nishchaysk/"
        },
        {
            contact: "instagram",
            logo: Instagram,
            src: "https://www.instagram.com/nishchay_shetty/"
        },
        {
            contact: "gmail",
            logo: Gmail,
            src: "mailto:sk.nishchay@gmail.com"
        },

    ]
    return (
    <div id="contact">
        {/* <div id="heading">{"<Contact />"}</div> */}
        <div id="contact-list">
            {
                contacts.map((contact) => {
                    return (
                        <div className="contact-logo">
                            <a href={contact.src} target="_blank" rel="noreferrer"><img src={contact.logo} alt={contact.contact} title={contact.src} /></a>
                        </div>
                    )
                })
            }
            </div>
    </div>
    )
}

export default Contact;