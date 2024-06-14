import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <div className="res-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"></img>
      </div>
      <div className="res-info">
        <div className="res-name">Restaurant Name</div>
        <div className="res-address">Address</div>
        <div className="res-rating">Rating</div>
        <div className="res-cuisine">Cuisine</div>
      </div>
      <div className="res-price">Price</div>
      <div className="res-menu">Menu</div>
      <div className="res-order">Order Now</div>
    </div>
  )
}


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className='res-container'>
        <RestaurantCard/>
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout/>);
  