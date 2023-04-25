import React, { useState } from "react";
import "./styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import projects from "./data/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // setting current section here so both nav and footer have access to change active style
  const [currentSection, setCurrentSection] = useState("About Me");

  // update current section's state
  const changeSection = (e) => {
    setCurrentSection(e.target.innerText);
  };

  // reset current section to home, thus removing active styling from other navs
  const handlRemoveActive = () => {
    setCurrentSection("Eric's Portfolio");
  };

  // render page based on currentSection
  const renderPage = () => {
    if (currentSection === "Eric's Portfolio") {
      return (
        <>
          <Hero />
          <HomeContent />
        </>
      );
    }
    if (currentSection === "About Me") {
      return <About currentSection={currentSection} />;
    }
    if (currentSection === "Portfolio") {
      return (
        <ProjectCard projectsData={projects} currentSection={currentSection} />
      );
    }
    if (currentSection === "Contact") {
      return <Contact currentSection={currentSection} />;
    }
    if (currentSection === "Resume") {
      return <Resume currentSection={currentSection} />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Header
          changeSec={changeSection}
          current={currentSection}
          removeActive={handlRemoveActive}
        />
        {renderPage()}
        <Footer removeActive={handlRemoveActive} />
      </Row>
    </Container>
  );
}

export default App;
