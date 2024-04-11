import React from "react";
import education from "../data/education";

const Education = () => {
    return (
        <div id="education">
            <div id="heading">{`${'<Education />'}`}</div>
            <div id="education-list">
            {
                education.map((edu) => {
                    return (
                        <div className="education-data">
                            <div className="college-location">
                                <div className="college">{edu.collegeName}</div>
                                <div className="location">{edu.location}</div>
                            </div>
                            <div className="course">{edu.degree} in {edu.field}</div>
                            <div className="duration-score">
                                <div className="edu-duration">{edu.startDate} - {edu.endDate}</div>
                                <div className="score">Score: <b>{edu.score}</b></div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Education;