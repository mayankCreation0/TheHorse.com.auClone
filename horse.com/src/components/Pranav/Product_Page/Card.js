import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer, Box, GridItem } from '@chakra-ui/react'

import { Link } from "react-router-dom";
import CartAction from '../action/CartAction';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react'


function Tard({elem,id, img1, img2, title, price, description, rating, discount }) {

    let dispatch=useDispatch();
   let toast=useToast();

    const handle1 = (event) => {


        let a = event.target;
        event.target.style.opacity = "0";

        //button
        let p = document.getElementsByClassName(a.id)
        p[0].style.opacity = "1";


        //image
        setTimeout(() => {
            event.target.style.opacity = "1";
            a.src = img2;
        }, 400);

    }
    const handle2 = (event) => {

        let a = event.target;
        event.target.style.opacity = "0";

        let p = document.getElementsByClassName(a.id);
        p[0].style.opacity = "0";
       

        setTimeout(() => {
            event.target.style.opacity = "1";
            a.src = img1;
        }, 300);

    }
    const handleButton1 = (event) => {

        event.target.style.opacity = "1";
        event.target.style.cursor = "pointer";
        event.target.style.backgroundColor = "#545540"
        event.target.style.color = "white";
    }
    const handleButton2 = (event) => {


        event.target.style.backgroundColor = "white"
        event.target.style.color = "#545540";
    }
    return (
        <GridItem>

            <Card>
                <CardBody h="80%" w="100%" border="none">
                    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}> <Image
                        src={img1}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg' w="100%" height="510px" id={id} onMouseOver={handle1} onMouseOut={handle2} transition="opacity 0.5s ease-in-out" transitionTimingFunction="linear"


                    ></Image></Link>

                    <Button position="absolute" onClick={() => {
                          
                          CartAction(elem,dispatch);

                          toast({
                            title: 'Product Added Succesfully.',
                            description: "We've created your account for you.",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                                 

                    }} className={id} opacity="0" onMouseOver={handleButton1} onMouseOut={handleButton2} transition="background-color 0.5s ease-in-out" top="450px" right="180px" padding="12px" border="1px solid grey" borderRadius="30px" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540">Quick Add</Button>

                    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>  <Stack mt='6' spacing='3' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540" marginTop="10px">
                        <Flex>
                            <Box>
                                {title}
                            </Box>
                            <Spacer />
                            <Box>
                                $ {price}
                            </Box>
                        </Flex>

                        <Text p="5px">
                            {description}
                        </Text>


                        <Text color="#a55741" p="5px" >
                            {discount}% off at checkout
                        </Text>

                    </Stack></Link>
                </CardBody>


            </Card>



        </GridItem>

    )
}

export default Tard