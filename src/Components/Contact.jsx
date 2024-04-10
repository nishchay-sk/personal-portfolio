import React from "react";
import contacts from "../data/contacts";

const Contact = () => {

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