import React, { useState,useEffect } from 'react'
import AlbumCard from './AlbumCard'
import axios from 'axios'


function AlbumLayout() {

    const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Function to fetch the data and parse it
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        // Assuming the data structure includes a `songs` array as in the attached image
        console.log(response.data);
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    // Call the fetchData function
    fetchData();
    }, []); 

    const divStyle = {
        background: '#121212',
    }
    const headerStyle = {
        background: '#121212',
        color: 'white',
        display: 'flex',                  
        justifyContent: 'space-between', 
        flexDirection: 'row' 
    }
    const styles = {
        background: '#121212',
        display: 'flex',     // Enables flexbox
        flexDirection: 'row', // Aligns children in a row
        //justifyContent: 'space-around', // Centers the items along the main axis
        alignItems: 'center', // Centers the items along the cross axis (optional)
        flexWrap: 'wrap',    // Allows items to wrap to new line on smaller screens
        gap: '1rem',         // Space between items
        padding: '1rem'      // Padding around the entire container
      };

      const topSongsStyle = {
        color: "#FFFFFF",
        fontFamily:'poppins',
        lineHeight: '30px',
        fontSize: '20px',
        fontWeight: 600,
        margin: '4px 16px',

      }

      const collapseStyle = {
        background: '#121212',
        color: "#34C94B",
        fontFamily:'poppins',
        lineHeight: '30px',
        fontSize: '20px',
        fontWeight: 600,
        margin: '4px 16px',
        cursor: "pointer",
        border: 'none',
        backgroundColor: 'transparent', // Makes the button background transparent
        outline: 'none'
      }

  return (
    <div style={divStyle}>
    <div style={headerStyle}>
        <div style={topSongsStyle}>Top Songs</div>
        <button style={collapseStyle}>Collapse</button>
    </div>
    <div style={styles}>

    
    {songs.map((song, index) => (

          <AlbumCard key={song.id}
        albumImage={song.image}
        follows={song.follows}
        albumName={song.title}
      /> 
        
      ))}


      {/* <AlbumCard
        albumImage="https://images.pexels.com/photos/242140/pexels-photo-242140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
        follows="100"
        albumName="Bollywood Covers"
      />     */}

    </div>
    </div>
    
  )
}

export default AlbumLayout