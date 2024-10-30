import IBM from "../assets/IBM.svg"
import Samsung from "../assets/samsung.svg"

const experience = [
    {
        companyLogo: Samsung,
        projectList: [
            {
                company: "Samsung Research - Banglore",
                startDate: "July 2024",
                endDate: "Present",
                role: "Lead Engineer",
                projectName: "Samsung Ads - DSP",
                listData: [
                            "Building Strong Profile...."
                        ]
            }
        ]
    },
    {
        projectList: [
            {
                company: "IBM - CIO",
                startDate: "Nov 2022",
                endDate: "July 2024",
                role: "Full Stack Developer",
                projectName: "Common Costing Tool",
                listData: [
                            "Developed web application which is responsible for providing pricing for hardware and software services provided by IBM depending on different regions.",
                            "Worked as Full Stack developer using ReactJs and Java Spring Boot",
                            "Created functional components and used advanced hooks through out the application.",
                            "Migrated Data grid from carbon to Aggrid",
                            "Took leadership for eslint and unit testing coverage for UI",
                            "Created Mail service in Java."
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

export default experience;