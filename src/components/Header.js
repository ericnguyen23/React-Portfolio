import React from "react";
import NavList from "./NavList";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Navbar variant="dark" className="p-4 dark-blue" id="top">
      <Container fluid className="dark-blue">
        <Navbar.Brand
          href="#home"
          className={`${props.current === "home" ? "isActiveHome" : ""} p-2`}
        >
          Eric's Portfolio
        </Navbar.Brand>
        {/* receiving props from parent "App.js" and passing it to NavList */}
        <NavList navChangeSec={props.changeSec} navCurrentSec={props.current} />
      </Container>
    </Navbar>
  );
}

export default Header;
