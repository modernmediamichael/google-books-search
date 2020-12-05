import React from "react";
import { Jumbotron, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <Jumbotron fluid>
      <Container style={{ textAlign: 'center' }}>
        <h1>(React) Google Books Search</h1>
        <p>
          Search for and Save Books of Interest
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
