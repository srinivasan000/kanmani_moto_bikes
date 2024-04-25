import React from 'react'

function Info() {
  return (
    <div className="info-section">
        <div className="flex">
            <div className="info-img">
            <img src='assets/img/news-1.jpg' alt='img'/>
            </div>
            <div className="info-content">
                <p className='blue'>Taking rides to a newer level </p>
                <h2>A step above with
rider-friendly nature</h2>
<div className="flex">
<div className="flex no-wrap ">
                    <img src='assets/img/icons/info-1.svg' alt='img'/>
                    <p>easy to book</p>
                </div>
                <div className="flex no-wrap ">
                    <img src='assets/img/icons/info-2.svg' alt='img'/>
                    <p>easy to book</p>
                </div>    <div className="flex no-wrap ">
                    <img src='assets/img/icons/info-3.svg' alt='img'/>
                    <p>easy to book</p>
                </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Info