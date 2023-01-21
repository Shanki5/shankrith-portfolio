import styled from "styled-components";
import React from "react";

const StyledSection = styled.section`
    width:70%;
    id: ${props => props.id};
    color:#ccd6f6;
`

const StyledH1 = styled.h1`
    color:#ccd6f6;
`

interface ISectionComponentProps {
    heading: string,
    id: string,
    children?: React.ReactNode,

}
export function SectionComponent(props: ISectionComponentProps) {
    return (<StyledSection {...props}>
        <StyledH1>{props.heading}</StyledH1>
        {props.children}
    </StyledSection>)

}  