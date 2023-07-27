import React from 'react';
import './CarComponent.css'; // Import the CSS file
import logo from '../img/car.png';
import logo1 from "../img/ev2.png"
import logo2 from "../img/wheel.png"
const CarComponent = () => {
  return (
    <div className="hero">
      <div className="highway"></div>
      <div className="city"></div>
      <div className="ev1">
        <img src={logo1} alt="electric vehicle" />
      </div>
      <div className="car">
        <img src={logo} alt='car' />
      </div>
      <div className="wheel">
        <img src={logo2} className="back-wheel" alt="back wheel" />
        <img src={logo2} className="front-wheel" alt="front wheel" />
      </div>
    </div>
  );
};

export default CarComponent;
