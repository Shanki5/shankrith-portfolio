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
    &::after{
        content: "";
        display:inline-block;
        position:relative;
        height: 2px;
        width: 300px;
        top: -7px;
        left: 15px;
    }
    
`
export const StyledLink = styled.a`
    text-decoration: none;
    color: #64ffda;

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
        background-color: #fff;
    }
    &:hover::after{
        width: 100%;
        transition: all 0.4s;
    }
    
`

export const PrimaryButtonLookingLink = styled.a`
    color: #64ffda;
    background-color:transparent;
    border: 1px solid #64ffda;
    border-radius: 10px;
    text-decoration: none;
    padding: 1rem 1.5rem;

    &:hover{
        background-color:rgba(100, 255, 218,0.3);
        color: rgb(100, 255, 218);
    }


`;