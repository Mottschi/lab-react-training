import React from 'react';
import './Random.css';

function Random({min, max}) {
  return (
    <div className="Random">
        Random value between {min} and {max} =&gt; {Math.floor(Math.random() * (max + 1 - min) + min)}
    </div>
  )
}

export default Random
