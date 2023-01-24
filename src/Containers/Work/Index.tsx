import { Work } from "./work";
import { workExperienceData } from "./Data";
import styled from "styled-components";
import { SectionHeading } from "../../Components/Common";
const SectionContainer = styled.section`
    margin: 0px auto;
    max-width: 700px;
    color: white;

`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
`;

export function WorkSection() {
    return (
        <SectionContainer id="work" >
            <SectionHeading>Where I've Worked</SectionHeading>
            <ContentContainer>
                {workExperienceData.map((workExperience, index) => {
                    return (<Work {...workExperience} />)
                })}
            </ContentContainer>
        </SectionContainer>)
}