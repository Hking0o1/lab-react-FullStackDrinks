
import './Beers.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SearchInput = styled.input`
    padding: 10px;
    margin: 20px 0;
    width: 300px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
`;

const BeerList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const BeerItem = styled.div`
    background: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    width: 80%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Beers() {
    const [query, setQuery] = useState('');
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
                .then(response => response.json())
                .then(data => setBeers(data))
                .catch(error => console.error('Error fetching data: ', error));
        }
    }, [query]);

    return (
        <Container>
            <Header />
            <SearchInput
                type="text"
                placeholder="Search beers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <BeerList>
                {beers.map(beer => (
                    <BeerItem key={beer._id}>
                        <div className="beerDetails">
                            <h2 className="beerName">{beer.name}</h2>
                            <p className="beerTagline">{beer.tagline}</p>
                            <p className="beerContributor">Contributed by: {beer.contributed_by}</p>
                            <a href={`/beers/${beer._id}`} className="beerLink">View Details</a>
                        </div>
                        <div key={beer._id} className="beerItem">
                            <img src={beer.image_url} alt={beer.name} className="beerImage" />
                        </div>
                    </BeerItem>
                ))}
            </BeerList>
        </Container>
    );
}

export default Beers;