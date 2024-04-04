import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const EditChessPlayerForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        birth_date: '',
        world_ch_won: '',
        profile_url: '',
        image_url: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/chess/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/chess/${id}`, formData);
            alert('Player updated successfully!');
        } catch (error) {
            console.error('Error updating player:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>Edit Chess Player</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Birth Date"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="World Championships Won"
                        name="world_ch_won"
                        value={formData.world_ch_won}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Profile URL"
                        name="profile_url"
                        value={formData.profile_url}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Image URL"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                        Update Player
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default EditChessPlayerForm;
