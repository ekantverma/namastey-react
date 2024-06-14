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

const RestaurantCard = (props) => {
  return (
    <div className='res-card' style={{ 
      backgroundColor: 'f0f0f0'
    }}>
        <img 
        className='res-logo'
        alt='res-logo' 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683"></img>
        <h3 className='rest-name'>{props.resName}</h3>
        <h4 className='rest-stars'>4.4 Stars</h4>
        <h4 className="rest-time">38 Minutes</h4>
        <h4>Chinese, Asian, Tibetan</h4>
      </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className='res-container'>
        <RestaurantCard resName="Chinese Woks"/>
        <RestaurantCard resName="KFC"/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
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
  