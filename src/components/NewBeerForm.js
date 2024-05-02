import React, { useState } from 'react';
import axios from 'axios';
import './HomePage.css'
function NewBeerForm() {
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'attenuation_level' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
            if (response.status === 200) {
                alert('New beer successfully saved to database!');
                setFormData({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: 0,
                    contributed_by: ''
                });
            }
        } catch (error) {
            alert('Failed to save the beer. Error: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='NewBeerForm'>
            <h1>Add a new Beer</h1>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} placeholder="Tagline" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} placeholder="First Brewed" />
            <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} placeholder="Brewers Tips" />
            <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} placeholder="Attenuation Level" />
            <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} placeholder="Contributed By" />
            <button type="submit">Create Beer</button>
        </form>
    );
}

export default NewBeerForm;