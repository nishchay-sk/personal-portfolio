import React from "react"
import skills from "../data/skills"

const Skills = () => {

    
    return (
        <div id="skills">
            <div id="heading">{"<Skills>"}</div>
            <div id="skills-list">
            {
                skills.map((skill) => {
                    return (
                        <div className="skill-container">
                            {skill.logo ? <><
                                img className="skill-logo" src={skill.logo} alt={skill.logo} />
                                <div>{skill.skill}</div>
                            </> : skill.skill}
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