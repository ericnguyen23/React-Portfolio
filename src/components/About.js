import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../images/avatar.jpeg";

function About() {
  return (
    <Container className="p-5" id="about">
      <Row>
        <Col md={2}>
          <Image src={Avatar} roundedCircle fluid id="avatar" />
        </Col>
        <Col md={10}>
          <h2>About Me</h2>
          <p>
            Hi, I'm Eric and I am currently learning Full Stack Web Development.
            I already have a little experience with frontend development, but
            working on improving fundamentals and learning more about the middle
            and backend. Additionally, I am passionate with design and hoping to
            marry the two disciplines and add to my toolbag of skills.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
