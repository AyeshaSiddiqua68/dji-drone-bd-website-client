import React from 'react';
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const RankingReview = (props) => {
  const { name, address, img, description, rating } = props.ranking;
  return (
    <Card style={{ minHeight: "375px" }} className="my-4">
      <Card.Img variant="top" src={img} width="60" />
      <Card.Body className="text-center">
        <h5>
          {name} <br />
          <span>{address}</span>
        </h5>
        <h6>
          Rating:
          <Rating
            className="text-warning"
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={rating}
            readonly
          />{" "}
          {rating}
        </h6>
        <Card.Text>{description?.slice(0, 150)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RankingReview;