import React from 'react'
import Title from './com/Title'
import Card from './com/Card'

function Category() {
  return (
    <section className="category-section">
        <Title title="LOOKING FOR"/>
        <div className="flex">
        <Card text="Bikes" img="assets/img/category/bikes.jpg"/>
        <Card text="Scooters" img="assets/img/category/scooter.jpg"/>
        <Card text="Services" img="assets/img/category/services.jpg"/>
    
        </div>
        </section>
    )
}

export default Category