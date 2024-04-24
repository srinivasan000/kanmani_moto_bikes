import React from 'react'

function Home() {
  return (
    <section className='hero-section'>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="carousel-content">
<h2><span class="sm">Connect, Explore, Thrive</span>
Join the Kanmani Moto Community
</h2>
<p>Be part of something bigger. Join the vibrant Kanmani Moto community and connect with fellow riders who share your passion for adventure.
      </p>
      <button className=''>View more</button>
      </div>
      <img class="d-block w-100" src="/assets/img/slider/slider1.jpg" alt="First slide"/>    
    </div>
    <div class="carousel-item">
    <div className="carousel-content2">
<h2><span class="sm">Connect, Explore, Thrive</span>
Join the Kanmani Moto Community
</h2>
<p>Be part of something bigger. Join the vibrant Kanmani Moto community and connect with fellow riders who share your passion for adventure.
      </p>
      <button className=''>View more</button>
      </div>
      <img class="d-block w-100" src="assets/img/slider/slider2.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
    <div className="carousel-content">
<h2><span class="sm">Connect, Explore, Thrive</span>
Join the Kanmani Moto Community
</h2>
<p>Be part of something bigger. Join the vibrant Kanmani Moto community and connect with fellow riders who share your passion for adventure.
      </p>
      <button className=''>View more</button>
      </div>
      <img class="d-block w-100" src="assets/img/slider/slider3.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </section>
  )
}

export default Home
