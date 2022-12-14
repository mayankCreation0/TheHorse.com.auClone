import { Fade } from '@chakra-ui/react'
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Button, Box } from '@chakra-ui/react';
import { BsArrowDown } from "react-icons/bs"
import { Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

export function FadeEx({type }) {
  
  let category=type.toLowerCase()

  const { isOpen, onToggle } = useDisclosure();

  let getDatafun = useSelector((storeData) => storeData.getDatafun);
  let dispatch = useDispatch();

  const handle = (value) => {


    getDatafun(`https://mock-server-app-fqpl.onrender.com/posts/?TAG2=${category}&_sort=price&_order=${value}`, dispatch);

  }
  const handle1 = (value) => {


    getDatafun(`https://mock-server-app-fqpl.onrender.com/posts/?TAG2=${category}&_sort=rating&_order=${value}`, dispatch);

  }

  return (
    <>

      <Button display="flex" alignItems="center" padding="5px" fontSize="16px" onClick={onToggle} border="none" bg="none"> <Text marginRight="7px" fontFamily="Canela,Times,serif" fontWeight="600" letterSpacing=".15em" color='#545540' marginTop="16px">Sort By</Text><BsArrowDown /></Button>

      <Fade in={isOpen} >
        <Box
          p="25px"
          color='white'
          mt='1'
          bg='#545540'
          ml="-30px"
          shadow='md'
          width="180%"
          display="flex"
          flexDirection="column"
          fontSize="18px"
          fontFamily="Canela,Times,serif" position="absolute" zIndex="9999 "
          onMouseOver={(e) => e.target.style.cursor = "pointer"}
        >
          <Text onClick={(e) => handle1("desc")}>Best Selling</Text>
          <Text onClick={() => handle("asc")}>Price Low to High</Text>
          <Text onClick={() => handle("desc")}>Price High to Low</Text>

        </Box>
      </Fade>
    </>
  )
}