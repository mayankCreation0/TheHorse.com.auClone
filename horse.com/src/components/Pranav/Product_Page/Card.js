import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer,Box,GridItem } from '@chakra-ui/react'
 
 

 


function Tard({ img, title, price, description, rating, discount }) {
    return (
        <GridItem>
            
            <Card> 
            <CardBody h="80%" w="100%">
           <Image
                    src={img}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg' w="100%" height="100%"
                />
               
                <Stack mt='6' spacing='3' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px">
                    <Flex>
                        <Box p='4' bg='red.400'>
                            {title}
                        </Box>
                        <Spacer />
                        <Box p='4' bg='green.400'>
                            $ {price}
                        </Box>
                    </Flex>
                     
                    <Text p="5px">
                        {description}
                    </Text>


                    <Text color="#a55741" p="5px" >
                        {discount}% off at checkout
                    </Text>

                </Stack>
            </CardBody>
            

            </Card>
            
            
        </GridItem>
    )
}

export default Tard