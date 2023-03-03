import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker';
import './ColorPicker.css'

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0)
  const [gValue, setGValue] = useState(0)
  const [bValue, setBValue] = useState(0)

  const backgroundColor = `rgb(${rValue},${gValue},${bValue})`;

  function handleRInputChange(event){
    console.log(event.target.value)
    if (event.target.value === '') return setRValue(0);

    const value = parseInt(event.target.value);
    if (!isNaN(value)) setRValue(Math.max(0, Math.min(255, value)));
  }

  function handleGInputChange(event){
    console.log(event.target.value)
    if (event.target.value === '') return setGValue(0);

    const value = parseInt(event.target.value);
    if (!isNaN(value)) setGValue(Math.max(0, Math.min(255, value)));
  }

  function handleBInputChange(event){
    console.log('event value', event.target.value)
    if (event.target.value === '') return setBValue(0);

    const value = parseInt(event.target.value);
    console.log('parsed value',value)
    if (!isNaN(value)) setBValue(Math.max(0, Math.min(255, value)));
  }

  return (
    <div className='RGBColorPicker'>

      <SingleColorPicker 
        color="r"
        value={rValue}
        onChange={ handleRInputChange  }
      />

      <SingleColorPicker 
        color="g"
        value={gValue}
        onChange={ handleGInputChange  }
      />

      <SingleColorPicker 
        color="b"
        value={bValue}
        onChange={ handleBInputChange  }
      />

      <div className='row'>
        <div className='square' style={{backgroundColor: backgroundColor}}>
        
        </div>
        <p>{backgroundColor}</p>
      </div>
      

    </div>
  )
}

export default RGBColorPicker