import React from 'react';
import "./Carousel.css";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls dealy={1000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cdn.shopify.com/s/files/1/0233/5133/files/HP_banner_template_bd46d404-e01a-4485-9798-de57228f624b_1536x.jpg?v=1669253623'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://cdn.shopify.com/s/files/1/0233/5133/files/Category_Template_-_Cyber_1632x.jpg?v=1668980500'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cdn.shopify.com/s/files/1/0233/5133/products/ROLLOVER_0116_GU1_1400x.jpg?v=1658702797'
        alt='...'
      />
    </MDBCarousel>
  );
}