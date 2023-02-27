import React, { useState } from 'react';
import './ClickablePicture.css'

function ClickablePicture(props) {
    const [count, setCount] = useState(0);
    const images = [props.img, props.imgClicked];

  return (
    <img className="ClickablePicture" src={images[count%2]} alt="Clickable Picture" onClick={()=>{setCount(count+1)}}/>
  )
}

export default ClickablePicture