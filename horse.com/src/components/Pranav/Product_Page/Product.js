import React, { useEffect } from "react";
import { myAction } from "../action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { FadeEx } from "./fade";

import StaticData from "./StaticData";
import Tard from "./Card";
import DescriptionAlerts from "../Product_details/Alert";



function Product() {

    let dispatch = useDispatch();
    let getDatafun = useSelector((storeData) => storeData.getDatafun);
    let cartData = useSelector((state) => state.cartData);
   

    useEffect(() => {

        getDatafun('http://localhost:3001/posts', dispatch);

    },[]);


    let showData = useSelector(((storeData) => storeData.ProductData));



    return (

        <>

            <StaticData />

            <Box position="absolute" right="100px" p="5px" top="450px" zIndex="1" >
                <FadeEx ></FadeEx>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap={50} w="92%" margin="auto" marginTop="120px">


                {showData.length > 0 ? showData.map((ele) => {

                    return <Tard elem={ele} id={ele.id} img1={ele.img1} img2={ele.img2} title={ele.title} description={ele.description} price={ele.price} discount={ele.discount} rating={ele.rating} />
                }) : <h1>Loading...</h1>}

            </Grid>

        </>





    )
}


export default Product;