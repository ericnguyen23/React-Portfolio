import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hero from "./Hero";
import Form from "react-bootstrap/Form";

function Contact(props) {
  return (
    <Container className="p-5" id="contact">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Contact Me:</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default Contact;
