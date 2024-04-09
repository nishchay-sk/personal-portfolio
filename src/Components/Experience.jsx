import React from "react";
import IBM from "../assets/IBM.svg"

const Experience = () => {
    return (
        <div id="experience">
            <div id="heading">{"<Experience>"}</div>
            <ExperienceTiles />
            <div id="heading-closed">{"</Experience>"}</div>
        </div>
    )
}

const ExperienceTiles = () => {

    const experience = [
        {
            projectList: [
                {
                    company: "IBM - CIO",
                    startDate: "Nov 2022",
                    endDate: "Present",
                    role: "Full Stack Developer",
                    projectName: "Common Costing Tool",
                    listData: [
                                "Developed web application which is responsible for providing pricing for hardware and software services provided by IBM depending on different regions.",
                                "Worked as Frontend developer using ReactJs.",
                                "Created functional components and used advanced hooks through out the application.",
                                "Migrated Data grid from carbon to Aggrid",
                                "Took leadership for eslint and unit testing coverage for UI"
                            ]
                },
                {
                    company: "IBM - CIO",
                    startDate: "Sep 2021",
                    endDate: "Nov 2022",
                    role: "Full Stack Developer",
                    projectName: "Social Contract Database",
                    listData: [
                        "Developed a website which is responsible for maintaining contracts details, opportunity details maintaining various users with different roles",
                        "Worked using latest technologies - ReactJs, Golang, MongoDB, Docker",
                        "Used Travis CI for Continuous Integration, integrated slack notifications for getting build details and take actions.",
                    ]
                },
                {
                    company: "IBM - CIO",
                    startDate: "Sep 2020",
                    endDate: "Sep 2021",
                    role: "Full Stack Developer",
                    projectName: "SPEED",
                    listData: [
                        "Developed a website which is responsible for maintaining prices of the products offered by IBM internally between its various business units. Maintaining various users with different roles.",
                        "Developed the system in Micro-service architecture configuring Spring Cloud Gateway as gateway service, following the steps of software development lifecycle (LLD, Coding, Unit testing,Linting, Code Coverage, Peer review, Manual Testing and CI/CD)",
                        "Developed UI screens React using Redux for state management and created various APIs using Golang.",
                        "Deployed all the services as Docker container on Cirrus(IBM-Openshift) Cloud with Cloud object Storage. Configured Travis for CI with Github and slack for automatic notification when a PR is raised in Github."
                    ]
                },
                {
                    company: "IBM - CIO",
                    startDate: "Sep 2021",
                    endDate: "Dec 2021",
                    role: "Full Stack Developer",
                    projectName: "NIFI",
                    listData: [
                        "Deployed Apache NIFI and Apache Nifi Registry on Openshift virtual machine as a POC.",
                    ]
                },
                {
                    company: "IBM - CIO",
                    startDate: "Jan 2020",
                    endDate: "Sep 2020",
                    role: "Software Development Intern",
                    projectName: "SPEED",
                    listData: [
                        "Developed an application in React and Golang as a Proof of Concept. Used Aggrid and followed Agile software development.",
                    ]
                }
            ],
            companyLogo: IBM,
        },

        
    ]

    return (
        <div id="">
            {
                experience.map((exp) => {
                    return (
                        <div>
                            <div className="company-logo-in-experience-container"><img className="company-logo-in-experience" src={exp.companyLogo} alt=""/></div>
                            <div id="experience-tiles">
                            {
                                exp.projectList.map((project, pos) => {
                                    if (pos % 2 === 1) {
                                        return (
                                        <>
                                            <Duration exp={project} left />
                                            <Path />
                                            <Content exp={project} />
                                        </>
                                        )
                                    }
                                    return (
                                        <>
                                            <Content exp={project} />
                                            <Path />
                                            <Duration exp={project} />
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

const Duration = ({ exp, left }) => {
    return (
    <div className={`duration ${left && "duration-left"}`}>
        <span className="company">{`<${exp.company} />`}</span>
        <span className="duration-dates">{`(${exp.startDate} - ${exp.endDate})`}</span>
    </div>
)
}

const Content = ({ exp }) => {
    return (
        <div className="experience-content">
            <div className="project-name">{`<${exp.projectName} />`} <span className="role"><i>{`(${exp.role})`}</i></span></div>
            <hr />
            <ul>
                {
                exp.listData.map((data) => {
                    return (
                        <li>{data}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

const Path = () => {
    return (
        <div className="path">
            <div className="circle">
                <div className="inner-circle"></div>
            </div>
        </div>
    )
}

export default Experience;