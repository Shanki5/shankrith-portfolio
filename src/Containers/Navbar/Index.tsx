import React from "react";
import styled from "styled-components";
import { PrimaryButtonLookingLink } from "../../Components/Common";


const Container = styled.ul`
    display: flex;
    gap: 1rem;
    @media (min-width: 768px){gap: 2rem;}
    align-items:center;
    list-style-type:none;
    justify-content: flex-end;
    
`

const Navigation = styled.nav`
    display: flex;
    align-items:center;
    width: 100%;
    position: relative;
    justify-content:flex-end;
`
const ResumeButton = styled(PrimaryButtonLookingLink)`
    padding: 0.4rem 0.5rem;
`;

const SectionLinks = styled.a`
    ${props => {
        return (`
            color: ${props.theme.palette.common.main};
            &:hover{
                color: ${props.theme.palette.primary.main};
            }
        `)
    }}
    text-decoration: none;
`

export function Navbar() {
    return (<Navigation>
        <Container>
            <li>
                <SectionLinks href="#about">About</SectionLinks>
            </li>
            <li>
                <SectionLinks href="#work">Work</SectionLinks>
            </li>
            <li>
                <SectionLinks href="#projects">Projects</SectionLinks>
            </li>
            <li>
                <SectionLinks href="#contact">Contact</SectionLinks>
            </li>
            <li>
                <ResumeButton
                    href="/Documents/shankrith_resume.pdf"
                    target="_blank">
                    Resume
                </ResumeButton>
            </li>
        </Container>
    </Navigation >)
}