import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
    color: white;
    padding: 0rem 15rem 0rem;
    text-align:center;
`
const Container = styled.div`
    display: flex;
    gap: 2rem;
    align-items:center;
    flex-direction:column;
    padding 0rem 15rem;
  `;
const ContactButton = styled.a`
    color: #64ffda;
    background-color:transparent;
    border: 1px solid #64ffda;
    border-radius: 15px;
    text-decoration: none;
    padding: 1rem 1.5rem;

`;
export function ContactSection() {
    return (<SectionContainer id="contact" >
        <h1>Get in touch</h1>
        <Container>
            <p>I'm open to opportunities and would love to work on new ideas. Whether you have a question or just want to connect, I'll try my best to get back to you!</p>
            <ContactButton href="mailto:shankrith1618@gmail.com">Say Hello</ContactButton>
        </Container>
    </SectionContainer>)
}