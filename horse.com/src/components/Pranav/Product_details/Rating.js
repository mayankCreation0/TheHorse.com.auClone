import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BasicRating(props) {

      let rat=useSelector((state)=>state.rating);
      const[rati,setRati]=useState(rat);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >   
      <Rating name="read-only" value={4.2} readOnly />
      
    </Box>
  );
}