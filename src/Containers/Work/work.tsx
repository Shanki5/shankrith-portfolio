import styled from "styled-components"
import { StyledLink, SubHeading } from "../../Components/Common";

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

const DateRange = styled.p`
    margin: 0;
    font-size:0.95rem;
`

const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
}


const StyledListElement = styled.li`
    &::before{
        content: "» ";
        position: relative;
        ${props => {
        return (`color: ${props.theme.palette.primary.main};`)
    }}
    }
`
const GridList = styled.ul`
    list-style-type:none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 300;

`

export function Work(props: IWorkProps) {
    return (<Container>
        <SubHeading>
            <span>{props.role}</span>
            <span>
                &nbsp;@&nbsp;
                <StyledLink href={props.company.url} >{props.company.name}</StyledLink>
            </span>
        </SubHeading>
        <DateRange>{props.startDate.toLocaleString("en-IN", dateOptions)}&nbsp;-&nbsp;
            {(props.endDate != null) ? props.endDate.toLocaleString("en-IN", dateOptions) : "Present"}</DateRange>
        <GridList>{props.description.map((point, index) => {
            return (<StyledListElement>{point}</StyledListElement>)
        })}</GridList>
    </Container>)
}

