import React, { useEffect } from "react";
import { myAction } from "../action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { FadeEx } from "./fade";

import StaticData from "./StaticData";
import Tard from "./Card";
import { FadeE } from "./filter";
import { Text } from "@chakra-ui/react";





function Product() {

    let dispatch = useDispatch();
    let getDatafun = useSelector((storeData) => storeData.getDatafun);
    let cartData = useSelector((state) => state.cartData);


    useEffect(() => {

        getDatafun('http://localhost:3001/posts', dispatch);

    }, []);


    let showData = useSelector(((storeData) => storeData.ProductData));



    return (

        <>

            <StaticData />

            <Box position="absolute" right="230px" p="5px" top="435px" zIndex="1" >
                <FadeEx ></FadeEx>
            </Box>
            <Box position="absolute" right="130px" p="5px" top="450px" zIndex="1">
                <div class="dropdown">
                    <button style={{ border: "none", padding: "5px", backgroundColor: "white", color: "#545540", fontSize: "16px", border: "none", marginRight: "7px", fontFamily: "Canela,Times,serif", fontWeight: "400", letterSpacing: ".15em" }} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filters
                    </button>
                    <ul class="dropdown-menu" style={{ width: "100vw", height: "400px" }}>

                        <Box display="flex" gap="180px" w="50%" margin="auto" marginTop="30px" color="#545540" fontSize="16px" fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".14em" >
                            <Box display="flex" flexDirection="column" gap="10px"><Text>COLOR</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="black" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Black
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="olive" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Olive
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="tan" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Tan
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="gun metal" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Gun Metal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="silver" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Silver
                                    </label>
                                </div>

                            </Box>

                            <Box display="flex" flexDirection="column" gap="10px"><Text>MATERIAL</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="leather" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Leather
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="webbed" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Webbed
                                    </label>
                                </div>
                            </Box>
                            <Box display="flex" flexDirection="column" gap="10px" ><Text>OCCASION</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="everyday" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Everyday
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="formal" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Formal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="travel" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                       Travel
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="work" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Work
                                    </label>
                                </div>
                                 

                            </Box>
                             
                        </Box>

                    </ul>
                </div>
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