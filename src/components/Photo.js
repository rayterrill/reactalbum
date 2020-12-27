import React from 'react';
import Card from 'react-bootstrap/Card';

import './Album.css';

function Photo(props) {
  return (
    <Card key={props.title} className="mb-3" >
      <Card.Img src={process.env.PUBLIC_URL + "/photos/" + props.album + "/" + props.name + '_thumb.jpg'} />
      <Card.ImgOverlay className="d-flex align-items-end">
        <Card.Title>{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Photo;