import './App.css';
import styled from 'styled-components';
import { AboutSection } from './Containers/About/Index';
import { WorkSection } from './Containers/Work/Index';
import { Navbar } from './Containers/Navbar/Index';
import { ProjectsSection } from './Containers/Projects/Index';
import { ContactLinks } from './Components/SideContainers';
import { ContactSection } from './Containers/Contact/Index';
import { Footer } from './Components/Footer';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  background: #0a192f;

`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactLinks />
      <ContactSection />

      <Footer />
    </AppContainer>
  );
}

export default App;
