import React from 'react'
import './DriverCard.css';
import Rating from './Rating';

function DriverCard({name, rating, img, car}) {
  return (
    <div className='DriverCard'>
    <img src={img} alt={name} />
        <div>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>    
            <p>{car.model} - {car.licensePlate}</p>
        </div>
        
    </div>
  )
}

export default DriverCard