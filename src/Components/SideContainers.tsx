

import styled from "styled-components";
import { BsGithub } from "react-icons/bs"
import { GrLinkedin } from "react-icons/gr";

const SideContainer = styled.div`

@media (min-width: 768px)
    { width: 40px;
    position: fixed;
    bottom: 0px;
    left: 20px;
    right: auto;
    z-index: 10;
    }
    /* width: 0px; */

`;

const ContactLinksContainer = styled.ul`

    flex-direction:row;
    @media (min-width: 768px){
        flex-direction: column;
        &::after{
            content: "";
            width: 1px;
            height: 180px;
            margin: 0px auto;
            background-color: white;
        }
    }
    display:flex;
    gap:1rem;
    align-items:center;
    list-style-type:none;
    padding: 0 0 2rem;
    margin: 0;
    justify-content: center;

`;

const StyledLink = styled.a`
    display:inline-block;
    position:relative;
    text-decoration: none;
    color:#fff;
    transition: var(--transition);
    &:hover {
        color: #64ffda;
        transform: translateY(-3px);
        
    }
    &:focus{
        transform: translateY(-3px);
    }
    
`;

export function ContactLinks() {
    return (
        <SideContainer>
            <ContactLinksContainer>
                <li>
                    <StyledLink href="https://github.com/Shanki5" target="_blank"><BsGithub size="24" /></StyledLink>
                </li>
                <li>
                    <StyledLink href="https://www.linkedin.com/in/shankrith-s/" target="_blank"><GrLinkedin size="24" /></StyledLink>
                </li>
            </ContactLinksContainer>
        </SideContainer>
    )
}

