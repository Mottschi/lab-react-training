import React from 'react';
import './IdCard.css'

function IdCard({lastName, firstName, picture, height, gender, birth}) {
  return (
    <div className='IdCard'>
        <picture>
            <img src={picture} alt={`${firstName} ${lastName}`} />
        </picture>
        <div>
        <p><span>First Name: </span>{firstName}</p>
        <p><span>Last Name: </span>{lastName}</p>
        <p><span>Gender: </span>{gender}</p>
        <p><span>Height: </span>{height}</p>
        <p><span>Birthday: </span>{birth.toString().substring(0, 15)}</p>
        </div>
    </div>
  )
}

export default IdCard