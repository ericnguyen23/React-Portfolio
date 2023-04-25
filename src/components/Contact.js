import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hero from "./Hero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [warning, SetWarning] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
      console.log(fullName);
    } else if (name === "email") {
      SetEmail(value);
    } else {
      SetMessage(value);
    }
  };

  const handleLeave = (e) => {
    if (e.target.value === "") {
      SetWarning(true);
    } else {
      SetWarning(false);
    }
  };

  return (
    <Container className="p-5" id="contact">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Contact Me:</h2>
        <Form>
          <Form.Control
            value={fullName}
            name="fullName"
            onChange={handleChange}
            onBlur={handleLeave}
            type="text"
            placeholder="Name"
            className={`mb-3 form-input ${warning ? "form-input-warning" : ""}`}
          />
          <Alert
            variant="danger"
            className={`${warning ? "input-warning" : "input-alert"}`}
          >
            Please complete this field
          </Alert>

          <Form.Control
            value={email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="mb-3"
          />

          <Form.Control
            value={message}
            name="message"
            onChange={handleChange}
            type="textarea"
            placeholder="Message"
            className="mb-3"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Contact;
