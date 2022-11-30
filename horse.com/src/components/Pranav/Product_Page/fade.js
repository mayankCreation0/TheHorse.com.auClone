import { Fade } from '@chakra-ui/react'
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Button, Box } from '@chakra-ui/react';
import { BsArrowDown } from "react-icons/bs"
import { Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

export function FadeEx({getfetchData}) {
  const { isOpen, onToggle } = useDisclosure();

  let getDatafun=useSelector((storeData)=>storeData.getDatafun);
  let dispatch=useDispatch();

  const handle = (value) => {
    

    getDatafun(`http://localhost:3001/posts?_sort=price&_order=${value}`,dispatch);
     
    

  }

  return (
    <>

      <Button display="flex" alignItems="center" padding="5px" fontSize="15px" onClick={onToggle} border="none" bg="none"> <Text marginRight="7px" fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".15em" color='#545540'>Sort By</Text><BsArrowDown /></Button>

      <Fade in={isOpen} >
        <Box
          p="10px"
          color='white'
          mt='4'
          bg='#545540'

          shadow='md'
          width="140%"
          display="flex"
          flexDirection="column"
          gap="10px"
          fontFamily="Canela,Times,serif" position="absolute" zIndex="9999 "
        >
          <Text   onClick={(e) => handle("asc")}>Best Selling</Text>
          <Text onClick={()=>handle("asc")}>Price Low to High</Text>
          <Text  onClick={()=>handle("desc")}>Price High to Low</Text>

        </Box>
      </Fade>
    </>
  )
}