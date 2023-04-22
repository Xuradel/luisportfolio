import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header"
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <div className="grid">
          <Header />
          <div className="main">
            <section className="flex">
              <LandingSection />
            </section>
          </div>
          <div className="about">
            <section className="flexAbout">
              <AboutSection />
            </section>
          </div>
          <div className="skills">
            <section className="flexSkills">
              <SkillsSection />
            </section>
          </div>
          <div className="services">
            <section className="flexServices">
              <ServicesSection />
            </section>
          </div>
          <div className="projects">
            <section className="flexProjects">
              <ProjectsSection />
            </section>
          </div>
          <div className="contact">
            <section className="flexContact">
              <ContactSection />
            </section>
          </div>
          <div className="footer">
            <section className="flexFooter">
              <Footer />
            </section>
          </div>
        </div>
      </AlertProvider>
    </ChakraProvider>

  );
}

export default App;
