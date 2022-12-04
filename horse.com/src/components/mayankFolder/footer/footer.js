import React from 'react';
import { Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box} from '@chakra-ui/react';
import './footer.css';
import ins from "./IconsF/instagram.png"
import fb from  "./IconsF/facebook.png"
import pin from "./IconsF/pinterest.png"
import vim from "./IconsF/vimeo.png"
// import {FaTwitter,FaPinterestP,FaFacebookF,FaInstagram,FaYoutube,FaLongArrowAltRight} from 'react-icons/fa'

const Footer = () => {
  
  return (
    <footer  style={{margin:'0px', backgroundColor:'#545540', color:'#fff'}}>
      <div id='footer'>
        <div id='box1'>
          <p>Join the Horse Club and get 10% off your first purchase</p>
          <div id='finput' ><input type="Email" placeholder='EMAIL ADDRESS' /><button >&#10230;</button></div>
          <img src='//cdn.shopify.com/s/files/1/0233/5133/files/Group_1317_1_140x.png?v=1647570728' alt='icon' style={{width:'23%', marginTop:'30px'}}/>
          <p style={{fontSize:'12px', marginTop:'20px'}}>© The Horse ‘22</p>
        </div>
        <div id='box2'>
          <div className='f_div_2'>
            <h3>Customer Care</h3>
            <div className='f_div_2p'>
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Shipping & Delivery</p>
              <p>Returns & Exchanges</p>
              <p>Acknowledgment of Country</p>
              <p>Corporate Gifting</p>
            </div>
          </div>
          <div className='f_div_3'>
              <h2>Information</h2>
              <div  className='f_div_2p'>
                <p>Our Story</p>
                <p>Careers</p>
                <p>Terms / Privacy</p>
                <p>Sitemap</p>
              </div>
          </div>
          <div className='f_div_4'>
            <h2>Socials</h2>
            <div className='f_div_2p'>
              <p><span><img src={ins} alt='icon'style={{width:'18px'}}/></span>&nbsp; Instagram</p>
              <p><span><img src={fb} alt='icon'style={{width:'18px'}}/></span>&nbsp;Facebook</p>
              <p><span><img src={pin} alt='icon'style={{width:'18px'}}/></span>&nbsp;Pinterest</p>
              <p><span><img src={vim} alt='icon'style={{width:'18px'}}/></span>&nbsp;Vimeo</p>
            </div>
          </div>
        </div>
      </div>


      <div id='footer1'>
      <Accordion allowToggle style={{width:'100%'}}>
      <p id='join'>Join the Horse Club and get 10% off your first purchase</p>
      <div id='finput' style={{fontSize:'15px'}} ><input type="Email" placeholder='EMAIL ADDRESS' /><button >&#10230;</button></div>
        <AccordionItem style={{width:'100%',display:'flex',flexDirection:'column' , justifyContent:"center" }}>
          <h2>
            <AccordionButton style={{background:'#545540',border:'none' ,height:"70px", zIndex:'99', borderBottom:'1px solid #fff',color:'#fff',paddingLeft:'30px'}}>
              <Box flex='1' textAlign='center' style={{background:'#545540',height:'40px' }}>
              <h3 style={{color:'#fff',fontFamily:'canela',fontWeight:'600' ,letterSpacing:"0.1em"}}>Customer Care</h3>
              </Box>
              <AccordionIcon  />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <div className='f_div_2'>
            <div className='f_div_2p'>
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Shipping & Delivery</p>
              <p>Returns & Exchanges</p>
              <p>Acknowledgment of Country</p>
              <p>Corporate Gifting</p>
            </div>
          </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem style={{width:'100%',display:'flex',flexDirection:'column' , justifyContent:"left" }}>
          <h2>
            <AccordionButton style={{background:'#545540',border:'none',height:"70px",borderBottom:'1px solid #fff',color:'#fff',paddingLeft:'30px'}}>
              <Box flex='1' textAlign='center' style={{background:'#545540',height:'40px'}}>
                <h3 style={{color:'#fff',fontFamily:'canela',fontWeight:'600' ,letterSpacing:"0.1em"}}>Information</h3>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
          <div className='f_div_3'>
              <div  className='f_div_2p'>
                <p>Our Story</p>
                <p>Careers</p>
                <p>Terms / Privacy</p>
                <p>Sitemap</p>
              </div>
          </div>
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem style={{width:'100%',display:'flex',flexDirection:'column' , justifyContent:"left" }}>
          <h2>
            <AccordionButton style={{background:'#545540',border:'none' ,height:"70px",borderBottom:'1px solid #fff' ,color:"#fff",paddingLeft:'30px'}}>
              <Box flex='1' textAlign='center' style={{background:'#545540',height:'40px'}}>
                <h3 style={{color:'#fff',fontFamily:'canela',fontWeight:'600' ,letterSpacing:"0.1em"}}>Socials</h3>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <div className='f_div_4'>
            <div className='f_div_2p'>
              <p><span><img src={ins} alt='icon'style={{width:'18px'}}/></span>&nbsp;Instagram</p>
              <p><span><img src={fb} alt='icon'style={{width:'18px'}}/></span>&nbsp; Facebook</p>
              <p><span><img src={pin} alt='icon'style={{width:'18px'}}/></span>&nbsp; Pinterest</p>
              <p><span><img src={vim} alt='icon'style={{width:'18px'}}/></span>&nbsp; Vimeo</p>
            </div>
          </div>
          </AccordionPanel>
        </AccordionItem>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img src='//cdn.shopify.com/s/files/1/0233/5133/files/Group_1317_1_140x.png?v=1647570728' alt='icon' style={{width:'23%', marginTop:'30px'}}/>
        </div>
        <p style={{fontSize:'15px', marginTop:'20px',textAlign:'center'}}>© The Horse ‘22</p>
      </Accordion>
      </div>
    </footer>
  )
}

export default Footer;




