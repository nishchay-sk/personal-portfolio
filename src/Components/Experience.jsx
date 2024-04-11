import React from "react";
import experience from "../data/experience";


const Experience = () => {
    return (
        <div id="experience">
            <div id="heading">{"<Experience />"}</div>
            <ExperienceTiles />
            <div id="heading-closed">{"</Experience>"}</div>
        </div>
    )
}

const ExperienceTiles = () => {

    

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
            <div className="company-low-res">{exp.company}</div>
            <div className="project-name">{`<${exp.projectName} />`} <span className="role"><i>{`(${exp.role})`}</i></span></div>
            <div className="duration-low-res">{`(${exp.startDate} - ${exp.endDate})`}</div>
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