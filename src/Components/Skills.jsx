import React from "react"
import Go from "../assets/go.svg"
import Java from "../assets/java.svg"
import JS from "../assets/js.svg"
import ReactJS from "../assets/reactjs.svg"
import HTML from "../assets/html.svg"
import CSS from "../assets/css.svg"
import Docker from "../assets/docker.svg"
import Kubernetes from "../assets/kubernetes.svg"
import MySQL from "../assets/mysql.svg"
import MongoDB from "../assets/mongodb.svg"

const Skills = () => {

    const skills = [
        {
            skill: "GO",
            logo: Go,
        },
        {
            skill: "Java",
            logo: Java,
        },
        {
            skill: "JavaScript",
            logo: JS,
        },
        {
            skill: "ReactJs",
            logo: ReactJS,
        },
        {
            skill: "HTML",
            logo: HTML,
        },
        {
            skill: "CSS",
            logo: CSS,
        },
        {
            skill: "Docker",
            logo: Docker,
        },
        {
            skill: "Kubernetes",
            logo: Kubernetes,
        },
        {
            skill: "MySQL",
            logo: MySQL,
        },
        {
            skill: "MongoDB",
            logo: MongoDB,
        },
        {
            skill: "Microservices",
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
                        <div className="skill-container">
                            {skill.logo ? <img className="skill-logo" src={skill.logo} alt={skill.logo} /> : skill.skill}
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