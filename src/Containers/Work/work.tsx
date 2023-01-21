import styled from "styled-components"
import { StyledLink } from "../../Components/Common";

interface Company {
    name: string,
    location?: string,
    url?: string
}
export interface IWorkProps {
    role: string,
    startDate: Date,
    endDate: Date | null,
    description: string[],
    company: Company,
    techStack: string[],
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const Heading = styled.h3`
    margin: 0;
`
const DateRange = styled.p`
    margin: 0;
    font-size:0.95rem;
`

const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
}

export function Work(props: IWorkProps) {
    return (<Container>
        <Heading>
            <span>{props.role}</span>
            <span>
                &nbsp;@&nbsp;
                <StyledLink href={props.company.url} >{props.company.name}</StyledLink>
            </span>
        </Heading>
        <DateRange>{props.startDate.toLocaleString("en-IN", dateOptions)}&nbsp;-&nbsp;
            {(props.endDate != null) ? props.endDate.toLocaleString("en-IN", dateOptions) : "Present"}</DateRange>
        <ul>{props.description.map((point, index) => {
            return (<li>{point}</li>)
        })}</ul>
    </Container>)
}

