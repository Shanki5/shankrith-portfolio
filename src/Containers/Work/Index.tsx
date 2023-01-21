import { SectionComponent } from "../../Components/Sections";
import { Work } from "./work";
import { workExperienceData } from "./Data";


export function WorkSection() {
    return (
        <SectionComponent id="work" heading="Where I've worked">
            <div>
                {workExperienceData.map((workExperience, index) => {
                    return (<Work {...workExperience} />)
                })}
            </div>
        </SectionComponent>)
}