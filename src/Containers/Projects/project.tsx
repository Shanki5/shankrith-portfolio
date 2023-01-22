import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
export interface IProjectProps {
    name: string,
    description: string,
    techStack: string[],
    imageUrl: URL,
    githubUrl: URL,
    orientation: boolean;
}
const ParentContainer = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

`;
const ImageContainer = styled.div<IStyleProps>`


    max-width: 500px;          
    overflow: hidden;
    border-radius: 5px;
    ${props => props.orientation === true ?
        `grid-area: 1 / 6 / -1 / -1;` : `grid-area: 1 / 1 / -1 / 7;
`}

`;

interface IStyleProps {
    orientation: boolean
}

const ContentContainer = styled.div<IStyleProps>`
    /* grid-area: 1 / 1 / -1 / 7; */
    grid-area: 1 / 6 / -1 / -1;  

    /* text-align: left;  */
    text-align: right;
    z-index: 10;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    align-items: end;
    /* align-items: start; */
    ${props => props.orientation === true ?
        `align-items:start;
        text-align: left;
        grid-area: 1 / 1 / -1 / 7;
    ` :
        `align-items:end;
        grid-area: 1 / 6 / -1 / -1;
        text-align: right;
        `
    }
`;
const TechStackContainer = styled.ul`
    list-style-type:none;
    display:flex;
    gap:1rem;
    font-weight:300;
    color: #64ffda;
    padding: 0;
`;

const FrostedGlassBlock = styled.div`
    padding:1rem;
    margin: 0rem 0rem 0rem;
    background-color: #112240;
    border-radius: 5px;
    overflow: hidden;
    position:relative;
`;

const ProjectHeading = styled.h3`
  font-size: 28px;  
  font-weight: 600;
`;

export function Project(props: IProjectProps) {
    return (
        <ParentContainer>
            <ContentContainer {...props}>
                <ProjectHeading>{props.name}</ProjectHeading>
                <FrostedGlassBlock><p>{props.description}</p></FrostedGlassBlock>
                <TechStackContainer>
                    {props.techStack.map((tech, index) => {
                        return (<li>{tech}</li>)
                    })}
                </TechStackContainer>
                <div>
                    <a href={props.githubUrl.toString()}><BsGithub size="24" color="white" /></a>
                </div>
            </ContentContainer>
            <ImageContainer {...props}>
                <a href=""><img src={props.imageUrl.toString()} width="500" alt="" /></a>

            </ImageContainer>
        </ParentContainer >
    )
}