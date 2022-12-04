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
        src='https://cdn.shopify.com/s/files/1/0233/5133/files/travel_cap_2048x.jpg?v=1669760144'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cdn.shopify.com/s/files/1/0233/5133/files/th_x_ls_2048x.jpg?v=1669845995'
        alt='...'
      />
    </MDBCarousel>
  );
}