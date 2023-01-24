import styled from "styled-components"
import { Navbar } from "../Containers/Navbar/Index"

const HeaderContainer = styled.header`
    padding: 1rem 2rem;
    position: fixed;
    display: flex;
    width: 100%;
`;
export function HeaderView() {

    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    )

}