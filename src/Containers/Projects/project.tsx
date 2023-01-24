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
        `grid-area: 1 / 6 / -1 / -1;` : `grid-area: 1 / 1 / -1 / 7;`}
`;

interface IStyleProps {
    orientation: boolean
}

const ContentContainer = styled.div<IStyleProps>`
    z-index: 10;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    ${props => props.orientation === true ?
        `align-items:start;
        text-align: left;
        grid-area: 1 / 1 / -1 / 6;
    ` :
        `align-items:end;
        grid-area: 1 / 7 / -1 / -1;
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
    background-color: #455d623b;
    /* background:inherit; */
    /* background-color: transparent; */
    border-radius: 5px;
    overflow: hidden;
    position:relative;

    &:before{
        position:absolute;
        content: '';
        background: inherit;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        box-shadow: inset 0 0 0 3000px rgba(22, 106, 132, 0.19);
        filter: blur(100px);


    }


    /* padding:2rem;
    background: inherit;
    border-radius: 15px;
    border: 1px solid rgba(5, 39, 56, 0.568);
    overflow: hidden;
    position:relative;
    &:before {
        position:absolute;
        content: '';
        background: inherit;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        box-shadow: inset 0 0 0 3000px rgba(211, 211, 211, 0.192);
        filter: blur(50px);
        border-radius: 15px;
        } */
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
                <a href={props.githubUrl.toString()}><img src={props.imageUrl.toString()} width="500" alt="" /></a>

            </ImageContainer>
        </ParentContainer >
    )
}