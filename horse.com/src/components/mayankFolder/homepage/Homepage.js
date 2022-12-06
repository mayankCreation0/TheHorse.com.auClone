import React from 'react'
import Carousel from './Carousel/Carousel'
import "./Homepage.css"
import MultiCarouselApp from './multi-carousel/multiCarouselApp'
import conversation from './icons/conversation.png'
import bag from './icons/bag.png'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer'
function Homepage() {
  return (
    <>
    <Navbar/>
    <div id='homepage'>
       <div style={{width:"100%"}} ><Carousel /></div> 
        <div id='line1'>
            <div className='line1'>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hd4/hb5/28736703332382/Main-Banner-Multiclick-Web_73829nbhjhsjjsskksbcgg.gif" alt="img"/>
                <p className='hoverfun' style={{display:'flex'}}>Women's Backpacks&#8594; <div class="arrow-1"></div></p>
            </div>
            
        </div>
        <div id='line2'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Travel_now_available_1536x.jpg?v=1669158391" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <h3 className='trending'>Trending Now</h3>
       <div className='carousel123' style={{width:"100%"}}><MultiCarouselApp/></div> 
        <div id='line3'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Feature_Banner_Template_950e03f9-f7d8-4802-86cc-aa0ba77f6baf_1536x.jpg?v=1667862643" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <div id='line4'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Feature_Banner_Template2_def33c37-1761-4526-9157-1c91c4895748_1536x.jpg?v=1667862741" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <h3 className='trending'>Women's New</h3>
        <div className='carousel123' style={{width:"100%"}}><MultiCarouselApp/></div>
        <div id='line5'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Firday_bag_Feature_Banner_Template_1536x.jpg?v=1668034602" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <div id='line6'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/TH_x_LS_coming_soon_1536x.jpg?v=1669158296" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <div id='star'>
        &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <h3 id='lambaline'>
        I've been looking for a bag I can use for work that isn't too 'worky'. This fits my giant drink bottle, laptop, charger, sunnies, and lunch. Great for work & cute enough to use for casual day to day. I recently used this for an interstate trip as well. It fits all my airport essentials easily, and the smaller pockets are great for keys and tickets. I think I'll have to grab the mini version too!
        </h3>
        <p id='lambaline2'><span style={{letterSpacing:'0.2em'}}>JAYDE</span> -<span style={{borderBottom:'1px solid #545540'}}> BACKPACK: BLACK </span></p>
        <div id='smallpic' style={{cursor: 'pointer',justifyContent:'center'}}>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_BA1_065_316x.png?v=1632958938" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220523_THEHORSE_GU2_0069_316x.jpg?v=1655275459" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_BL4_0115copy_316x.jpg?v=1644810856" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220816_THEHORSE21811_316x.jpg?v=1660601797" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_BL3_0096copy_316x.jpg?v=1644969793" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/BA3-1_316x.png?v=1632965251" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_AWL1_530_316x.png?v=1633571050" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_SK4_0140copy_316x.jpg?v=1645573527" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_BA1_065_316x.png?v=1632958938" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220523_THEHORSE_CUC2_0054_316x.jpg?v=1654752810" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220523_THEHORSE_GU4_0081_316x.jpg?v=1654751917" alt="img" srcset="" style={{width:'60px'}}/>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/products/20220816_THEHORSE21816_316x.jpg?v=1660602647" alt="img" srcset="" style={{width:'60px',backgroundColor:'black'}}/>
        </div>
        <hr style={{border:"1px solid #545542", marginTop:'60px'}}/>
        <div className='trending' style={{marginTop:"80px"}}>GO FOLLOW</div>
        <div  style={{width:"80%",margin:"auto",padding:"30px"}} >
            <img style={{width:"100%"}} src="https://sslimages.shoppersstop.com/sys-master/root/hbb/h77/28704737656862/Top-Banner-van-heausen-Web-1840x500_663333_dbhdbbbdsddqrwwww.jpg" alt="" srcset="" />
            
        </div>
        <hr style={{border:"1px solid #545542", marginTop:'100px'}}/>
        <h2 className='trending'style={{fontSize:'20px',fontWeight:'bold',letterSpacing:'.07em' , marginTop:'100px'}}>Making Holiday Gifting Simple</h2>
        <div id='icondiv'>
            <div className='iconbox'>
                <i style={{fontSize:'24px'}} class='fas'>&#xf4d7;</i>
                <h3 className='iconboxi'>Free Shipping*</h3>
                <p>Shipping on us for orders <br/> over $150</p>
            </div>
            <div className='iconbox'>
                <i style={{fontSize:"24px"}} class="fa">&#xf06b;</i>
                <h3 className='iconboxi'>Gift Wrapping</h3>
                <p>Christmas covered with holiday themed Gift Wrapping</p>
            </div>
            <div className='iconbox'>
                <i style={{fontSize:"24px"}} class="fa">&#x2934;</i>
                <h3 className='iconboxi'>Returns</h3>
                <p>Seamless returns extended for holiday gifting</p>
            </div>
            <div className='iconbox'>
                {/* <i style={{fontSize:"24px"}} class="fa">&#xf290;</i> */}
                <img src={bag} alt="img" style={{width:'30px' , color:'black'}}/>
                <h3 className='iconboxi'>Click and Collect</h3>
                <p>Click & Collect available to our Sydney friends</p>
            </div>
            <div className='iconbox'>
                <img src={conversation} alt="img" style={{width:'24px' , color:'black'}}/>
                <h3 className='iconboxi'>Ask The Horse</h3>
                <p>Our friendly team on live chat ready to provide gifting advice</p>
            </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Homepage
