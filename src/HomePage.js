import React from 'react';

//import the Header component
import Header from './components/Header';
//import the AlbumList component
import AlbumList from './components/AlbumList';

//import Bootstrap stuff we're using
import Container from 'react-bootstrap/Container';

function Home(props) {
  //render interface
  return (
    <Container >
      <Header title={props.albums.title} />
      <AlbumList albums={props.albums.albums} className="justify-content-center" />
    </Container>
  );
}

export default Home;