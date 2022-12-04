// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'
import heart from "./icons/heart.png"
import bag from "./icons/bag.png"
import search from "./icons/search-interface-symbol.png"
import menu from './icons/menu.png'
// import BackdropExample from "../button/button"
// import DrawerExample from './sidenav/sideNav'
import Top from './sidebar/sidebar'
import { Link } from "react-router-dom"
import Cart from '../../gopal/CartPage/Cart'

function Navbar() {


  return (
    <navbar>
      <Cart/>
      <div className='navbar' style={{ borderBottom: '1px solid #545540' }}>
        <div><button style={{ borderStyle: 'none', backgroundColor: 'transparent' }}><img src={menu} alt='img' style={{ width: '24px' }} /></button></div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '71px', padding: '24px 0 0 0' }} className="MainMenu">
          <ul>
            <li style={{ fontSize: '15px', letterSpacing: '0.09em' }}><Link to="/womens" style={{ color: 'black',fontFamily:'canela',fontWeight:'900' }}>Women</Link>
              <div className='SubMenu_1'>
                <div class='submenu_2'>

                  <ul style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',
                    gap: '20px', height: '100%', width: '100%', marginTop: '0px'
                  }}>

                    <li>New
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <h3>New</h3>
                          <p>New Arrivals</p>
                          <p>Back In Stock</p>
                          <p>Coming Soon</p>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Shop By
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px", display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/ShopBY" style={{ textDecoration: 'none', color: '#545540' }}><h3>New Arrivals</h3>
                            <p>Holiday Gift Guide</p>
                            <p>The Party Edit</p>
                            <p>The Work Edit</p>
                            <p>The Weekend Edit</p>
                            <p>The Summer Edit</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Gift Guide
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}><h3>CHRISTMAS 22</h3>
                            <p>Holiday Gift Guide</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}><h3>GIFTS BY CATEGORY</h3>
                            <p>Gifts For Her</p>
                            <p>Something Special</p>
                            <p>Gifts For Him</p>
                            <p>Gift Cards</p>
                            <p>Corporate Gifts</p>
                            <p>Personalisation</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}>
                            <h3>GIFTS BY PRICE</h3>
                            <p>Gifts Under $200</p>
                            <p>Gifts Under $150</p>
                            <p>Gifts Under $50</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>Bags
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '60px 0 20 0', marginRight: "90px", marginTop: '10px' }}>
                          {/* <h3>New</h3> */}
                          {/* <div style={{marginTop:'-3px',padding:'60px 0 20 0'}}> */}
                          <Link to="/products/Bags" style={{ textDecoration: 'none', color: '#545540' }}><p>All Bags</p>
                            <p>Backpacks</p>
                            <p>Handbags</p>
                            <p>Tote Bags</p>
                            <p>Crossbody Bags</p>
                            <p>Hobo Bags</p>
                            <p>Bucket Bags</p>
                            <p>Clutches</p>
                            <p>Mini Bags</p></Link>
                          {/* </div> */}
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_1_600x.jpg?v=1669854912' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Backpacks
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <Link to="/products/Backpacks" style={{ textDecoration: 'none', color: '#545540' }}><h3>New</h3>
                            <p>All Backpacks</p>
                            <p>Mini Backpacks</p>
                            <p>Laptop Backpacks</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>watches
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>Watches</h3>
                            <p>All Watches</p>
                            <p>Watch Straps</p>
                            <p>Engravable Watches</p>
                            <p>Water Resistant Watches</p></Link>
                        </div>
                        <div>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>The Dress Watch</h3>
                            <p>The Resin</p>
                            <p>The Original</p>
                            <p>The Classic</p>
                            <p>The Uniform</p>
                            <p>The Blockout</p>
                            <p>Ocean Plastics</p></Link>
                        </div>
                        <div>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>Gold Watches</h3>
                            <p>Pink Watches</p>
                            <p>Rose Gold Watches</p>
                            <p>Silver Watches</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>Wallets
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <Link to="/products/Wallets" style={{ textDecoration: 'none', color: '#545540' }}><h3>Wallets</h3>
                            <p>All Wallets</p>
                            <p>Coin Purses</p>
                            <p>Small Wallets</p>
                            <p>Zip Wallets</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Tech & Travel
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px", display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/Tech&Travels" style={{ textDecoration: 'none', color: '#545540' }}><h3>TECH</h3>
                            <p>All Tech</p>
                            <p>Airpod Cases</p>
                            <p>Apple Watch Straps</p>
                            <p>iPhone Cases & Covers</p>
                            <p>Keyrings</p>
                            <p>Work Bags</p>
                            <p>Laptop & iPad Sleeves</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Doggo
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <Link to="/products/Doggo" style={{ textDecoration: 'none', color: '#545540' }}><h3>Doggo</h3>
                            <p>Dog collars</p>
                            <p>Dog leads</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li style={{ fontSize: '15px', letterSpacing: '0.05em' }}><Link to="/Men" style={{ textDecoration: 'none',letterSpacing:'0.1',color: 'black',fontFamily:'canela',fontWeight:'900' }}>Men</Link>
              <div className='SubMenu_1'>
                <div class='submenu_2'  >

                  <ul style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',
                    gap: '20px', height: '100%', width: '100%', marginTop: '0px'
                  }}>

                    <li>New
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <h3>New</h3>
                          <p>New Arrivals</p>
                          <p>Back In Stock</p>
                          <p>Coming Soon</p>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Bags
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '60px 0 20 0', marginRight: "90px", marginTop: '10px' }}>
                          {/* <h3>New</h3> */}
                          {/* <div style={{marginTop:'-3px',padding:'60px 0 20 0'}}> */}
                          <Link to="/products/Bags" style={{ textDecoration: 'none', color: '#545540' }}><p>All Bags</p>
                            <p>Backpacks</p>
                            <p>Handbags</p>
                            <p>Tote Bags</p>
                            <p>Crossbody Bags</p>
                            <p>Hobo Bags</p>
                            <p>Bucket Bags</p>
                            <p>Clutches</p>
                            <p>Mini Bags</p></Link>
                          {/* </div> */}
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_1_600x.jpg?v=1669854912' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>watches
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>Watches</h3>
                            <p>All Watches</p>
                            <p>Watch Straps</p>
                            <p>Engravable Watches</p>
                            <p>Water Resistant Watches</p></Link>
                        </div>
                        <div>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>The Dress Watch</h3>
                            <p>The Resin</p>
                            <p>The Original</p>
                            <p>The Classic</p>
                            <p>The Uniform</p>
                            <p>The Blockout</p>
                            <p>Ocean Plastics</p></Link>
                        </div>
                        <div>
                          <Link to="/products/watches" style={{ textDecoration: 'none', color: '#545540' }}><h3>Gold Watches</h3>
                            <p>Pink Watches</p>
                            <p>Rose Gold Watches</p>
                            <p>Silver Watches</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>Wallets
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <Link to="/products/Wallets" style={{ textDecoration: 'none', color: '#545540' }}><h3>Wallets</h3>
                            <p>All Wallets</p>
                            <p>Coin Purses</p>
                            <p>Small Wallets</p>
                            <p>Zip Wallets</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Tech & Travel
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px", display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/Tech&Travels" style={{ textDecoration: 'none', color: '#545540' }}><h3>TECH</h3>
                            <p>All Tech</p>
                            <p>Airpod Cases</p>
                            <p>Apple Watch Straps</p>
                            <p>iPhone Cases & Covers</p>
                            <p>Keyrings</p>
                            <p>Work Bags</p>
                            <p>Laptop & iPad Sleeves</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Doggo
                      <div className='submenu_3' style={{ border: '1px solid pink' }}>
                        <div className='subline' style={{ marginLeft: '-240px', padding: '70px 0 0 0', marginRight: "90px" }}>
                          <Link to="/products/Doggo" style={{ textDecoration: 'none', color: '#545540' }}><h3>Doggo</h3>
                            <p>Dog collars</p>
                            <p>Dog leads</p></Link>
                        </div>
                        <div className='hovimg0' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', width: '40%', padding: '30px 0 0 0' }}>
                          <div className='hovimg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_52c9fc4b-2e6a-4492-bf5e-3c068318e022_600x.jpg?v=1667793990' alt='img' style={{ width: '270px' }} />
                            <p>CHRISTMAS GIFT GUIDE</p>
                          </div>
                          <div className='hovimg'>
                            <img src='https://cdn.shopify.com/s/files/1/0233/5133/files/mega_3_600x.jpg?v=1669253989' alt='img' style={{ width: '270px' }} />
                            <p>NEW ARRIVALS</p>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>Gifts
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}><h3>CHRISTMAS 22</h3>
                            <p>Holiday Gift Guide</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}><h3>GIFTS BY CATEGORY</h3>
                            <p>Gifts For Her</p>
                            <p>Something Special</p>
                            <p>Gifts For Him</p>
                            <p>Gift Cards</p>
                            <p>Corporate Gifts</p>
                            <p>Personalisation</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Gifts" style={{ textDecoration: 'none', color: '#545540' }}>
                            <h3>GIFTS BY PRICE</h3>
                            <p>Gifts Under $200</p>
                            <p>Gifts Under $150</p>
                            <p>Gifts Under $50</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>Personalisation
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/Personalisation" style={{ textDecoration: 'none', color: '#545540' }}><h3>CHRISTMAS 22</h3>
                            <p>Holiday Gift Guide</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Personalisation" style={{ textDecoration: 'none', color: '#545540' }}><h3>GIFTS BY CATEGORY</h3>
                            <p>Gifts For Her</p>
                            <p>Something Special</p>
                            <p>Gifts For Him</p>
                            <p>Gift Cards</p>
                            <p>Corporate Gifts</p>
                            <p>Personalisation</p></Link>
                        </div>
                        <div>
                          <Link to="/products/Personalisation" style={{ textDecoration: 'none', color: '#545540' }}>
                            <h3>GIFTS BY PRICE</h3>
                            <p>Gifts Under $200</p>
                            <p>Gifts Under $150</p>
                            <p>Gifts Under $50</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>For works
                      <div className='submenu_3' style={{ border: '1px solid pink', padding: '30px 0 0 0' }}>
                        <div className='subline' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <Link to="/products/ForWorks" style={{ textDecoration: 'none', color: '#545540' }}><h3>CHRISTMAS 22</h3>
                            <p>Holiday Gift Guide</p></Link>
                        </div>
                        <div>
                          <Link to="/products/ForWorks" style={{ textDecoration: 'none', color: '#545540' }}><h3>GIFTS BY CATEGORY</h3>
                            <p>Gifts For Her</p>
                            <p>Something Special</p>
                            <p>Gifts For Him</p>
                            <p>Gift Cards</p>
                            <p>Corporate Gifts</p>
                            <p>Personalisation</p></Link>
                        </div>
                        <div>
                          <Link to="/products/ForWorks" style={{ textDecoration: 'none', color: '#545540' }}>
                            <h3>GIFTS BY PRICE</h3>
                            <p>Gifts Under $200</p>
                            <p>Gifts Under $150</p>
                            <p>Gifts Under $50</p></Link>
                        </div>

                      </div>
                    </li>
                    <li>Wedding Essentials
                      <div className='submenu_3'>
                        <div>
                          <Link to="/products/WeddingEssentials" style={{ textDecoration: 'none', color: '#545540' }}><h3>BY CATEGORY</h3>
                            <p>Shop All</p>
                            <p>Skincare</p>
                            <p>Makeup</p>
                            <p>Hair</p>
                            <p>Bath & Body</p>
                            <p>Fragrance</p>
                            <p>Tools & Accessories</p>
                            <p>Wellness</p>
                            <p>Gifts</p>
                            <p>Wedding Essentials</p></Link>
                        </div>
                        < div>
                          <h3>BY  BRAND</h3>
                          <Link to="/products/WeddingEssentials" style={{ textDecoration: 'none', color: '#545540' }}><p>111Skin</p>
                            <p>Augustinus Bader</p>
                            <p>Balm Labs</p>
                            <p>Dr Barbara Sturm</p>
                            <p>EltaMD</p>
                            <p>IS Clinical</p>
                            <p>La Mer</p>
                            <p>M-61</p>
                            <p>Tata Harper</p>
                            <p>ZitSticka</p></Link>
                        </div>
                        <div>
                          <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/L_A_Foundation_Stick_Nav_Flyout_303x303.jpg?v=1664803456" alt="" /></li>
                          <li><h4>The Female Founders Edit</h4></li>
                          <li><p>We're all about women helping women</p></li>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
                <div>

                </div>
                <div>

                </div>

              </div>
            </li>
          </ul>
        </div>
        <div id='logohorse' style={{display:'flex',justifyContent:'center'}}><p><Link to='/' style={{color:'black',fontFamily:"canela"}}>THE HORSE</Link></p></div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <div style={{marginTop:'6px'}}>AUD</div>
          <Link to="/account"><div style={{ display:'flex',fontSize: '15px',color:'black', letterSpacing: '0.05em', fontFamily:'canela',fontWeight:'900',marginTop:'7px' }}>My Account</div></Link>
          {/* <div style={{display:'flex',justifyContent:'space-evenly'}}> */}
          <Link to="/account/wishlist">  <div id='heartdiv'><img src={heart} alt="img" style={{ width: '18px' ,marginTop:'9px',marginRight:'-14px'}} /></div></Link>
          {/* <div id='search'><button style={{ border: 'none', backgroundColor: 'transparent',marginTop:'-5px' }}><img src={search} alt="img" style={{ width: '18px' }} /></button></div> */}
          <div class="dropdown"  style={{backgroundColor:'transparent'}}>
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'transparent',width:'10px',color:'transparent'}}>
              <img src={search} alt="img" style={{ width: '18px',backgroundColor:'transparent',marginLeft:'7px' }} />
            </button>
            <ul class="dropdown-menu" style={{width:'100%',position:'fixed',left:'50%',top:'56.1%',transform:'translate(-50%,-50%)',borderRadius:'0px',height:'90vh',margin:'auto'}}>
              <div style={{position:'fixed',left:'7.5%',top:'37%',transform:'translate(-50%,-50%)'}}><p style={{fontFamily:'canela',fontSize:'17px',fontWeight:'900',borderBottom:'1px solid #545540'}}>Popular In Categories</p></div>
              <div id='finput1'style={{width:'30%',position:'fixed',left:'50%',top:'8%',transform:'translate(-50%,-50%)'}} ><input  type="text" placeholder='Search...' /><button >&#10230;</button></div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',position:'fixed',left:'20%',top:'70%',transform:'translate(-50%,-50%)'}} ><iframe src='https://player.vimeo.com/video/764025864?h=526f5239d5&byline=0&portrait=0&muted=1&autoplay=1&controls=0&loop=1&background=1&app_id=122963'style={{width:'800px',height:'350px'}}></iframe></div>
              <div><img src='https://cdn.shopify.com/s/files/1/0233/5133/files/backpacks_82905338-2b52-480a-8676-0b0f976310d8_300x.jpg?v=1669694649' alt='img' style={{height:'350px',position:'fixed',left:'85%',top:'70%',transform:'translate(-50%,-50%)'}}></img></div>
              <div><img src='https://cdn.shopify.com/s/files/1/0233/5133/files/bags3_300x.jpg?v=1653962761' alt='img' style={{width:'300px',height:'350px',position:'fixed',left:'56%',top:'70%',transform:'translate(-50%,-50%)'}}/></div>
            </ul>
          </div>
          {/* <div id='bagdiv'><img src={bag} alt="img" style={{ width: '18px',marginTop:'-5px' }} /></div> */}
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{backgroundColor:'transparent',color:'transparent',width:'10px' ,border:'none',borderRadius:'none',boxShadow:'none'}}>
          <div id='bagdiv'><img src={bag} alt="img" style={{ width: '18px',marginTop:'-5px',marginLeft:'-7px' }} /></div>
        </button>
        </div>
      </div>

      <div id='sidenav'>{<Top />}</div>
      <Cart/>
    </navbar>



  )
}

export default Navbar


