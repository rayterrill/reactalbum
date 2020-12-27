import React from 'react';

//import the Album component
import Album from './Album';

function AlbumList(props) {
  return (
    <div className="card-deck text-center mx-auto">
    {props.albums ? (
      props.albums.map((item) => (
        <Album key={item.title} title={item.title} header={item.header} />
      ))
    ) : (
      <h1>Loading Albums...</h1>
    )}
    </div>
  );
}

export default AlbumList;