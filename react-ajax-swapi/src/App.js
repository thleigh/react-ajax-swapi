import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import ShipsHome from './ShipsHome'
import StarshipsPage from './StarshipsPage'

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={ShipsHome} />
        <Route path="/StarshipsPage" render={({location}) => <StarshipsPage location={location}/>}/>
    </div>
    </Router>
  );
}

export default App;
