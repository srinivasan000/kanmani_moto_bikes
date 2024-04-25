import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home';
import "./App.css";
import About from './components/About';
import Product from './components/Product';
import Info from './components/Info';
import Galary from './components/Galary';
import Feedback from './components/Feedback';
import Map from './components/Map';
import Rigister from './components/Rigister';
import Footer from './components/Footer';
import Category from './components/Category';
const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Home/>
      <Category/>
      <About/>
      <Product/>
      <Info/>
      <Galary/>
      <Feedback/>
      <Rigister/>
      <Map/>
    </main>
    <Footer/>
    </>
  )
}

export default App