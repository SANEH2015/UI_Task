import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Lebrel</div>
        <div className="nav">
          <a href="#">HOME</a>
          <a href="#">NEW</a>
          <a href="#">TREND</a>
          <a href="#">SALE</a>
        </div>
      </div>
      <div className="hero">
        <div className="hero-image">
          <img src="https://th.bing.com/th/id/OIP.QvYU7M51Yuak-xuAU7XqQQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="hero-image" />
        </div>
        <div className="hero-content">
          <h2>Trendy Collection's</h2>
          <h1>HIGHEST QUALITY COLLECTION</h1>
          <p>
            Give your home the stylish decoration and deserve at
            affordable prices.
          </p>
          <div className="reviews">
            <h3>Reviews</h3>
            <div className="icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
              <FaSquareInstagram />
              </a>
              <a href="#">
              <IoLogoTwitter />
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <h3>50k</h3>
                <p>Customers</p>
              </div>
              <div className="stat">
                <h3>8k</h3>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <h2>Premium Shades</h2>
        <div className="product-container">
          <div className="product">
            <div className="product-image">
              <img src="https://placehold.co/300x300" alt="product-image" />
            </div>
            <div className="product-content">
              <h3>Women Gallery</h3>
              <p>Go Now</p>
            </div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src="https://placehold.co/300x300" alt="product-image" />
            </div>
            <div className="product-content">
              <h3>Fashion</h3>
            </div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src="https://placehold.co/300x300" alt="product-image" />
            </div>
            <div className="product-content">
              <h3>Fashion</h3>
            </div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src="https://placehold.co/300x300" alt="product-image" />
            </div>
            <div className="product-content">
              <h3>Fashion</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
