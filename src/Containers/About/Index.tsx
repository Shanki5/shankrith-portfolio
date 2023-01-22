import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    gap: 5rem;
    grid-template-columns: 3fr 2fr;
`

const SectionContainer = styled.section`
    margin: 0px auto;
    max-width: 1000px;
    color: white;
`;
const Heading2 = styled.h2`
    font-size: 32px;
    position: relative;
    &::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 300px;
        height: 2px;
        margin: 0px 170px;
        background-color: white;
    }
    
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

const TechStackList = ["Typescript", "React", "Golang", "Python", "AWS"]
export function AboutSection() {
    return (<SectionContainer id="about" >
        <Heading2>About Me</Heading2>
        <FrostedGlassBlock>
            <Container>
                <div>
                    <p> Hello! My name is Shankrith and I enjoy coding. My interest in coding started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                    <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                    <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <GridList>
                        {TechStackList.map((tech) => {
                            return (<StyledListElement>{tech}</StyledListElement>)
                        })}

                    </GridList>
                </div>
                <Image>
                    <picture>
                        <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/What-to-wear-2.jpeg?ssl=1" alt="" width="300" height="300" />
                    </picture>
                </Image>
            </Container>
        </FrostedGlassBlock>
    </SectionContainer>)
}