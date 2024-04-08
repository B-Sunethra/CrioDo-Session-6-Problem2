import React, { useState,useEffect } from 'react'
import AlbumCard from './AlbumCard'
import axios from 'axios'
import Carousel from './Carousel';


function AlbumLayout({headerLeft, headerRight, fetchAPI}) {

    const [songs, setSongs] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    // Function to fetch the data and parse it
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchAPI);
        // Assuming the data structure includes a `songs` array as in the attached image
        console.log(response.data);
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    // Call the fetchData function
    fetchData();
    }, [fetchAPI]); 

    const toggleView = () => {
      setShowCarousel(prevShowCarousel => !prevShowCarousel); // Toggle the state
    };

    // const adjustedCollapseStyle = {
    //   ...collapseStyle,
    //   // Additional styles if needed
    // };

    
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

      const adjustedCollapseStyle = {
        ...collapseStyle,
        // Additional styles if needed
      };
    
  return (
<div style={divStyle}>
      <div style={headerStyle}>
        <div style={topSongsStyle}>{headerLeft}</div>
        <button style={adjustedCollapseStyle} onClick={toggleView}>
          {!showCarousel ? 'Show All' : headerRight}
        </button>
      </div>
      {showCarousel ? (
        <Carousel
        slidesToShow={4} // Example, adjust based on your design
        autoPlay={true}
        autoPlaySpeed={3000}
        infiniteLoop={true}
        showArrows={true}
      >
        {songs.map((song, index) => (
          <AlbumCard
            key={song.id}
            albumImage={song.image}
            follows={song.follows}
            albumName={song.title}
          />
        ))}
      </Carousel>
      ) : (
        <div style={styles}>
          {songs.map((song, index) => (
            <AlbumCard
              key={song.id}
              albumImage={song.image}
              follows={song.follows}
              albumName={song.title}
            />
          ))}
        </div>
      )}
    </div>

    
  )
}

export default AlbumLayout
