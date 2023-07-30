import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7200,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={require('../img/opp.jpg')} alt="img 1" />
          <div className="slide-text">Oppenheimer</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/barb.jpg')} alt="img 2" />
          <div className="slide-text">Barbie</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/flash.webp')} alt="img 3" />
          <div className="slide-text">The Flash</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/bb.webp')} alt="img 4" />
          <div className="slide-text">Blue Bettle</div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;