import React from "react";
import Nav from "react-bootstrap/Nav";

function NavList(props) {
  return (
    <Nav className="me-auto">
      <Nav.Link
        href="#about"
        onClick={props.navChangeSec}
        className={props.navCurrentSec === "About Me" ? "isActive" : ""}
      >
        About Me
      </Nav.Link>
      <Nav.Link
        href="#portfolio"
        onClick={props.navChangeSec}
        className={props.navCurrentSec === "Portfolio" ? "isActive" : ""}
      >
        Portfolio
      </Nav.Link>
      <Nav.Link
        href="#contact"
        onClick={props.navChangeSec}
        className={props.navCurrentSec === "Contact" ? "isActive" : ""}
      >
        Contact
      </Nav.Link>
      <Nav.Link
        href="#resume"
        onClick={props.navChangeSec}
        className={props.navCurrentSec === "Resume" ? "isActive" : ""}
      >
        Resume
      </Nav.Link>
    </Nav>
  );
}

export default NavList;
