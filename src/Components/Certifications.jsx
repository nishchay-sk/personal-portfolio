import React from "react";
import certifications from "../data/certifications.js"
import LinkIcon from "../assets/redirect.svg"

const Certifications = () => {
    return (
        <div id="certifications">
            <div id="heading">{"<Certifications />"}</div>
                <div id="certificate-list">{
                    certifications.map((certificate) => {
                        return (
                            <div className="certification">
                                <div className="link"><a href={certificate.url} target="_blank" rel="noreferrer"><img src={LinkIcon} alt={certificate.title} /></a></div>
                                <div className="title">{certificate.title}</div>
                                <div className="issued-by">{`<${certificate.issuedBy} />`}</div>
                            </div>
                        )
                    })
                }
                </div>
            <div id="heading-closed">{"</Certifications>"}</div>
        </div>
    )
}

export default Certifications;