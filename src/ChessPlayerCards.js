import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ChessPlayerCard = () => {
    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/chess');
                setPlayerData(response.data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/chess/${playerData.id}`);
            alert('Player deleted successfully!');
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    };

    return (
        <Card>
            {playerData && (
                <>
                    <CardMedia
                        component="img"
                        height="300"
                        image={playerData.image_url}
                        alt={playerData.name}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {playerData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Birth Date: {playerData.birth_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            World Championships Won: {playerData.world_ch_won}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a href={playerData.profile_url} target="_blank" rel="noopener noreferrer">
                                Profile URL
                            </a>
                        </Typography>
                        <Button onClick={handleDelete} variant="contained" color="error">Delete</Button>
                    </CardContent>
                </>
            )}
        </Card>
    );
};

export default ChessPlayerCard;
