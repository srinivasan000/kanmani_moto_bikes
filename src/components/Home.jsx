import React, {useState } from "react";

function Home() {
  const myStyle = [
    {
      background:
        "linear-gradient(#05059644,#05059644), url(assets/img/slider/slider1.jpg) no-repeat center fixed",
    },
    {
      background:
        "linear-gradient(#05059644,#05059644), url(assets/img/slider/slider2.jpg) no-repeat center fixed",
    },
    {
      background:
        "linear-gradient(#05059644,#05059644), url(assets/img/slider/slider3.jpg) no-repeat center fixed",
    },
  ];
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count===2 ? 0 : count+1);
  };

  const decrement = () => {
    setCount(count ===1 ? myStyle.length - 1 : count-1);
  }
    return (
    <section className="hero-section" style={myStyle[count]}>
      <div className="hero-card">
        <h2><span>connect, Explore,</span> <br/>Thrive Join the Kanmani Moto Community</h2>
        <p>
          onnect, Explore, Thrive Join the Kanmani Moto Community Be part of
          something bigger. Join the vibrant Kanmani Moto community and connect
          with fellow riders who share your passion for adventure. View more{" "}
        </p>
        <button>View more</button>
      </div>
      <div className="slide-control">
        <button onClick={decrement}>&lt;</button>
        <button onClick={increment}>&gt;</button>
      </div>
    </section>
  );
}

export default Home;
