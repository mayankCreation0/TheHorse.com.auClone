import React from "react";
import {
    Box, Text, Container, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { FadeEx } from "./fade";

function Product() {
    return (
        <div>

            <Box textAlign="center" borderBottom="2px" height="60px">
                <Text padding="15px">NavBar</Text>
            </Box>

            <Box marginTop="20px">
            <Text textTransform="uppercase" textAlign="start" padding="10px" fontSize='12px' color='#545540' fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" letterSpacing=".15em" >
                        MEN'S WATCHES
                    </Text>
            </Box>


            <Container border="1px">

                <Box display="flex" flexDirection="column" gap="10px" marginTop="50px">

                    <Text textTransform="uppercase" textAlign="center" fontSize='11px' color='#545540' fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" letterSpacing=".15em" >
                        MEN'S WATCHES
                    </Text>
                    <Text fontSize='20px' color='#545540' fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing="0.04em" textAlign="center">
                        The Horse's collection of men’s watches effortlessly balance bold and understated to deliver a timeless leather design that ages with you to tell your story. Designed in our studios in Sydney, Australia, our men's watches honour unembellished natural materials and classic design, marked not by heavy detailing, but by simplicity, practicality and precision finishes.
                    </Text>

                    <Accordion  allowMultiple >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='center'>
                                        View More
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontFamily="AtlasGrotesk,Helvetica,san-serif" fontWeight="400" color="#000000" textAlign="center">
                                Whether you prefer a gold, silver or rose gold men's watch, a black or a white watch dial, a resin finish or a chronograph watch, we have a men's timepiece to suit every wearer. Paired with the effortless elegance of a natural leather watch band that is designed to patina delicately with age, all of our watches are available in a range of soft tones, from black to natural tans, as well blue, blush and olive leathers. Powered by an analogue quartz movement for precise time keeping, your new watch comes packaged within a bespoke box, with the option of a customised monogram for a very special gift, or to make it truly yours
                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>

                </Box>
                

            </Container>

           
           <Box  position="fixed" right="5px" p="5px">
            <FadeEx></FadeEx>
           </Box>
                 
            


        </div>
    )
}

export default Product