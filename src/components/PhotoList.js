import React from 'react';

//import the Album component
import Photo from './Photo';

function PhotoList(props) {
  if (props.albums.albums) {
    var album = props.albums.albums.find(x => x.title === props.title)
  }

  return (
    <div className="card-deck text-center mx-auto">
    {album ? (
      album.photos.map((item) => (
        <Photo album={props.title} name={item.name} title={item.title} key={props.title + "_" + item.name} />
      ))
    ) : (
      <h1>Loading...</h1>
    )
    }
    </div>
  );
}

export default PhotoList;