import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../Components/Common";
import { PrimaryButtonLookingLink } from "../../Components/Common";
const Container = styled.ul`
    display: flex;
    gap: 2rem;
    align-items:center;
    list-style-type:none;
    width:100%;
    justify-content:flex-end;
    padding-right:1rem;

`

const Navigation = styled.nav`
    display: flex;
    align-items:center;
    width:100%;
    padding-top:1rem;
`

export function Navbar() {
    return (<Navigation>
        <Container>
            <li>
                <StyledLink href="#about">About</StyledLink>
            </li>
            <li>
                <StyledLink href="#work">Work</StyledLink>
            </li>
            <li>
                <StyledLink href="#projects">Projects</StyledLink>
            </li>
            <li>
                <StyledLink href="#contact">Contact</StyledLink>
            </li>
            <li>
                <PrimaryButtonLookingLink
                    href="https://www.icloud.com/iclouddrive/0f3_G_MH9V2zy_C1kSTADtadQ#shankrith%5Fresume">
                    Resume
                </PrimaryButtonLookingLink>
            </li>
        </Container>
    </Navigation >)
}