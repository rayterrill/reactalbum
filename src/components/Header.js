import React from 'react';

//import Bootstrap stuff we're using
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header(props) {
  //render interface
  return (
    <Jumbotron>
      <h1>{props.title}</h1>
    </Jumbotron>
  );
}

export default Header;