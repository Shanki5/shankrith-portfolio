import React from "react";
import styled from "styled-components";
import headshot from '../../images/headshot.jpg'
import { SectionHeading } from "../../Components/Common";

const Container = styled.div`
    display: grid;
    gap: 5rem;
    grid-template-columns: 3fr 2fr;
`

const SectionContainer = styled.section`
    margin: 0px auto;
    max-width: 1000px;
`;

const Image = styled.div`
    border-radius: 25px;
    overflow: hidden;
    max-width: 300px;
    max-height: 300px;
    z-index:10;
    
`;

const FrostedGlassBlock = styled.div`
    padding:2rem;
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
        }
`;

const GridList = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    list-style-type:none;
`

const StyledListElement = styled.li`
    color: #64ffda;
    &::before{
        content: "» ";
        position: relative;
    }
`

const TechStackList = ["Typescript", "React", "Golang", "AWS", "Postgres", "GraphQL"]
export function AboutSection() {
    return (<SectionContainer id="about" >
        <SectionHeading>About Me</SectionHeading>
        <FrostedGlassBlock>
            <Container>
                <div>
                    <p> Hello! My name is Shankrith and I enjoy coding. My interest in coding started back in 2012 when I built a game with my friends.</p>
                    <p>Fast-forward to today, and I’ve had the privilege of working at 2 fast paced start-ups. My main focus these days is backend engineering.</p>
                    <p></p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <GridList>
                        {TechStackList.map((tech) => {
                            return (<StyledListElement>{tech}</StyledListElement>)
                        })}

                    </GridList>
                </div>
                <Image>
                    <picture>
                        <img src={headshot} alt="" width="300" height="300" />
                    </picture>
                </Image>
            </Container>
        </FrostedGlassBlock>
    </SectionContainer>)
}