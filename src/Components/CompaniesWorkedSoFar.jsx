import React from "react";
import IBM from "../assets/IBM.svg"

const CompaniesWorkedSoFar = () => {

    const companies = [
        {
            company: "IBM (CIO)",
            logo: IBM,
        }
    ]

    return (
        <div id="companies-worked-so-far">
            <div id="heading">{"<Companies Worked For />"}</div>
            <div id="companies">
            {
                companies.map((company) => {
                    return (
                        <div className="company-logo">
                            {
                                <img src={company.logo} alt={company.company} />
                            }
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default CompaniesWorkedSoFar;