import React, { useEffect } from 'react'

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, color, Container } from '@chakra-ui/react'
import { Flex, Spacer, Box, GridItem } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import proDetail_action from '../action/ProDetail_action';
import { Grid } from "@chakra-ui/react"
import BasicRating from './Rating';
import SetRating from '../action/SetRating';


function Details_card() {

    let dispatch = useDispatch();

    let id = useParams();


    let showData = useSelector((storeData) => storeData.ProductDetail);

    SetRating(showData.rating, dispatch);




    useEffect(() => {

        getData(`http://localhost:3001/posts/?id=${id.id}`);


    }, [])

    const getData = (url) => {
        fetch(url).then((res) => res.json()).then((data1) => {
            proDetail_action(data1[0], dispatch)


        })
    }

    return (
        <>
            <Box textAlign="center" color="white" bg="black" height="60px">
                <Text padding="15px">NavBar</Text>
            </Box>
            <ul style1="list-style-type:circle" style={{ display: "flex", gap: "30px", padding: "20px", fontSize: "11px", fontWeight: "400", width: "95%", margin: "auto", fontFamily: "AtlasGrotesk,Helvetica,san-serif", textTransform: "uppercase", letterSpacing: "0.15em", color: "#545540" }}>
                <li>The Coast</li>
                <li>
                    The Coast</li>
            </ul>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" margin="auto">
                <GridItem w='100%'>

                    <Card>
                        <CardBody h="80%" w="100%">


                            <Spacer />
                            <Image
                                src={showData.img1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg' w="100%" height="100%"
                            />


                        </CardBody>


                    </Card>


                </GridItem>
                <GridItem w='100%'>

                    <Container w="70%" margin="auto" marginTop="220px">

                        <Card>
                            <CardBody h="80%" w="100%">

                                <Box p='4' fontFamily="Canela,Times,serif" fontSize="30px" color="#545540" fontWeight="400" letterSpacing="0.04em">
                                    {showData.title}
                                </Box>

                                <Stack mt='6' spacing='20' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px" >
                                    <Flex>

                                        <Box p='4' bg='green.400'>
                                            $ {showData.price}
                                        </Box>
                                        <Spacer />

                                        <BasicRating value={showData.rating} /> <Text margin="5px 0px 0px 10px" >50 Review</Text>

                                    </Flex>



                                </Stack>



                                <Stack mt='6' spacing='20' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px" borderTop="1px solid grey">


                                    <Text pt="35px" >
                                        {showData.description}
                                    </Text>

                                    <Button color="#FFFFFF" fontFamily="AtlasGrotesk,Helvetica,san-serif" border="none" fontSize="13px" letterSpacing="0.04em" fontWeight="400" lineHeight="1.4" padding="15px" bg="#7596B8" borderRadius="30px" >Add to Cart</Button>
                                    <br></br>
                                  

                                </Stack>

                                <Container w="50%" m="auto" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px"  >

                                    <Text p="10px">Make 4 payments of $24.98 with</Text>
                                    <Text p="10px">Make 6 payments of $16.65 with</Text>

                                </Container>

                            </CardBody>


                        </Card>

                    </Container>

                </GridItem>

            </Grid>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" margin="auto" marginTop="25px">
                <GridItem w='100%'>

                    <Box display="flex" flexDirection="column" gap="20px" color="#545540" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" marginTop="10px">

                        <Text>
                            The Coast is our first waterproof watch. Surf rated at 20 ATM (also known as the “diver’s setting” known for diving and high-speed sporting), it’s designed for durability and is fitted with a sweat-friendly nylon strap in your choice of tan, olive and black.


                        </Text>
                        <Text>
                            This model features a luminous dial for excellent visibility, with Japanese Quartz Movement housed in a 41mm stainless-steel case with thick sapphire crystal glass for ultimate protection and longevity.
                        </Text>

                    </Box>


                </GridItem>
                <GridItem w='100%'>


                </GridItem>


            </Grid>








        </>
    )
}

export default Details_card