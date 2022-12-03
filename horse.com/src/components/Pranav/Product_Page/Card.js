import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer, Box, GridItem } from '@chakra-ui/react'

import { Link } from "react-router-dom";
import CartAction from '../action/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react'
// import DescriptionAlerts from '../Product_details/Alert';


function Tard({ elem, id, img1, img2, title, price, description, rating, discount }) {

    let dispatch = useDispatch();
    let toast = useToast();

    let ans = useSelector((state) => state.cartData);
    console.log(ans);

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

    const cart_handle = (el) => {


        Post_cartData(el)
        async function Post_cartData(el) {


            let update = await fetch(`http://localhost:3001/cartPage`, {
                method: "POST",
                body: JSON.stringify(el),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((ans) => {

                if (ans.ok == false) {
                    alert("Already Added in Cart");
                }
                else {
                    fetch("http://localhost:3001/cartPage").then((res) => res.json()).then((data1) => {


                        CartAction(data1, dispatch);


                    });
                }

            })




        }

    }

    return (

        <GridItem >

            <Box>
                <Box h="80%" w="100%" >
                    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}> <Image
                        src={img1}
                        alt='Green double couch with wooden legs'
                        w="100%" height="530px" id={id} onMouseOver={handle1} onMouseOut={handle2} transition="opacity 0.5s ease-in-out" transitionTimingFunction="linear"


                    ></Image></Link>

                    <Button onClick={() => cart_handle(elem)} className={id} opacity="0" left="150px" bottom="80px" onMouseOver={handleButton1} onMouseOut={handleButton2} transition="background-color 0.5s ease-in-out" padding="15px" border="1px solid grey" borderRadius="30px" fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540">Quick Add</Button>

                    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>  <Stack spacing='1' fontSize="13px" letterSpacing="0.04em" fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" lineHeight="1.4" color="#545540">
                        <Flex mt="-32px" alignItems="center">
                            <Box p="4">
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
                            {discount} % off at checkout
                        </Text>

                    </Stack></Link>
                </Box>


            </Box>



        </GridItem>

    )
}

export default Tard