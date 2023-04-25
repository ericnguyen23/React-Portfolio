import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/App.css";

function NavList() {
  return (
    <Nav className="me-auto">
      <Nav.Link href="#about">About Me</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav>
  );
}

export default NavList;
