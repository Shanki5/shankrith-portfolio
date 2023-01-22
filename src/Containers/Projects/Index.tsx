import React from "react";
import styled from "styled-components";
import { Project } from "./project";
import { projectsData } from "./data";


const Container = styled.ul`
    display: flex;
    gap: 5rem;
    align-items:center;
    flex-direction:column;

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
        left: 160px;
        height: 2px;
        margin: 0px 170px;
        background-color: white;
    }
    
`;


export function ProjectsSection() {
    return (<SectionContainer id="projects" >
        <Heading2>Some Things I've Built</Heading2>
        <Container>
            {projectsData.map((projectObject, index) => {
                return (<Project {...projectObject} ></Project>)
            })}
        </Container>
    </SectionContainer>)
}