import React from "react";
import NavList from "./NavList";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-4">
        <Container fluid>
          <Navbar.Brand href="#home">Eric's Portfolio</Navbar.Brand>
          <NavList />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
