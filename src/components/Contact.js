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
  const [emailWarning, SetEmailWarning] = useState(false);
  const [wrongEmailFormat, SetWrongEmailFormat] = useState(false);
  const [messageWarning, SetMessageWarning] = useState(false);

  // check email format
  // source: https://mailtrap.io/blog/validate-emails-in-react/
  const checkEmail = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      SetWrongEmailFormat(false);
    } else {
      SetWrongEmailFormat(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      SetEmail(value);
    } else {
      SetMessage(value);
    }
  };

  const handleLeave = (e) => {
    const { name, value } = e.target;

    // Check if email is incorrect format
    if (name === "email") {
      checkEmail();
    }

    // Check if fields are empty
    if (name === "fullName" && value === "") {
      SetWarning(true);
    } else {
      SetWarning(false);
    }

    if (name === "email" && value === "") {
      SetEmailWarning(true);
    } else {
      SetEmailWarning(false);
    }

    if (name === "message" && value === "") {
      SetMessageWarning(true);
    } else {
      SetMessageWarning(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="p-5" id="contact">
      <Hero currentSection={props.currentSection} />
      <Row className="mt-5">
        <h2>Contact Me:</h2>
        <Form onSubmit={handleSubmit}>
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
            onBlur={handleLeave}
            type="email"
            placeholder="Email"
            className={`mb-3 form-input ${
              emailWarning ? "form-input-warning" : ""
            }`}
          />
          <Alert
            variant="danger"
            className={`${emailWarning ? "input-warning" : "input-alert"}`}
          >
            Please complete this field
          </Alert>
          {wrongEmailFormat ? (
            <Alert
              variant="danger"
              className={`${
                wrongEmailFormat ? "input-warning" : "input-alert"
              }`}
            >
              Please check your email address
            </Alert>
          ) : (
            <div></div>
          )}

          <Form.Control
            value={message}
            name="message"
            onChange={handleChange}
            onBlur={handleLeave}
            type="textarea"
            placeholder="Message"
            className={`mb-3 form-input ${
              messageWarning ? "form-input-warning" : ""
            }`}
            style={{ height: "100px" }}
          />
          <Alert
            variant="danger"
            className={`${messageWarning ? "input-warning" : "input-alert"}`}
          >
            Please complete this field
          </Alert>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Contact;
