import { Work } from "./work";
import { workExperienceData } from "./Data";
import styled from "styled-components";

const SectionContainer = styled.section`
    margin: 0px auto;
    max-width: 700px;
    color: white;

`;

const Heading2 = styled.h2`
    font-size: 2rem;
    position: relative;
    &::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 350px;
        left: 120px;
        height: 2px;
        margin: 0px 170px;
        background-color: white;
    }
    
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
`;

export function WorkSection() {
    return (
        <SectionContainer id="work" >
            <Heading2>Where I've Worked</Heading2>
            <ContentContainer>
                {workExperienceData.map((workExperience, index) => {
                    return (<Work {...workExperience} />)
                })}
            </ContentContainer>
        </SectionContainer>)
}