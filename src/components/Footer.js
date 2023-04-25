import React from "react";
import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";

function Footer(props) {
  return (
    <Container fluid className="p-5" id="footer">
      <p>
        Eric Nguyen |{" "}
        <a href="https://github.com/ericnguyen23">
          <FaGithub />
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/ericnguyen23/">
          <FaLinkedin />
        </a>
      </p>
      <p>
        <a href="#top" onClick={props.removeActive}>
          <FaChevronUp />
        </a>
      </p>
    </Container>
  );
}

export default Footer;
