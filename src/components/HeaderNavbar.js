import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

const HeaderNavbar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>News Site</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="login">
              <Nav.Link>Log in</Nav.Link>
            </LinkContainer>
            <LinkContainer to="signup">
              <Nav.Link>Sign up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
