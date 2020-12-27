import React from 'react';

import { useParams } from "react-router-dom";

//import the Header component
import Header from './components/Header';

//import Bootstrap stuff we're using
import Container from 'react-bootstrap/Container';

import PhotoList from './components/PhotoList';

function Album(props) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  //render interface
  return (
    <Container >
      <Header title={props.albums.title + " - " + id } />
      <PhotoList albums={props.albums} title={id} />
    </Container>
  );
}

export default Album;