import React, { useState } from 'react';
import './FaceBook.css';
import profiles from '../data/berlin.json';
import LikeButton from './LikeButton';



function FaceBook() {
  const [filter, setFilter] = useState('none');
  const countries = Array.from(new Set(profiles.map(profile => profile.country)));
  profiles.forEach(profile => profile.id = crypto.randomUUID());

  function handleHightCountry(country){
    if (filter === country) return setFilter('none');
    setFilter(country);
  }

  return (
    <div className='FaceBook'>
      <p>Click to highlight profiles from a specific country. Click same country again to remove highlight.</p>
      {countries.map(country => (
        <button key={country}
                className={(country === filter ? 'btn-country highlight' : 'btn-country')}
                onClick={()=> handleHightCountry(country)}>{country}</button>
      ))}
      {profiles.map((profile)=>(
        <div className={(profile.country === filter ? 'facebook-profile highlight' : 'facebook-profile')} key={profile.id}>
          <picture>
              <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
          </picture>
          <div>
          <p><span>First Name: </span>{profile.firstName}</p>
          <p><span>Last Name: </span>{profile.lastName}</p>
          <p><span>Country: </span>{profile.country}</p>
          <p><span>Type: </span>{profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>))}
    </div>
  )
}

export default FaceBook