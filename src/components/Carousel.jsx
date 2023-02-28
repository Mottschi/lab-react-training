import React, { useState } from 'react'

function Carousel({images}) {
  const [currentImage, setCurrentImage] = useState(0);
  function handlePreviousImage(){
    setCurrentImage((current)=>(current - 1 + images.length) % images.length)
  }

  function handleNextImage(){
    setCurrentImage((current)=>(current+1) % images.length)
  }
  return (
    <div className='Carousel'>
      <button onClick={handlePreviousImage}>Left</button>
      <img src={images[currentImage]} alt="" />
      <button onClick={handleNextImage}>Right</button>
    </div>
  )
}

export default Carousel