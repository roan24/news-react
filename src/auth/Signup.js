import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Card style={{ width: "50rem" }}>
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/" className="btn btn-outline-primary btn-lg">
              Cancel
            </Link>
            <Button variant="primary" type="submit" className="btn btn-lg m-2">
              Sign up
            </Button>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
