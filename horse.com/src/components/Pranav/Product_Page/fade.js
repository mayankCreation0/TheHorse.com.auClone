import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Button,Box } from '@chakra-ui/react';
import {BsArrowDown} from "react-icons/bs"

export function FadeEx() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <>

        <Button onClick={onToggle} border="none" bg="none">Sort By <BsArrowDown/></Button>
        <Button onClick={onToggle} border="none" bg="none">Filter <BsArrowDown/></Button>  
        <Fade in={isOpen}>
          <Box
             p="10px"
            color='white'
            mt='4'
            bg='#545540'
             
            shadow='md'
            width="100%"
            display="flex"
            flexDirection="column"
            gap="10px"
          >
           <text>Price Low to High</text> 
           <text>Price High to Low</text> 
           <text>Best Selling</text> 
          </Box>
        </Fade>
      </>
    )
  }