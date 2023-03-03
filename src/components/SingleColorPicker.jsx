import React, {useState} from 'react';
import './ColorPicker.css'

function SingleColorPicker({value, color, onChange}) {
  console.log('single color picker for', color, 'received value', value);
  const backgroundColor= `rgb(${color==='r' ? value : 0}, ${color==='g' ? value : 0}, ${color==='b' ? value : 0})`;
  return (
    <div className='row'>
      <div className='square' style={{backgroundColor: backgroundColor}}></div>

      <div>
        <label htmlFor={color}>{color.toUpperCase()}:</label>
        <input type="number" name={`${color}-value`} id={color} value={value} onChange={onChange}/>
      </div>
  </div>
  )
}

export default SingleColorPicker