import styled from "styled-components"

const Container = styled.footer`
    color:white;
    font-size:0.75rem;
    padding: 2rem 0rem;
    width:100%;
    text-align:center;
`;
export function Footer() {
    return (<Container> <p>Designed & Built by Shankrith S</p></Container>)
}