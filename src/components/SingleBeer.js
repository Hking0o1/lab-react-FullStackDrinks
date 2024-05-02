import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function SingleBeer() {
    const [beer, setBeer] = useState(null);
    const { beerId } = useParams();

    useEffect(() => {
        const fetchBeer = async () => {
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
                setBeer(response.data);
            } catch (error) {
                console.error("Error fetching beer details:", error);
            }
        };

        fetchBeer();
    }, [beerId]);

    if (!beer) {
        return <div>Loading...</div>;
    }

    return (<>
        <Header style={styles.Header}/>
        <div style={styles.container}>
            
            <img src={beer.image_url} alt={beer.name} style={styles.image} />
            <div style={styles.infoContainer}>
                <h1 style={styles.name}>{beer.name}</h1>
                <h3 style={styles.tagline}>{beer.tagline}</h3>
                <p style={styles.detail}><strong>First Brewed:</strong> {beer.first_brewed}</p>
                <p style={styles.detail}><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
                <p style={styles.description}>{beer.description}</p>
                <p style={styles.contributed}><strong>Contributed by:</strong> {beer.contributed_by}</p>
            </div>
        </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        backgroundColor: '#fff'
    },
    image: {
        margin:'10px',
        height: '300px',
        borderRadius: '10px'
    },
    infoContainer: {
        textAlign: 'center'
    },
    name: {
        color: '#003366'
    },
    tagline: {
        color: '#0077CC'
    },
    detail: {
        color: '#555',
        fontSize: '16px'
    },
    description: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#666',
        textAlign: 'justify'
    },
    contributed: {
        fontStyle: 'italic',
        fontSize: '12px'
    },
    Header: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#003366',
        color: '#fff'
        }
};

export default SingleBeer;