import React from 'react'
import Title from './com/Title'
import Card from './com/Card'
function About() {
  return (
    <secction className="about-section">
        <Title title="ABOUT US"/>
        <div className="flex">
            <Card img="assets/img/gallery/gallery1.jpg"  text="kanmani motobikes"/>
            <div className="about-content">
                <p className='blue'>Taking rides to a newer level</p>
                <h2>Great performance
that matters in future</h2>
<p>Welcome to the forefront of ride innovation. At Kanmani Moto Bikes, we're dedicated to revolutionizing the way you experience the road. Our commitment to excellence is evident in every aspect of our rides, from design to performance.</p>
            <p>Ready to elevate your ride experience to a whole new level? Explore our range of vehicles and discover why great performance matters not only today but also in shaping the future of transportation.</p>
            <div className='flex icons'>
            <div className="flex no-wrap ">
                    <img src='assets/img/icons/about-1.svg' alt='img'/>
                    <p>Unparalleled Performance</p>
                </div>
                <div className="flex no-wrap">
                    <img src='assets/img/icons/about-2.svg' alt='img'/>
                    <p>Unparalleled Performance</p>
                </div>
                <div className="flex no-wrap">
                    <img src='assets/img/icons/about-3.svg' alt='img'/>
                    <p>Unparalleled Performance</p>
                </div>
                <div className="flex no-wrap">
                    <img src='assets/img/icons/about-4.svg' alt='img'/>
                    <p>Unparalleled Performance</p>
                </div>

                            </div>
            </div>

        </div>
    </secction>
  )
}

export default About