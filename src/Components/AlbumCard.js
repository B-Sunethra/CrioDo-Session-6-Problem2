import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const OuterCardStyles = {
    height: 232,
    width:130,
    // margin: '0px 20px' 
}

const StyledCard = styled(Card)({
    height: 210,
    width:"100%",
  position: 'relative',
});

const StyledCardMedia = styled(CardMedia)({
  height: 170,
  width:"100%"
});

const StyledChip = styled(Chip)({
  padding: '4px 8px',
  margin: '4px 8px',
  left: '8px',
  gap:'1px',
  right: '1rem',
  background: '#121212',
  color:'#FFFFFF',
  lineHeight:'15px',
  fontFamily:'poppins',
  fontSize:'10px',
  fontWeight:'400'
});

const StyledTypography = styled(Typography)({
  fontFamily: 'poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight:'21px',
  color: '#FFFFFF'
});

export default function AlbumCard({ albumImage, follows, albumName }) {

    const style = {
        display: 'flex',
        flexDirection: 'column',        
        alignItems: 'center',             
      };
    
  return (
    <div style={OuterCardStyles}>
    <StyledCard>
      <StyledCardMedia
        image={albumImage}
        title="Album Image"
      />

      <StyledChip
        label={`${follows} Follows`}
      />
      </StyledCard>  

      <StyledTypography variant="h5" component="h2">
          {albumName}
      </StyledTypography>

      </div>
    
  );
}
