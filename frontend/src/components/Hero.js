import React, { useState } from "react";
import { Jumbotron, Container, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import SearchCard from "./SearchCard";
import axios from "axios";

const Hero = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyB8Zx9FNPFnbXntQLnLu8pLxIqYCoT-AnA"
  );

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
      .then((data) => setResult(data.data.items));
  }

  return (
    <main>
      <Jumbotron fluid>
        <Container style={{ textAlign: "center" }}>
          <h1>(React) Google Books Search</h1>
          <p>Search for and Save Books of Interest</p>
          <div>
            <Form onSubmit={handleSubmit} inline>
              <FormControl
                onChange={handleChange}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </Container>
      </Jumbotron>
        <Container>
          <Row>
            {result.map((book) => (
              <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                <SearchCard book={book} />
              </Col>
            ))}
          </Row>
      </Container>
    </main>
  );
};

export default Hero;
