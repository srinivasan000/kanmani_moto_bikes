import React from 'react'
import Title from './com/Title'
import Card from './com/Card';
function Galary() {
  return (
    <secction className="galary-section">
        <Title title="GALLERY"/>
        <div className="flex">
        <img src="assets/img/gallery/gallery1.jpg"/>
        <img src="assets/img/gallery/gallery2.jpg"/>
        <img src="assets/img/gallery/gallery3.jpg"/>
        <img src="assets/img/gallery/gallery4.jpg"/>
        <img src="assets/img/gallery/gallery5.jpg"/>
        <img src="assets/img/gallery/gallery6.jpg"/>
        <img src="assets/img/gallery/gallery2.jpg"/>
        <img src="assets/img/gallery/gallery3.jpg"/>

        </div>
            </secction>
  )
}

export default Galary;