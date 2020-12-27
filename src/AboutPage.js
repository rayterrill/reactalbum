import React from 'react';

//import the Header component
import Header from './components/Header';

//import Bootstrap stuff we're using
import Container from 'react-bootstrap/Container';

function About(props) {
  //render interface
  return (
    <Container >
      <Header title={props.albums.title} />
      <h1>About</h1>
    </Container>
  );
}

export default About;