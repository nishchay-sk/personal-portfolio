import React, { useEffect, useState } from "react"
import contacts from "../data/contacts";

const IntroPage = () => {
    return (
    <div id="intro">
        <div>
            <div id="hello">Hello, it's me</div>
            <div id="name-container"><span id="name">Nishchay SK,</span></div>
            <TypingComponent />
            <RightIcons />
            {/* <div id="inform-to-scroll-down">Scroll down for more</div> */}
        </div>
    </div>
)
}

const TypingComponent  = () => {

    const [dataToDisplay, setDataToDisplay] = useState("");

    const dataArr = ["<Full Stack Developer />", "<Front End Developer />", "<Back End Developer />", "<Web Developer />", "<Go Developer />"]

    useEffect(() => {
        
        let timeInSecond = 0
        const doTyping = (i) => {
            
            let backSpaceVariable = dataArr[i].length;
            for(let j = 0; j <= dataArr[i].length * 2; j++) {
                if (j <= dataArr[i].length) {
                    // eslint-disable-next-line no-loop-func
                    setTimeout(() => {
                        setDataToDisplay(() => dataArr[i].substring(0, j + 1))
                    }, (timeInSecond) * 100)
                    timeInSecond++
                } else {
                    // eslint-disable-next-line no-loop-func
                    setTimeout(() => {
                        setDataToDisplay(() => dataArr[i].substring(0, backSpaceVariable))
                        backSpaceVariable--;

                        if (i === dataArr.length - 1 && j === (dataArr[i].length * 2) - 1) {
                            timeInSecond = 5
                            repeatAction()
                        }
                    }, (timeInSecond) * 100)
                    timeInSecond++
                }
            }
        }

        const repeatAction = () => {
            let i = 0;
            while(i < dataArr.length) {
                doTyping(i)
                i++
            }
        }

        repeatAction()

    }, [])

    return (
        <div>
            <span>A </span><span id="role">{dataToDisplay}</span>
        </div>
    )
}


const RightIcons = () => {
    return (
        <div id="right-icons">
            <div>
            {
                contacts.map((contact) => {
                    return (
                        <div>
                            <a href={contact.src} target="_blank" rel="noreferrer">
                                    <img src={contact.logo} alt={contact.contact} title={contact.src} />
                            </a>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default IntroPage