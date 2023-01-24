import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
    borderRadius: '4px',
    palette: {
        common: {
            main: '#b9b9b9;',
            light: '#9fb6ce',
            dark: '#000000'
        },
        primary: {
            main: '#64ffda',
            light: '#ffffff',
            dark: '#000000'
        },
        secondary: {
            main: '#709fb0',
            light: '#ffffff',
            dark: '#000000'
        }
    },
    font: {
        body: {
            size: '1rem'
        },
        heading: {
            size: '2rem'
        },
        subHeading: {
            size: '1.75rem'
        },
    }
}