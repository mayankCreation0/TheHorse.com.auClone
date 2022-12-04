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
import { useState } from 'react';
import MultiCarouselApp from './multiCarouselApp';
import { MdOutlineLocalShipping } from "react-icons/md"
import IconCheckboxes from './heart';
import Navbar from '../../mayankFolder/navbar/Navbar';
import Footer from '../../mayankFolder/footer/footer';


function Details_card() {

    let dispatch = useDispatch();

    let id = useParams();


    let showData = useSelector((storeData) => storeData.ProductDetail);
    let ans = useSelector((storeData) => storeData.cartData);


    SetRating(showData.rating, dispatch);


    useEffect(() => {

        getData(`http://localhost:3001/posts/?id=${id.id}`);


    }, []);

    const getData = (url) => {
        fetch(url).then((res) => res.json()).then((data1) => {
            proDetail_action(data1[0], dispatch)


        })
    }

    const handle1 = (event) => {


        let a = event.target;
        event.target.style.opacity = "0";


        setTimeout(() => {
            event.target.style.opacity = "1";
            a.src = showData.img2;
        }, 400);

    }
    const handle2 = (event) => {

        let a = event.target;
        event.target.style.opacity = "0";

        setTimeout(() => {
            event.target.style.opacity = "1";
            a.src = showData.img1;
        }, 400);

    }


    return (
        <>
            <Navbar/>
            <ul style1="list-style-type:circle" style={{ display: "flex", gap: "30px", padding: "20px", fontSize: "11px", fontWeight: "400", width: "95%", margin: "auto", fontFamily: "AtlasGrotesk,Helvetica,san-serif", textTransform: "uppercase", letterSpacing: "0.15em", color: "#545540", marginTop: "10px" }}>
                <li>The Coast</li>
                <li>
                    The Coast</li>
            </ul>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" margin="auto" marginTop="10px">
                <GridItem w='100%'>

                    <Box>
                        <Box h="80%" w="100%">


                            <Spacer />
                            <Text marginBottom="-50px" marginLeft="8px"><IconCheckboxes element={showData}/></Text>
                            <Image
                                src={showData.img1}
                                alt='Green double couch with wooden legs'
                                w="100%" height="800px"
                                onMouseOver={handle1} onMouseOut={handle2} transition="opacity 0.5s ease-in-out" transitionTimingFunction="linear"
                            />


                        </Box>


                    </Box>


                </GridItem>
                <GridItem w='100%'>

                    <Container w="70%" margin="auto" marginTop="220px" >

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



                                    <Button onClick={(e) => {



                                        Post_cartData(showData)
                                        async function Post_cartData(showData) {

                                            let update = await fetch(`http://localhost:3001/cartPage`, {
                                                method: "POST",
                                                body: JSON.stringify(showData),
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                            }).then((ans) => {


                                                if (ans.ok === false) {
                                                    alert("Already Added in Cart");
                                                }
                                                else {
                                                    fetch("http://localhost:3001/cartPage").then((res) => res.json()).then((data1) => {


                                                        CartAction(data1, dispatch);

                                                    });
                                                }

                                            })




                                        }


                                    }} onMouseOver={(e) => {
                                        e.target.style.backgroundColor = "#545540"
                                        e.target.style.cursor = "pointer"
                                    }} onMouseOut={(e) => {
                                        e.target.style.backgroundColor = "#7596B8"
                                    }} transition="background-color 0.5s ease-in-out" color="white" fontFamily="AtlasGrotesk,Helvetica,san-serif" border="none" fontSize="15px" letterSpacing="0.04em" fontWeight="400" lineHeight="1.4" padding="15px" bg="#7596B8" borderRadius="30px" >Add to Cart</Button>
                                    <br></br>


                                </Stack>

                                <Container w="70%" m="auto" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px"  >

                                    <div style={{ display: "flex" }} ><Text p="10px">Make 4 payments of $24.98 with <b>afterPay</b> </Text></div>
                                    <Text p="10px">Make 6 payments of $16.65 with <b>LAYBUY</b></Text>

                                </Container>

                                <Container display="flex" gap="40px" marginTop="50px" borderTop="1px solid grey" padding="40px" paddingTop="80px" >

                                    <Image width="40%" margin="auto" height="110px" src="https://img.freepik.com/premium-vector/fast-delivery-truck-with-motion-lines-online-delivery-express-delivery-quick-move-fast-shipping-truck-apps-websites-cargo-van-moving-fast-chronometer-fast-distribution-service-24-7_435184-218.jpg?w=2000" alt="one" />
                                    <Image width="40%" margin="auto" height="100px" src="https://static.vecteezy.com/system/resources/thumbnails/012/605/404/small/simple-and-creative-easy-return-policy-icon-badge-line-art-design-isolated-on-white-background-design-vector.jpg" alt="one" />
                                    <Image width="40%" margin="auto" height="100px" src="https://media.istockphoto.com/id/1083666684/photo/white-one-gift-box-with-red-ribbon-bow-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=Sb8RhpXOtZ7So0X4JXaQE6M5KjTjxLAApkANN0_yOIk=" alt="one" />


                                </Container>

                            </Box>


                        </Box>

                    </Container>

                </GridItem>

            </Grid>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} w="90%" margin="auto" marginTop="25px" marginBottom="100px">
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

                    <Accordion allowMultiple marginTop="5px">
                        <AccordionItem>
                            <h2 style={{ fontSize: "13px" }}>
                                <AccordionButton border="none" borderTop="1px solid grey" borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="340px" alignItems="center" justifyContent="center" >
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
                            <h2 style={{ fontSize: "13px" }}>
                                <AccordionButton border="none" borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="373px" alignItems="center" justifyContent="center" marginTop="-15px">
                                        <span>NEED HELP? </span> <span><BsArrowDown fontSize="16px" /></span>
                                    </Box>


                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="13px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" textAlign="center" padding="15px" w="90%" margin="auto" lineHeight="1.4">
                                {/* Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours */}

                                <box>

                                    <Text>Email us at info@thehorse.com.au</Text>
                                    <Text>Call us on +61 (02)9037-3921 (8:30am to 4:30pm Mon-Fri)</Text>
                                    <Text>Live chat (8:30am to 4:30pm Mon-Fri)</Text>

                                </box>



                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                    <Accordion allowMultiple >
                        <AccordionItem>
                            <h2 style={{ fontSize: "13px" }}>
                                <AccordionButton border="none" borderBottom="1px solid grey" w="80%" margin="auto" bg="none">

                                    <Box flex='1' fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" letterSpacing=".15em" color='#545540' height="30px" display="flex" gap="300px" alignItems="center" justifyContent="center" marginTop="-15px">
                                        <span>SHIPPING & RETURNS </span> <span><BsArrowDown fontSize="16px" /></span>
                                    </Box>


                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="13px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" textAlign="center" padding="15px" w="90%" margin="auto" lineHeight="1.4">
                                {/* Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours */}
                                Shipping Timeframes:

                                Express delivery within Australia: 1-2 business days.


                                Standard delivery within Australia: 2-4 business days.


                                New Zealand and International Delivery: 3-7 business days.

                                Same Day Delivery:
                                We offer a same day shipping service to customers located in the Sydney metro area.
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>

                </GridItem>


            </Grid>

            <Box h="550px" borderTop="1px solid grey" display="flex" flexDirection="column" pb="30" marginBottom="40px" marginTop="40px" w="80%" margin="auto">

                <Text p="10px" fontSize="15px" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#545540" w="90%" margin="auto" marginTop="50px" marginBottom="-30px" lineHeight="1.4">You May Also Like</Text>

                <Box ><MultiCarouselApp /></Box>

            </Box>

<Box marginTop="100px"><Footer/></Box>
 
        </>
    )
}

export default Details_card