import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hero from "./Hero";

function Resume(props) {
  return (
    <Container id="resume" className="p-5">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Resume</h2>
        <p>
          Web Developer and designer with 6 years of graphic design, 2 years UX
          design and 1 year of front-end web development experience. Proficient
          in front-end and back-end technologies, including HTML, CSS,
          JavaScript, Node with a strong understanding of web design principles
          and best practices. Passionate about creating visually stunning and
          functional websites that drive results for businesses. Strong
          communication and collaboration skills, with a keen eye for detail and
          a commitment to delivering high-quality work.
        </p>
        <h4>Experience</h4>
        <p>
          July 2016 - Present: Front End Developer, Multimedia Designer at
          Pacific Life
        </p>
        <h4>Education</h4>
        <p>January 2023: Full Stack Coding Bootcamp at UCI</p>
      </Row>
    </Container>
  );
}

export default Resume;
