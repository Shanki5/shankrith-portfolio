import styled from "styled-components";
export interface IProjectProps {
    name: string,
    description: string,
    techStack: string[],
    imageUrl?: URL,
    githubUrl?: URL,
}

const TechStackContainer = styled.ul`
    list-style-type:none;
    display:flex;
    gap:1rem;
    font-weight:bold;
`;

export function Project(props: IProjectProps) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <TechStackContainer>
                {props.techStack.map((tech, index) => {
                    return (<li>{tech}</li>)
                })}
            </TechStackContainer>
        </div>
    )
}