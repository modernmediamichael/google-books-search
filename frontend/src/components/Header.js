import React from "react"
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <LinkContainer to="/">
                 <Nav.Link>Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/saved">
                <Nav.Link>Saved</Nav.Link>
              </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
