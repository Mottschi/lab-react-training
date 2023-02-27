import React from 'react';
import './BoxColor.css';

function BoxColor({r, g, b}) {
    // Method to calculate brightness and determine which text color whould be used based on information found here:
    // https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = brightness < 125 ? 'white' : 'black';    
  return (
    <div className='BoxColor' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: textColor}}>
        <p>
            <span>rgb({r},{g},{b})</span>
            <span>#{r.toString(16)}{g.toString(16)}{b.toString(16)}</span>
        </p>
    </div>
  )
}

export default BoxColor
