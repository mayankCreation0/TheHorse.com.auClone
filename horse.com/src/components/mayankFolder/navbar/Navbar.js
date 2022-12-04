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
        <div id='logohorse' style={{ display: 'flex', justifyContent: 'center' }}><p><Link to='/' style={{ color: '#545540' }}>THE HORSE</Link></p></div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>AUD</div>
          <div style={{ fontSize: '15px', letterSpacing: '0.05em' }}><Link to="/account">My Account</Link></div>
          {/* <div style={{display:'flex',justifyContent:'space-evenly'}}> */}
          <Link to="/account/wishlist"><div id='heartdiv'><img src={heart} alt="img" style={{ width: '18px', marginTop: '-5px' }} /></div></Link>
          <div id='search'><button style={{ border: 'none', backgroundColor: 'transparent', marginTop: '-5px' }}><img src={search} alt="img" style={{ width: '18px' }} /></button></div>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <div id='bagdiv'><img src={bag} alt="img" style={{ width: '18px', marginTop: '-5px' }} /></div>
          </button>
          {/* </div> */}
        </div>
      </div>

      <div id='sidenav'>{<Top />}</div>
      <Cart/>
    </navbar>



  )
}

export default Navbar


