import React from 'react';
import { Flex,  Button,  Drawer,DrawerBody,DrawerFooter,DrawerHeader,
    DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, Accordion,
    AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box } from '@chakra-ui/react';
// import { FaRegHeart, FaSistrix} from "react-icons/fa";
// import { FiMapPin } from "react-icons/fi";
// import { BsBag } from "react-icons/bs";
// import { MdMenu } from "react-icons/md";
// import { VscAccount } from "react-icons/vsc";
import menu from '../icons/menus.png'
import bag from '../icons/bag.png'
import search from '../icons/search-interface-symbol.png'
import user from '../icons/user.png'
import "./sidebar.css"

export default function Top() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='tn_div_3' style={{padding:'10px'}}>
            <Flex h="35px" justify="space-between" bg="main.800">
                <Flex gap='20px'>
                    <div className='drwr' >
                        <Button ref={btnRef}  bg='white' onClick={onOpen} style={{border:'none',backgroundColor:'transparent'}}>
                        <img src={menu}alt='img' style={{width:'20px'}}/>
                        </Button>
                        <Drawer 
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                        <DrawerOverlay />
                        <DrawerContent style={{top:'58px' , backgroundColor:'#ffffff',padding:'0px 20px 0px 20px',overflowX:'hidden',overflowY:'auto',textAlign:'justify'}}>
                           <DrawerCloseButton style={{border:'none',borderRadius:'100%',justifyContent:'center', backgroundColor:'lightgrey',width:'50px',height:'50px',marginLeft:'45%',marginTop:'10px'}}/>
                            <DrawerHeader className='drawerheader' style={{display:'flex',justifyContent:'center',gap:'70px',padding:' 20px 0px 0px 0px'}}>
                                <Button  style={{border:'1px solid #54647e',width:'250px',height:'70px',fontSize: '25px',backgroundColor:'#545540',color:"#fff",fontFamily:'canela',letterSpacing:'.2em'}}>Men</Button>
                                <Button  className='btn1' style={{border:'1px solid #54647e',width:'250px',height:'70px',fontSize: '25px',fontFamily:'canela',letterSpacing:'.2em',color:'black',backgroundColor:'white',fontWeight:'900'}}>Women</Button>
                            </DrawerHeader>
                
                            <DrawerBody>
                            <Accordion allowToggle>
                                
                                {/* <hr style={{height:'3px' ,color:'black',marginTop:'50px'}}></hr> */}
                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderTop:'1px solid #545540',borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",backgroundColor:'#ffffff',height:'90px',textAlign:'center',marginTop:'40px'}}>
                        <Box flex='1' textAlign='left'  color="#54647e" >
                            New
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Button style={{borderTop:'none',borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>ALL BRANDS</Button>
                    </AccordionPanel>
                </AccordionItem>
                
                


                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Shop By
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button> 
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem >
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Gift Guide
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Bags
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Backpacks
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Watches
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                        <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Wallets
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                        <Box flex='1' textAlign='left'  color="#54647e">
                        Tech & Travels
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SHOP ALL</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>SKIN CARE</Button>
                    <Button style={{border:'none',backgroundColor:'#ffffff',height:'40px',textAlign:'left'}}>MAKE UP</Button>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                
                </Accordion>
                            </DrawerBody>
                
                            <DrawerFooter>
                            <Button  style={{borderBottom:'1px solid #545540',borderLeft:'none',borderRight:"none",borderTop:'none',backgroundColor:'#ffffff',height:'90px',textAlign:'center'}}>
                                STORE & SPA LOCATOR
                            </Button>
                            </DrawerFooter>
                        </DrawerContent>
                        </Drawer>
                    </div>
                    <button style={{justifyContent:'left',border:'none',backgroundColor:'transparent'}}><img src={user} alt='img' style={{width:'20px'}}/></button>
                </Flex>
                <Flex style={{gap:'20px'}}>
                    <Button style={{border:'none',backgroundColor:'transparent'}} ><img src={search} alt='img' style={{width:'20px'}}/></Button>
                    <Button style={{border:'none',backgroundColor:'transparent'}} ><img src={bag} alt='img' style={{width:'20px'}}/></Button>
                </Flex>
            </Flex>
            <div style={{display:'flex',justifyContent:'center'}}>
            <div id='logo' style={{marginTop:'-30px'}}><p>THE HORSE</p></div>
        </div>
        </div>
    );
}