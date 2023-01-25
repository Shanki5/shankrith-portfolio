import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Navbar } from "../Containers/Navbar/Index"

const HeaderContainer = styled.header`
    padding: 0.5rem 1rem 0;

    @media (min-width: 768px){
        padding: 0.5rem 2rem 0;
    }
    position: sticky;
    display: flex;
    width: 100%;
    background: #070e1c;
    z-index: 15;
    box-shadow: 0px 10px 36px -10px #1d3940;

    transition-property: all; 
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
`;

enum ScrollDirection {
    Up,
    Down,
    NoScroll
}
export function HeaderView() {

    const [scrollDirection, setScrollDirection] = useState(ScrollDirection.NoScroll);

    useEffect(() => {
        let lastScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            const direction = currentScrollPos > lastScrollPos ? ScrollDirection.Down : ScrollDirection.Up;

            if (direction !== scrollDirection && (currentScrollPos - lastScrollPos > 10 || currentScrollPos - lastScrollPos < -10)) {
                setScrollDirection(direction);
            }

            lastScrollPos = currentScrollPos > 0 ? currentScrollPos : 0;

        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection])

    return (
        <HeaderContainer style={{ top: scrollDirection === ScrollDirection.Up ? '0' : '-80px' }}>
            <Navbar />
        </HeaderContainer>
    )

}