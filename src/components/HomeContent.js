import React from "react";
import Image from "react-bootstrap/Image";
import Hero from "./Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../images/avatar.jpeg";

function About(props) {
  return (
    <Container className="p-5" id="about">
      {/* <Hero currentSection={props.currentSection} /> */}
      <Row>
        <Col md={10}>
          <h2>Welcome to my portfolio!</h2>
          I'm thrilled to have you here. you'll find a diverse range of projects
          that showcase my skills and expertise in web development and design. I
          believe that every website tells a story and should leave a lasting
          impression on its visitors. I'm here to bring your ideas to life with
          creativity and technical prowess. Thank you for visiting my web
          developer and designer portfolio. I hope you enjoy your time here and
          get inspired by my work. If you have any questions or would like to
          discuss a project, feel free to get in touch. I'd love to hear from
          you! Best regards.
        </Col>
      </Row>
    </Container>
  );
}

export default About;
