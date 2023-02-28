import React from 'react';
import './NumbersTable.css';

function NumbersTable({limit}) {
  const arr = new Array(limit).fill(0);

  return (
    <ul className='NumbersTable'>
      {arr.map( (element, index) => <li key={index} style={{backgroundColor: index % 2 ? 'red' : 'white'}}><span>{index+1}</span></li>)}
    </ul>
  )
}

export default NumbersTable