import React from 'react'

function Card({img,text}) {
  return (
<div className='box'>
    <div className='product-card'>
        <img src={img}alt='img'/>
        <p className='text'>{text}</p>
    </div>
    </div>
  )
}

export default Card