import './App.css';
import styled from 'styled-components';
import { AboutSection } from './Containers/About/Index';
import { WorkSection } from './Containers/Work/Index';
import { Navbar } from './Containers/Navbar/Index';
import { ProjectsSection } from './Containers/Projects/Index';
import { ContactLinks } from './Components/SideContainers';
import { ContactSection } from './Containers/Contact/Index';
import { Footer } from './Components/Footer';
import { HeroView } from './Containers/Hero/Index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

`;

const BodyContainer = styled.main`
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  max-width: 1600px;
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Navbar />
        <BodyContainer >
          <HeroView />
          <AboutSection />
          <WorkSection />
          <ProjectsSection />
        </BodyContainer>
        <ContactLinks />
        <ContactSection />

        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
