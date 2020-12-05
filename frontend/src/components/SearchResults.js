import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchCard from "./SearchCard";

const SearchResults = (props) => {
  const books = [
    {
      authors: ["Suzanne Collins"],
      description:
        "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image:
        "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link:
        "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games",
    },
    {
      authors: ["Suzanne Collins"],
      description:
        "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image:
        "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link:
        "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games",
    },
  ];

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
            <SearchCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
