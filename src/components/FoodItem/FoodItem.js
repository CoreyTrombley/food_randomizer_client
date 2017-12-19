import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

export default (props) => {
  const displayAddress = props.suggestion.location.display_address.map((address, idx) => <CardText key={idx}>{address}</CardText>);
  return (
    <Card>
      <CardImg top width="100%" src={props.suggestion.image_url} alt={props.suggestion.name}  />
      <CardBody>
        <a href={props.suggestion.url}>
          <CardTitle>{props.suggestion.name}</CardTitle>
        </a>
        <CardSubtitle>{props.suggestion.display_phone}</CardSubtitle>
        <CardText>Rating: {props.suggestion.rating}, {props.suggestion.review_count} Reviews {props.suggestion.price} </CardText>
        <div>{displayAddress}</div>
      </CardBody>
    </Card>
  );
}
