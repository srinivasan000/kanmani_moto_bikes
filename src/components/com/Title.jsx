import React from 'react'

function Title({title,img}) {
  return (
  <div className='title-section'>
    <img src={img} alt='logo'/>
    <h2>{title}</h2>
  </div>
    )
}

export default Title