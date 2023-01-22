import styled from "styled-components"
export const StyledLink = styled.a`
    text-decoration: none;
    color:#fff;
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

`;