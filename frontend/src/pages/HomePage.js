import React from 'react';
import '../styles/homePage.css'
import Header from '../../src/components/header'
import SliderComponent from '../../src/components/slider';


const HomePage = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <h2 className='suggest'>Suggested Movies</h2>
        <SliderComponent />
      </div>
    </div>
  );
};

export default HomePage;