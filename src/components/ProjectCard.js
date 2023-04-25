import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <>
      {props.projectsData.map((proj) => {
        return (
          <Card style={{ width: "18rem" }} className="m-4">
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
    </>
  );
}

export default ProjectCard;
