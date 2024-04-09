import React from "react"

const Skills = () => {

    const skills = [
        {
            skill: "GO",
        },
        {
            skill: "Java",
        },
        {
            skill: "JavaScript",
        },
        {
            skill: "ReactJs",
        },
        {
            skill: "HTML",
        },
        {
            skill: "CSS",
        },
        {
            skill: "Docker",
        },
        {
            skill: "Kubernetes",
        },
        {
            skill: "Microservices",
        },
        {
            skill: "MySQL",
        },
        {
            skill: "MongoDB",
        },
        {
            skill: "Data Structures"
        },
        {
            skill: "Algorithms"
        },
        {
            skill: "CI/CD"
        },
        
    ]
    return (
        <div id="skills">
            <div id="heading">{"<Skills>"}</div>
            <div id="skills-list">
            {
                skills.map((skill) => {
                    return (
                        <div className="skill-logo">
                            {skill.skill}
                        </div>
                    )
                })
            }
            </div>
            <div id="heading-closed">{"</Skills>"}</div>
        </div>
    )
}

export default Skills;