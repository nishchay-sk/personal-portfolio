import React from "react"

const Header = () => {
    return (
        <div id="header">
            <div id="left-section">
                <a href="/personal-portfolio" id="logo">{"<NS />"}</a>
            </div>
            <div id="right-section">
                <a href="#experience">{"<Experience />"}</a>
                <a href="#skills">{"<Skills />"}</a>
                <a href="#certifications">{"<Certifications />"}</a>
                <a href="#education">{"<Education />"}</a>
                <a href="#contact">{"<Contact />"}</a>
                <a href="https://drive.google.com/file/d/1UNXkgG4RrlNHRhiqKtoznxyf4EyzPmUb/view?usp=sharing" target="_blank" download={true} rel="noreferrer" >{"<Resume />"}</a>
            </div>
        </div>
    )
}

export default Header;