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
          <Image src={Avatar} rounded fluid id="avatar" />
        </Col>
        <Col md={10}>
          <h2>About Me</h2>
          <p>
            Hi there! My name is Eric, and I am on a journey to become a web
            developer with a deep passion for design. Ever since I was a kid, I
            have been fascinated by the digital world and the endless
            possibilities it offers. As I grew older, I realized that web
            development is the perfect blend of my interests in technology,
            creativity, and problem-solving. I believe that a well-designed
            website can make a significant impact and leave a lasting impression
            on its users. Apart from web development, I also have a keen eye for
            design. I am passionate about creating visually appealing websites
            that are aesthetically pleasing and functional. I am excited about
            the endless possibilities that web development and design offer and
            look forward to contributing to the ever-growing digital landscape.
            Thank you for taking the time to learn a bit about me. I am excited
            about the opportunity to connect, collaborate, and create amazing
            web experiences!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
