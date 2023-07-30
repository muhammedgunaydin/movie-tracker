import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/miniSlider.css';

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
    <div className="miniSlider-container">
      <Slider {...settings}>
        <div onClick={()=>{
          window.location.href = 'localhost:3000/batman'
        }} className="slide-item">
          <img src={require('../img/batman.jpg')} alt="Resim 1" />
          <div className="slide-text">Batman Dark Knight</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/bedel.jpg')} alt="Resim 2" />
          <div className="slide-text">Esaretin Bedeli</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/fight.jpg')} alt="Resim 3" />
          <div className="slide-text">Fight Club</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/matrix.jpg')} alt="Resim 4" />
          <div className="slide-text">Matrix</div>
        </div>
        <div className="slide-item">
          <img src={require('../img/star.jpg')} alt="Resim 5" />
          <div className="slide-text">Star Wars</div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;