import styled from "styled-components";
export interface IProjectProps {
    name: string,
    description: string,
    techStack: string[],
    imageUrl: URL,
    githubUrl?: URL,
}
const ParentContainer = styled.li`
    display:grid;
    grid-template-columns: repeat(12,1fr);

    
`;
const TechStackContainer = styled.ul`
    list-style-type:none;
    display:flex;
    gap:1rem;
    font-weight:300;
    color: #64ffda;
`;

export function Project(props: IProjectProps) {
    return (
        <ParentContainer>
            <div>
                <img src={props.imageUrl.toString()} width="700" alt="" />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <TechStackContainer>
                    {props.techStack.map((tech, index) => {
                        return (<li>{tech}</li>)
                    })}
                </TechStackContainer>
            </div>
        </ParentContainer>
    )
}