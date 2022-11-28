import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Button,Box } from '@chakra-ui/react';

export function FadeEx() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <>
        <Button onClick={onToggle}>Sort By</Button>
        <Fade in={isOpen}>
          <Box
             p="10px"
            color='white'
            mt='4'
            bg='#545540'
             
            shadow='md'
            width="300px"
          >
           <h3>Price Low to High</h3> 
           <h3>Price High to Low</h3> 
           <h3>Best Selling</h3> 
          </Box>
        </Fade>
      </>
    )
  }