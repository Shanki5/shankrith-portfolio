import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { SubHeading } from "../../Components/Common";

export interface IProjectProps {
    name: string,
    description: string,
    techStack: string[],
    imageUrl: URL,
    githubUrl?: URL,
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
    @media (min-width: 768px){
    ${props => props.orientation === true ?
        `grid-area: 1 / 6 / -1 / -1;` : `grid-area: 1 / 1 / -1 / 7;`}
    }

    @media (max-width: 768px) {opacity:0.50;}

    grid-area: 1 / 1 / 1 / -1;

`;

interface IStyleProps {
    orientation: boolean
}

const ContentContainer = styled.div<IStyleProps>`
    z-index: 10;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 768px){
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
    padding: 0;}
    text-align:left;
    padding: 0 1rem;
    grid-area: 1 / 1 / 2 / 12;
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
background-color: transparent;
@media (min-width: 768px){
    padding:1rem;
    margin: 0rem 0rem 0rem;
    background-color: #455d623b;
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


    }}
`;

const StyledLinkImage = styled.a`
    width: 100%;
    height: 100%;
    z-index: 2;
    display:inline-block;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0px;
        z-index: 3;
        background-color: #2a2a3e;
        mix-blend-mode: screen;
    }
`

const ImageWrapper = styled.div`
    z-index: 1;
    @media (max-width: 768px){filter: blur(1px);}
    height: 100%;
    width: auto;
    max-width: 700px;
`

export function Project(props: IProjectProps) {
    return (
        <ParentContainer>
            <ContentContainer {...props}>
                <SubHeading>{props.name}</SubHeading>
                <FrostedGlassBlock><p>{props.description}</p></FrostedGlassBlock>
                <TechStackContainer>
                    {props.techStack.map((tech, index) => {
                        return (<li>{tech}</li>)
                    })}
                </TechStackContainer>
                <div>
                    {props.githubUrl ?
                        <a href={props.githubUrl.toString()}><BsGithub size="24" color="white" /></a>
                        : (<text></text>)
                    }

                </div>
            </ContentContainer>
            <ImageContainer {...props}>
                <StyledLinkImage href={props.githubUrl ? props.githubUrl.toString() : ""}>
                    <ImageWrapper>
                        <img src={props.imageUrl.toString()} width="700" height="500" alt="" />
                    </ImageWrapper>
                </StyledLinkImage>


            </ImageContainer>
        </ParentContainer >
    )
}