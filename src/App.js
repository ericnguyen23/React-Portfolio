import React, { useState } from "react";
import "./styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Hero from "./components/Hero";

import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import projects from "./data/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // setting current section here so both nav and footer have access to change active style
  const [currentSection, setCurrentSection] = useState("home");

  // update current section's state
  const changeSection = (e) => {
    setCurrentSection(e.target.innerText);
  };

  // reset current section to home, thus removing active styling from other navs
  const handlRemoveActive = () => {
    setCurrentSection("home");
  };

  // render page based on currentSection
  const renderPage = () => {
    if (currentSection === "home") {
      return <Hero />;
    }
    if (currentSection === "Portfolio") {
      return <ProjectCard projectsData={projects} />;
    }
    if (currentSection === "Contact") {
      return <Contact />;
    }
    if (currentSection === "Resume") {
      return <Resume />;
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
