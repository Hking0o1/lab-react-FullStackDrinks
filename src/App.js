import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Beers from './components/Beer';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeerForm';
// Import other components

function App() {
    return ( 
        <Router>
            <Routes>
              <Route path = "/" element = { < HomePage / > }/>
              <Route path = "/beers" element = { <Beers />} />
              <Route path="/beers/:beerId" element={ <SingleBeer />} />
              <Route path="/random-beer" element={ <RandomBeer />} />
              <Route path="/new-beer" element={ <NewBeerForm />} />
            </Routes>
        </Router>
        );
    }

    export default App;