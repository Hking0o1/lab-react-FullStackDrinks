import React from 'react';
import { Link } from 'react-router-dom';
import beerImage1 from '../assets/beers.png';
import beerImage2 from '../assets/new-beer.png';
import beerImage3 from '../assets/random-beer.png';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-container">
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '48px', color: '#333' }}>Our Beers</h1>
                <p style={{ fontSize: '26px', color: '#666' }}>Explore a wide variety of beers from around the world.</p>
            </header>
            <div className="beer-item">
                <img src={beerImage1} alt="Beer 1" className="beer-image" />
                <p>Discover our finest selection of craft beers.</p>
                <Link to="/beers">Explore All Beers</Link>
            </div>
            <div className="beer-item">
                <img src={beerImage2} alt="Beer 2" className="beer-image" />
                <p>Feeling adventurous? Try a random beer!</p>
                <Link to="/random-beer">Get a Random Beer</Link>
            </div>
            <div className="beer-item">
                <img src={beerImage3} alt="Beer 3" className="beer-image" />
                <p>Have a unique recipe? Add your own beer to our collection.</p>
                <Link to="/new-beer">Create New Beer</Link>
            </div>
        </div>
    );
}

export default HomePage;