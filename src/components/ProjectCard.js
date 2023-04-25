import React from "react";
import Hero from "./Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Container id="portfolio" className="p-5 ">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Portfolio</h2>
        {props.projectsData.map((proj, index) => {
          return (
            <Card
              style={{ width: "18rem" }}
              className="m-2 proj-card p-3"
              key={index}
            >
              <Card.Img variant="top" src={proj.imageUrl} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button href={proj.githubUrl} variant="primary">
                  Github Repo
                </Button>
                <Button href={proj.deployedUrl} variant="info" className="mt-2">
                  Deployed Application
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProjectCard;
