import React,{useState} from "react";
const Header = () => {
  const [menu,setMenu]=useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="assets/img/logo/logo.png" width="192px" alt="img" />
        </div>
        <ul className={"nav_links "+ (menu && "show")} >
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li className="bikedropdown">
            <a href="#">BIKES</a>
            <ul className="bikes dropdown">
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
              <li>R15M</li>
            </ul></li>
<li className="scooterdropdown">
            <a href="#" >
              SCOOTER
            </a>

          <ul className="scooters dropdown">
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
            <li>abcd</li>
          </ul>
          </li> 
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">OFFERS</a>
          </li>
          <li>
            <a href="#">EMI</a>
          </li>
          <li>
            <a href="#">BLOGS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="menubar" onClick={()=>{setMenu(!menu)}}>
          <img src="assets/img/icons/menu.svg"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
