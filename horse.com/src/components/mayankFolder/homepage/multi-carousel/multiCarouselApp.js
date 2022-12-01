import MultiCarousel from "./multiCarousel"

const MultiCarouselApp = () => {
    return (
        <div style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            { <MultiCarousel show={4}>
                <div>
                    <div style={{padding: 1, marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/WEB_732x.jpg?v=1666132703" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Weekend Tote Bag</h4>
                            <h4>$349.95</h4>
                        </div>
                        <p className="colorline">Black</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/02_0393_732x.jpg?v=1666050085" alt="placeholder" style={{width: '100%',height:'414px' }}/>
                        <div className="multiline">
                            <h4>The Travel Wallet</h4>
                            <h4>$139.95</h4>
                        </div>
                        <p className="colorline">Tan</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/ROLLOVER_1582_732x.jpg?v=1656553348" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>Backpack</h4>
                            <h4>$449.05</h4>
                        </div>
                        <p className="colorline">Black</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/ROLLOVER_1230_732x.jpg?v=1660601797" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Dress Watch</h4>
                            <h4>$540.34</h4>
                        </div>
                        <p className="colorline">Leather</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/BL_732x.jpg?v=1666129773" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Friday Bag</h4>
                            <h4>$123.34</h4>
                        </div>
                        <p className="colorline">Coffee</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/02_0690_732x.jpg?v=1666050608" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Park Tote Bag</h4>
                            <h4>$98.45</h4>
                        </div>
                        <p className="colorline">Tan</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 1,marginRight:'20px'}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/02_0331_732x.jpg?v=1668986086" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Sporty Crossbody</h4>
                            <h4>$249.95</h4>
                        </div>
                        <p className="colorline">Coffee</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="//cdn.shopify.com/s/files/1/0233/5133/products/ROLLOVER_2043_732x.jpg?v=1656554562" alt="placeholder" style={{width: '100%',height:'414px'}} />
                        <div className="multiline">
                            <h4>The Dress watch</h4>
                            <h4>$432.3</h4>
                        </div>
                        <p className="colorline">Black Leather</p>
                        <p className="offer">30% off at checkout</p>
                    </div>
                </div>
            {/* </MultiCarousel> */}
            </MultiCarousel>}
        </div>
    )
}

export default MultiCarouselApp