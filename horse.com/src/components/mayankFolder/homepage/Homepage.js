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
        <Carousel />
        <div id='line1'>
            <div className='line1'>
                <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Category_Template_-_Cyber_632x.jpg?v=1668980500" alt="img"/>
                <p className='hoverfun' style={{display:'flex'}}>Women's Backpacks&#8594; <div class="arrow-1"></div></p>
            </div>
            <div className='line1'>
                <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Category_Template_-_Cyber2_632x.jpg?v=1668980541" alt="img"/>
                <p className='hoverfun' style={{display:'flex'}}>Women's Watches <span>&#8594;</span></p>
            </div>
            <div className='line1'>
                <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Category_Template4_d53d4467-bab3-46f5-892e-7233a1ec2eac_632x.jpg?v=1669253804" alt="img"/>
                <p className='hoverfun' style={{display:'flex'}}>Women's bags <span>&#8594;</span></p>
            </div>
        </div>
        <div id='line2'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Travel_now_available_1536x.jpg?v=1669158391" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <h3 className='trending'>Trending Now</h3>
        <MultiCarouselApp/>
        <div id='line3'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Feature_Banner_Template_950e03f9-f7d8-4802-86cc-aa0ba77f6baf_1536x.jpg?v=1667862643" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <div id='line4'>
            <img src="https://cdn.shopify.com/s/files/1/0233/5133/files/Feature_Banner_Template2_def33c37-1761-4526-9157-1c91c4895748_1536x.jpg?v=1667862741" alt="img" srcset="" style={{width:'100%',height:'100%'}}/>
        </div>
        <h3 className='trending'>Women's New</h3>
        <MultiCarouselApp/>
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
        <div id='smallpic' style={{cursor: 'pointer'}}>
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
        <div id='nicherow'>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/317513419_158333716913679_1584852231768000139_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cjwv67eVLhgAX8kjHgq&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAYjqEUPf4esDXWYR6qaw5_Kp3w48VjMPUBpSt-zHAz6w&oe=638B05AB" alt="" srcset="" />
            <img src="https://scontent.cdninstagram.com/v/t51.2885-15/316705771_1121948111800932_2254888192851595727_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-NxrRLAslksAX-axbIQ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAuS_joINz0CbKk58Ib8j5NPoPdeIZHTofGl8I1Zoxzdw&oe=6389F212" alt="" srcset="" />
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/315653659_1371811670225957_1705502938649023014_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=isYi3lostygAX-QlyIc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDL10cwncGiwGqYzmQWUrPBitsSitabLh4BtDgXMrlyWA&oe=638ABA0F" alt="" srcset="" />
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/315865306_1270145477166129_1413989968034381988_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=QUReOhsQOWQAX9oAyPT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA_CtWu7ILHvMFY294upFBtacxwvFMPXh6vEp8ZBkDkKw&oe=638A9264" alt="" srcset="" />
            <img src="https://scontent.cdninstagram.com/v/t51.2885-15/315504693_814343023181699_5172956527947835540_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZX6SnsDXP0AX_U33dz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAUvz2LyBKWUlsxnF_TknHTsZhUA3XRk1UPsrzv3EZLGQ&oe=63892917" alt="" srcset="" />
            <img src="https://scontent.cdninstagram.com/v/t51.2885-15/315435316_678462006960847_6628115535468807493_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zg4rl3cuNCsAX_yOxHp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAYcFZbaNZcB9e3lRo6kRj5HpEBIhMM-xHAPDiTtlmTRw&oe=638A8CCC" alt="" srcset="" />
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
