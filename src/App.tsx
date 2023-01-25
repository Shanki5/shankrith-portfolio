import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { AboutSection } from './Containers/About/Index';
import { WorkSection } from './Containers/Work/Index';
import { ProjectsSection } from './Containers/Projects/Index';
import { ContactLinks } from './Components/SideContainers';
import { ContactSection } from './Containers/Contact/Index';
import { Footer } from './Components/Footer';
import { HeroView } from './Containers/Hero/Index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { HeaderView } from './Components/Header';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
  }
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.main`
  @media (min-width: 768px){padding: 0px 10rem;}
  padding: 0px 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  max-width: 1600px;
  ${props => {
    return (`
      color: ${props.theme.palette.common.main};
    `)
  }}
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <HeaderView />
        <BodyContainer >
          <HeroView />
          <AboutSection />
          <WorkSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </BodyContainer>
        <ContactLinks />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
