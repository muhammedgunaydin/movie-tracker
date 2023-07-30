import React from 'react';
import '../App.css'
import Header from '../../src/components/header'
import SliderComponent from '../../src/components/slider';


const HomePage = () => {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <SliderComponent />
      </div>
    </div>
  );
};

export default HomePage;