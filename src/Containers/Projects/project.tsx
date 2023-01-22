import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
export interface IProjectProps {
    name: string,
    description: string,
    techStack: string[],
    imageUrl: URL,
    githubUrl: URL,
}
const ParentContainer = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

`;
const ImageContainer = styled.div`
    grid-area: 1 / 6 / -1 / -1;  
    max-width: 500px;          
    overflow: hidden;
    border-radius: 5px;

`;

const ContentContainer = styled.div`
    grid-area: 1 / 1 / -1 / 7;
    text-align: left; 
    z-index: 10;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
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

export function Project(props: IProjectProps) {
    return (
        <ParentContainer>
            <ContentContainer>
                <h3>{props.name}</h3>
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
            <ImageContainer>
                <a href=""><img src={props.imageUrl.toString()} width="500" alt="" /></a>

            </ImageContainer>
        </ParentContainer>
    )
}