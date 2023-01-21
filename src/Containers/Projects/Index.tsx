import React from "react";
import { SectionComponent } from "../../Components/Sections";
import styled from "styled-components";
import { Project } from "./project";
import { projectsData } from "./data";


const Container = styled.div`
    display: flex;
    gap: 5rem;
    align-items:center;

`

export function ProjectsSection() {
    return (<SectionComponent id="projects" heading="Some things I've built">
        <Container>
            {projectsData.map((projectObject) => {
                return (<Project {...projectObject}></Project>)
            })}
        </Container>
    </SectionComponent>)
}