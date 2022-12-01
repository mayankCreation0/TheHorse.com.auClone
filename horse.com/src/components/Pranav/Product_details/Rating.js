import * as React from 'react';
import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// import * as React from 'react';
// import Rating from '@mui/material/Rating';

// import Rating from '@mui/material/Rating';
// or
import { Rating } from '@mui/material';

import Stack from '@mui/material/Stack';

export default function HalfRating({rating}) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={rating} precision={0.5} />
    </Stack>
  );
}