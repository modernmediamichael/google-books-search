import React from "react";
import { Card, Button } from "react-bootstrap";
import Truncate from "react-truncate";

const SearchCard = ({ book }) => {

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <a href={book.link}>Read more</a>
                </span>
              }
            >
              {book.description}
            </Truncate>
          </Card.Text>
          <div className="card-btn__wrapper">
            <a href={book.link}>
              <Button variant="primary">View Book</Button>
            </a>
            <a>
              <Button className="save-btn" variant="primary">
                <i class="far fa-heart"></i>
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>{" "}
    </>
  );
};

export default SearchCard;