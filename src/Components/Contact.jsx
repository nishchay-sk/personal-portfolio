import React from "react";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg"
import Instagram from "../assets/instagram.svg"
import Gmail from "../assets/gmail.svg"
import Leetcode from "../assets/leetcode.svg"

const Contact = () => {

    const contacts = [
        {
            contact: "linkedin",
            logo: LinkedIn,
            src: "https://www.linkedin.com/in/nishchaysk",
            text: "nishchaysk"
        },
        {
            contact: "instagram",
            logo: Instagram,
            src: "https://www.instagram.com/nishchay_shetty",
            text: "nishchay_shetty"
            
        },
        {
            contact: "gmail",
            logo: Gmail,
            src: "mailto:sk.nishchay@gmail.com",
            text: "sk.nishchay@gmail.com"
        },
        {
            contact: "Leetcode",
            logo: Leetcode,
            src: "https://leetcode.com/nishchaysk",
            text: "nishchaysk"
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
                            <a href={contact.src} target="_blank" rel="noreferrer">
                                <img src={contact.logo} alt={contact.contact} title={contact.src} />
                                <div>{contact.text}</div>
                            </a>
                        </div>
                    )
                })
            }
            </div>
    </div>
    )
}

export default Contact;