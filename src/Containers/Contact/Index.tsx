import React from "react";
import styled from "styled-components";
import { PrimaryButtonLookingLink } from "../../Components/Common";
import { SectionHeading } from "../../Components/Common";

const SectionContainer = styled.section`
    max-width: 1000px;
    text-align:center;
    width: 100%;
`
const Container = styled.div`
    display: flex;
    gap: 2rem;
    align-items:center;
    flex-direction:column;
    width: 100%;
  `;

const Heading2 = styled(SectionHeading)`
&::after{
    display:none;
}
`;

export function ContactSection() {
    return (<SectionContainer id="contact" >
        <Heading2>Get in touch</Heading2>
        <Container>
            <p>I'm open to opportunities and would love to work on new ideas. Whether you have a question or just want to connect, I'll try my best to get back to you!</p>
            <PrimaryButtonLookingLink href="mailto:shankrith1618@gmail.com">Say Hello</PrimaryButtonLookingLink>
        </Container>
    </SectionContainer>)
}