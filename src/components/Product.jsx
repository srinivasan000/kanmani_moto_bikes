import React from 'react'
import Title from './com/Title'
import ProductCard from './com/ProductCard'

function Product() {
  return (
    <secction className="product-section">
        <Title title="CHOOSE A MOTOBIKES" img="assets/img/logo-dark.png"/>
        <div className="flex">
            <ProductCard img="assets/img/product/product1.jpg"/>
            <ProductCard img="assets/img/product/product2.jpg"/>
            <ProductCard img="assets/img/product/product3.jpg"/>
            <ProductCard img="assets/img/product/product4.jpg"/>
            <ProductCard img="assets/img/product/product5.jpg"/>
            <ProductCard img="assets/img/product/product6.jpg"/>
        </div>
        <div className="center">
        <button>View all models</button>
        </div>
            </secction>
  )
}

export default Product