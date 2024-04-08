import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import AlbumCard from './AlbumCard';
import Carousel from './Carousel';

function SongsLayout() {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);

    // Fetch songs data
    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs: ', error);
            }
        };

        fetchSongs();
    }, []);

    // Fetch genres data
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
                // Extract the array from the response object
                const genresArray = response.data.data;
                setGenres(genresArray);
            } catch (error) {
                console.error('Error fetching genres: ', error);
            }
        };
    
        fetchGenres();
    }, []);
    

    // Filter songs by genre
    // Filter songs by genre key
    // Filter songs by genre
const filteredSongs = selectedTab === 0
? songs
: songs.filter(song => {
    // Ensure the genre at the selected index exists before accessing its key
    const genre = genres[selectedTab - 1];
    return genre ? song.genre.key === genre.key : false;
});


    // Handle tab change
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div style={{ background: '#121212', padding: '1rem' }}>
            <h2 style={{ color: '#FFF', margin: '4px 16px' }}>Songs</h2>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="genre tabs">
                <Tab label="All" style={{ color: '#FFFFFF'}}/>
                {genres.map((genre, index) => (
                <Tab key={genre.key} label={genre.label} style={{ color: '#FFFFFF'}}/>
                ))}
            </Tabs>

            <Carousel
                slidesToShow={4}
                autoPlay={false} // Assuming you want to control the carousel manually
            >
                {filteredSongs.map((song) => (
                    <AlbumCard
                        key={song.id}
                        albumImage={song.image}
                        follows={song.likes} // Assuming the songs data has a 'follows' field
                        albumName={song.title}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default SongsLayout;
