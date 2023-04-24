import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>Project info goes here</Card.Text>
        <Button variant="primary">See Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
