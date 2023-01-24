import styled from "styled-components"
import { PrimaryButtonLookingLink } from "../../Components/Common";

const HeroSectionContainer = styled.section`
    color:white;
    /* padding-top:5rem; */
    margin: 0px auto;
    max-width: 1000px;
    min-height: 70vh;
`
const Heading1 = styled.h1`
    font-size: 16px;
    color:  #64ffda;
`;
const Heading2 = styled.h2`
    font-size: 80px;
    margin: 0;
`;

const Heading3 = styled.h3`
    font-size: 40px;
    margin: 0 0 2rem;  
    font-weight: 600;
`;

const HeroContentContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:0.5rem;
    width: 75%;
    margin-bottom: 2rem;
`;

export function HeroView() {
    return (
        <HeroSectionContainer>
            <div>
                <Heading1 >Hi, my name is</Heading1>
            </div >
            <div>
                <Heading2>Shankrith S</Heading2>
            </div >
            <div>
                <Heading3>I build software for interesting ideas</Heading3>
            </div >
            <HeroContentContainer>
                <p>"What we do now, echoes in eternity" - Marcus Aurelius </p>
                <p> As a skilled software developer with over a year of experience, I currently work for a fast-paced startup in the professional relationship management space. I have experience in both web and systems development. I am always seeking new challenges and opportunities to learn and grow as a developer.</p>
            </HeroContentContainer>
            <PrimaryButtonLookingLink href="mailto:shankrith1618@gmail.com">Reach out!</PrimaryButtonLookingLink>
        </HeroSectionContainer >)
}