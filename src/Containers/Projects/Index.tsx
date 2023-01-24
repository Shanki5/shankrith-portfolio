import React from "react";
import styled from "styled-components";
import { Project } from "./project";
import { projectsData } from "./data";
import { SectionHeading } from "../../Components/Common";

const Container = styled.ul`
    display: flex;
    gap: 5rem;
    align-items:center;
    flex-direction:column;

`
const SectionContainer = styled.section`
    margin: 0px auto;
    max-width: 1000px;
    width: 100%;
`;

export function ProjectsSection() {
    return (<SectionContainer id="projects" >
        <SectionHeading>Some Things I've Built</SectionHeading>
        <Container>
            {projectsData.map((projectObject, index) => {
                return (<Project {...projectObject} ></Project>)
            })}
        </Container>
    </SectionContainer>)
}