import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
function RandomBeer() {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
                setBeer(response.data);
            } catch (error) {
                console.error('Error fetching random beer:', error);
            }
        };

        fetchRandomBeer();
    }, []);

    if (!beer) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '24px' }}>Loading...</div>;
    }

    return (<>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <img src={beer.image_url} alt={beer.name} style={{ height: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            <h1 style={{ marginTop: '20px', fontSize: '28px', color: '#333' }}>{beer.name}</h1>
            <h3 style={{ fontSize: '20px', color: '#555' }}>{beer.tagline}</h3>
            <p style={{ fontSize: '16px', color: '#666' }}><strong>First Brewed:</strong> {beer.first_brewed}</p>
            <p style={{ fontSize: '16px', color: '#666' }}><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
            <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', textAlign: 'center' }}>{beer.description}</p>
            <p style={{ fontSize: '16px', color: '#666' }}><strong>Contributed by:</strong> {beer.contributed_by}</p>
        </div>
        </>
    );
}

export default RandomBeer;