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
import { BsArrowDown } from "react-icons/bs"
import Navbar from "../../mayankFolder/navbar/Navbar";
import { useParams } from "react-router-dom";





function Product() {

    let dispatch = useDispatch();
    let getDatafun = useSelector((storeData) => storeData.getDatafun);
    let cartData = useSelector((state) => state.cartData);
    let category=useParams();
     
     


    useEffect(() => {

        getDatafun(`http://localhost:3001/posts/?q=${category.category}`, dispatch);

    }, []);

    const handle_checkbox = (event) => {
        let ans = event.target.value;

        if(event.target.checked)
        {

        getDatafun(`http://localhost:3001/posts/?q=${ans}`, dispatch);
        }

    }


    let showData = useSelector((storeData) => storeData.ProductData);
    


    return (

        <>

        <Navbar/>

            <StaticData />

            <Box position="absolute" right="230px" p="5px" top="440px" zIndex="1" >
                <FadeEx type={category.category} ></FadeEx>
            </Box>
            <Box position="absolute" right="120px" p="5px" top="453px" zIndex="1">
                <div class="dropdown">
                    <button style={{ border: "none", padding: "5px", backgroundColor: "white", color: "#545540", fontSize: "16px", border: "none", marginRight: "7px", fontFamily: "Canela,Times,serif", fontWeight: "450", letterSpacing: ".15em", display: "flex", gap: "5px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Text>Filters</Text><Text fontSize="16px" marginTop="-1px"><BsArrowDown /></Text>
                    </button>
                    <ul class="dropdown-menu" style={{ width: "100vw", height: "400px" }}>

                        <Box display="flex" gap="180px" w="50%" margin="auto" marginTop="30px" color="#545540" fontSize="16px" fontFamily="Canela,Times,serif" fontWeight="400" letterSpacing=".14em" >
                            <Box display="flex" flexDirection="column" gap="10px"><Text>COLOR</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="black" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Black
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="olive" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Olive
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="tan" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Tan
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="gun metal" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Gun Metal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="silver" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Silver
                                    </label>
                                </div>

                            </Box>

                            <Box display="flex" flexDirection="column" gap="10px"><Text>MATERIAL</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="leather" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Leather
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="webbed" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Webbed
                                    </label>
                                </div>
                            </Box>
                            <Box display="flex" flexDirection="column" gap="10px" ><Text>OCCASION</Text>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="everyday" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Everyday
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="formal" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Formal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="travel" id="flexCheckDefault" onClick={handle_checkbox} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Travel
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="work" id="flexCheckDefault" onClick={handle_checkbox} />
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