import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.css'
import { productosCarousel } from "../data/productosCarousel";

const Carrousel = () => {
  return (
    <div>
      <Carousel className='carousel-container' autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={700} emulateTouch={true} swipeable={true}>
        {productosCarousel.map(({ nombre, image }, i) => (
          <div key={i}>
            <img className='carousel-image' src={image} alt={nombre} />
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default Carrousel;
