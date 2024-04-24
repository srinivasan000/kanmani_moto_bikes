import React from 'react'

function Title({title}) {
  return (
  <div className='title-section'>
    <img src="assets/img/logo-dark.png" alt='logo'/>
    <h2>{title}</h2>
  </div>
    )
}

export default Title