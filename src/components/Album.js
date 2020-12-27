import React from 'react';
import Card from 'react-bootstrap/Card';

import './Album.css';

function Album(props) {
  return (
    <Card key={props.title} className="mb-3" >
      <a href={"/" + props.title}><Card.Img src={process.env.PUBLIC_URL + "/photos/" + props.title + "/" + props.header + '_thumb.jpg'} />
      <Card.ImgOverlay className="d-flex align-items-end">
        <Card.Title>{props.title}</Card.Title>
      </Card.ImgOverlay>
      </a>
    </Card>
  );
}

export default Album;