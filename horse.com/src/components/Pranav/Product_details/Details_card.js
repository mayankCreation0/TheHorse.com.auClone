import React, { useEffect } from 'react'

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, color, Container } from '@chakra-ui/react'
import { Flex, Spacer, Box, GridItem } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import proDetail_action from '../action/ProDetail_action';
import { Grid } from "@chakra-ui/react"
import HalfRating from './Rating';
import SetRating from '../action/SetRating';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { BsArrowDown } from "react-icons/bs";
import CartAction from '../action/CartAction';


function Details_card() {

    let dispatch = useDispatch();

    let id = useParams();


    let showData = useSelector((storeData) => storeData.ProductDetail);
    let ans = useSelector((storeData) => storeData.cartData);
     

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

                    <Box>
                        <Box h="80%" w="100%">


                            <Spacer />
                            <Image
                                src={showData.img1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg' w="100%" height="100%"
                            />


                        </Box>


                    </Box>


                </GridItem>
                <GridItem w='100%'>

                    <Container w="70%" margin="auto" marginTop="220px">

                        <Box>
                            <Box h="80%" w="100%">

                                <Box p='1' marginBottom="8px" fontFamily="Canela,Times,serif" fontSize="30px" color="#545540" fontWeight="400" letterSpacing="0.04em">
                                    {showData.title}
                                </Box>

                                <Stack p="4" spacing='20' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" >
                                    <Flex>

                                        <Box p='4' >
                                            $ {showData.price}
                                        </Box>
                                        <Spacer />

                                        <HalfRating rating={showData.rating} />
                                        <Text margin="5px 0px 0px 10px" >50 Review</Text>

                                    </Flex>



                                </Stack>



                                <Stack mt='6' spacing='8' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px" borderTop="1px solid grey">


                                    <Text pt="35px" marginBottom="30px">
                                        {showData.description}
                                    </Text>
 
                                   

                                    <Button  onClick={(e)=>{
                                        CartAction(showData, dispatch);
                                    
                                    }} onMouseOver={(e)=>{
                                        e.target.style.backgroundColor="#545540"
                                        e.target.style.cursor="pointer"
                                    }}  onMouseOut={(e)=>{
                                        e.target.style.backgroundColor="#7596B8"
                                    }}  transition="background-color 0.5s ease-in-out" color="white" fontFamily="AtlasGrotesk,Helvetica,san-serif" border="none" fontSize="15px" letterSpacing="0.04em" fontWeight="400" lineHeight="1.4" padding="15px" bg="#7596B8" borderRadius="30px" >Add to Cart</Button>
                                    <br></br>


                                </Stack>

                                <Container w="70%" m="auto" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px"  >

                                    <Text p="10px">Make 4 payments of $24.98 with</Text>
                                    <Text p="10px">Make 6 payments of $16.65 with</Text>

                                </Container>

                            </Box>


                        </Box>

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
                <GridItem w='100%' display="flex" flexDirection="column" gap="10px" marginTop="20px" >

                    <Accordion allowMultiple >
                        <AccordionItem>
                            <h2>
                                <AccordionButton border="none" borderTop="1px solid grey" borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="5px" alignItems="center" justifyContent="center">
                                        <span>SPECIFICATIONS </span> <span><BsArrowDown fontSize="16px" /></span>
                                    </Box>


                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="13px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" textAlign="center" padding="15px" w="90%" margin="auto" lineHeight="1.4">
                                {/* Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours */}
                                Movement

                                Japanese Quartz Miyota 2035

                                Case

                                Stainless Steel Bezel, Case & Caseback

                                Case Size

                                41mm

                                Resistance

                                Case Water Resistant 20ATM (Waterproof to 200 metres)

                                Strap

                                100% Webbed Nylon

                                Strap Dimensions

                                Length: 120mm / 90mm

                                Width: 22mm
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                    <Accordion allowMultiple >
                        <AccordionItem>
                            <h2>
                                <AccordionButton border="none"  borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="5px" alignItems="center" justifyContent="center">
                                        <span>NEED HELP? </span> <span><BsArrowDown fontSize="16px" /></span>
                                    </Box>


                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="13px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" textAlign="center" padding="15px" w="90%" margin="auto" lineHeight="1.4">
                                {/* Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours */}
                                Movement

                                Japanese Quartz Miyota 2035

                                Case

                                Stainless Steel Bezel, Case & Caseback

                                Case Size

                                41mm

                                Resistance

                                Case Water Resistant 20ATM (Waterproof to 200 metres)

                                Strap

                                100% Webbed Nylon

                                Strap Dimensions

                                Length: 120mm / 90mm

                                Width: 22mm
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                    <Accordion allowMultiple >
                        <AccordionItem>
                            <h2>
                                <AccordionButton border="none"   borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="5px" alignItems="center" justifyContent="center">
                                        <span>SHIPPING & RETURNS </span> <span><BsArrowDown fontSize="16px" /></span>
                                    </Box>


                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="13px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" textAlign="center" padding="15px" w="90%" margin="auto" lineHeight="1.4">
                                {/* Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours */}
                                Movement

                                Japanese Quartz Miyota 2035

                                Case

                                Stainless Steel Bezel, Case & Caseback

                                Case Size

                                41mm

                                Resistance

                                Case Water Resistant 20ATM (Waterproof to 200 metres)

                                Strap

                                100% Webbed Nylon

                                Strap Dimensions

                                Length: 120mm / 90mm

                                Width: 22mm
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>

                </GridItem>


            </Grid>
 

        </>
    )
}

export default Details_card