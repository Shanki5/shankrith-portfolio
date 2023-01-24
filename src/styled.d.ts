import 'styled-components';

interface IPalette {
    main: string
    light: string
    dark: string
}
interface IFont {
    size: string
}
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        palette: {
            common: IPalette
            primary: IPalette
            secondary: IPalette
        }
        font: {
            body: IFont
            heading: IFont
            subHeading: IFont
        }
    }
}
