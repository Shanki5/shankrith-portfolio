

import styled from "styled-components";
import { BsGithub } from "react-icons/bs"
import { GrLinkedin } from "react-icons/gr";

const SideContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
`;

const ContactLinksContainer = styled.ul`
    display:flex;
    gap:1rem;
    align-items:center;
    list-style-type:none;
    flex-direction:column;
    &::after{
    content: "";
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
    }
`;

export function ContactLinks() {
    return (
        <SideContainer>
            <ContactLinksContainer>
                <li>
                    <a href="https://github.com/Shanki5" target="_blank"><BsGithub size="30" color="white" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shankrith-s/" target="_blank"><GrLinkedin size="30" color="white" /></a>
                </li>
            </ContactLinksContainer>
        </SideContainer>
    )
}

