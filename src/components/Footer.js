import React from "react";
import Container from "react-bootstrap/Container";

function Footer(props) {
  return (
    <Container fluid className="p-5" id="footer">
      <p>
        Eric Nguyen | <a href="https://github.com/ericnguyen23">Github</a> |{" "}
        <a href="https://www.linkedin.com/in/ericnguyen23/">LinkedIn</a>
      </p>
      <p>
        <a href="#top" onClick={props.removeActive}>
          ^ Top
        </a>
      </p>
    </Container>
  );
}

export default Footer;
