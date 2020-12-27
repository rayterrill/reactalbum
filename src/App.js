import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AlbumPage from './AlbumPage';

function App() {
  const [albums, setAlbums] = useState([]);

  //read json describing albums and set albums state
  useEffect(() => {
		fetch("../data/index.json")
			.then((response) => response.json())
			.then((data) => {
				setAlbums(data);
			})
  }, []);

  //render interface
  return (
    <Router>        
      <Switch>
        <Route path="/about">
          <AboutPage albums={albums}/>
        </Route>
        <Route path="/:id" children={<AlbumPage albums={albums} />} />
        <Route path="/">
          <HomePage albums={albums} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;