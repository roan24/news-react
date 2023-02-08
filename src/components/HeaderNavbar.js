import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const HeaderNavbar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">News Site</Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
