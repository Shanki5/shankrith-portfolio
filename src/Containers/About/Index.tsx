import React from "react";
import { SectionComponent } from "../../Components/Sections";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 5rem;
    align-items:center;

`

export function AboutSection() {
    return (<SectionComponent id="about" heading="About Me">
        <Container>
            <p> As a software engineer with experience in India from 2018-2022 and currently working in Singapore at Hobnob.ai, I have been a part of a distributed team of 6 fullstack engineers in the rapid development of a professional relationship platform aiming to breakdown silos in large companies.</p>
            <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/What-to-wear-2.jpeg?ssl=1" alt="" width="400" height="400" />
        </Container>
    </SectionComponent>)
}