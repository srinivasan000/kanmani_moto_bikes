import React from "react";

function ProductCard({img}) {
  return (
    <div className="product-section-card">
      <div className="top">
        <div className="flex">
          <div className="name">
            <h3>R15M</h3>
            <p>Powered by YAMAHA</p>
          </div>
          <div className="price">
            <p>₹1,45,000</p>
          </div>
        </div>
      </div>
      <div className="middle">
        <img src={img} alt="img"/>
      </div>
      <div className="bottom flex">
    <div className="year">
    <h3>Year</h3>
    <p>2021
</p></div>    
<div className="Type">
    <h3>Type</h3>
    <p>sports
</p></div>    
<div className="year">
    <h3>Make</h3>
    <p>BMW
</p></div>        
      </div>
<div className="bottom-end">
            <div className="flex">
                    <img src='assets/img/icons/specifications-1.png' alt='img'/>
                    <p>Engine-Type<br/>4-stroke cylindder</p>
                </div>
                <div className="flex">
                    <img src='assets/img/icons/specifications-2.png' alt='img'/>
                    <p>Engine-Type<br/>4-stroke cylindder</p>
                </div>
                <div className="flex">
                    <img src='assets/img/icons/specifications-3.png' alt='img'/>
                    <p>Engine-Type<br/>4-stroke cylindder</p>
                </div>
                <div className="flex">
                    <img src='assets/img/icons/specifications-4.png' alt='img'/>
                    <p>Engine-Type<br/>4-stroke cylindder</p>
                </div>

                            </div>
                            
    </div>      
  );
}

export default ProductCard;
