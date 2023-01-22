import { IWorkProps } from "./work"

export const workExperienceData: IWorkProps[] = [{
    role: "Software Engineer",
    startDate: new Date("2022-06-01"),
    endDate: null,
    description: ["Worked with a distributed team of 6 fullstack engineers to rapidly develop a professional relationship platform aiming to breakdown silos in large companies."
        , "Worked with AWS Lambda to host backend business logic and setup AWS SQS to run scheduled background jobs."
        , "Improved email organization by implementing a threading system by constructing RAW Emails using MIME sent via AWS SES."
        , "Developed a system for constructing and sending ICS attachments even when calendar permissions were not granted, resulting in an increase in successful calendar invites and event planning."
        , "Created a user-friendly page for finding and joining video conference links, resulting in a 20% increase in participation in remote meetings."
        , "Developed a page for scheduling and finding available time slots, resulting in a decrease in scheduling conflicts."
        , "Developed GraphQL mutations/queries to store and update the meeting links, time slots, etc using Hasura and Postgres."
        , "Implemented OAuth Flow (Google and Microsoft) for the application."],
    company: {
        name: "Hobnob.ai",
        location: "Singapore",
        url: "https://hobnob.ai/"
    },
    techStack: ["Elm", "GraphQL", "Hasura", "Postgres", "Cypress", "AWS"]
},
{
    role: "Systems Software Engineer Intern",
    startDate: new Date("2021-05-01"),
    endDate: new Date("2021-08-31"),
    description: ["Developed a high performant autonomous navigation stack in {\bf C++} for warehouse robots.",
        "Designed an algorithm to detect changes in the environment in order to indicate to the user, that the environment needs to be remapped",
        "Implemented a novel teleoperation feature that incorporated autonomous obstacle avoidance, resulting in a 70% increase in efficiency and safety during teleoperation."],
    company: {
        name: "Mowito Robotic Systems",
        location: "Bangalore",
        url: "https://www.mowito.in"
    },
    techStack: []
}]