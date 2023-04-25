import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container className="p-4">
      <h2>Contact Me:</h2>
      <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </Container>
  );
}

export default Contact;
