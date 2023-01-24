import styled from "styled-components"

export const SectionHeading = styled.h2`
    ${props => {
        return (`
        font-size: ${props.theme.font.heading.size}; 
        color: ${props.theme.palette.common.light};
        &::after{
            background: ${props.theme.palette.common.light};
        }
        `)
    }}
    position: relative;

    @media (min-width: 768px){
    &::after{
        content: "";
        display:inline-block;
        position:relative;
        height: 2px;
        width: 300px;
        top: -7px;
        left: 15px;
    }}
`

export const SubHeading = styled.h3`
    ${props => {
        return (`
        font-size: ${props.theme.font.subHeading.size}; 
        color: ${props.theme.palette.common.light};
        `)
    }}
    margin: 0;
`
export const StyledLink = styled.a`
    ${props => {
        return (`
            color: ${props.theme.palette.primary.main};
            &::after{
                background-color: ${props.theme.palette.common.main};
            }
        `)
    }}
    text-decoration: none;
    display: inline-block;
    position: relative;

        &::after {
        content: "";
        display: block;
        margin-top: 2px;
        margin-left: auto;
        margin-right: auto;
        height: 1px;
        width: 0px;
    }
        &:hover::after{
        width: 100%;
        transition: all 0.4s;
    }
`

export const PrimaryButtonLookingLink = styled.a`
    
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 8px;
    text-decoration: none;
    padding: 1rem 1.5rem;

    &:hover{
    background-color: rgba(100, 255, 218, 0.3);
    color: rgb(100, 255, 218);
}


`;