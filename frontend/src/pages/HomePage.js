import React from 'react';
import '../App.css'
import Header from '../../src/components/header'
import SliderComponent from '../../src/components/slider';
import MiniSlider from '../../src/components/miniSlider';

const HomePage = () => {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <SliderComponent />
        <MiniSlider />
      </div>
    </div>
  );
};

export default HomePage;