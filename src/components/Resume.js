import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hero from "./Hero";
import ListGroup from "react-bootstrap/ListGroup";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resume(props) {
  return (
    <Container id="resume" className="p-5">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Resume</h2>
        <a href="#resume" className="mb-3">
          Download <FaCloudDownloadAlt />
        </a>
        <h3>Proficiencies</h3>
        <ListGroup>
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Nodeo</ListGroup.Item>
          <ListGroup.Item>MySql</ListGroup.Item>
          <ListGroup.Item>Sequelize</ListGroup.Item>
          <ListGroup.Item>MongoDb</ListGroup.Item>
          <ListGroup.Item>Mongoose</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>Express</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
          <ListGroup.Item>Command Line / Terminal</ListGroup.Item>
          <ListGroup.Item>VsCode</ListGroup.Item>
          <ListGroup.Item>Heroku</ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default Resume;
