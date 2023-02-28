import React from 'react';
import './Rating.css';

function Rating({children}) {
    const filled = Math.round(children);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < filled) stars.push('★')
        else stars.push('☆')
    }
  return (
    <div className="Rating">
        {stars}
    </div>
  )
}

export default Rating