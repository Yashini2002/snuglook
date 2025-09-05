import React from 'react';
import logo from '../../assets/logo.png';
import '../../styles/landingpage.css';

function LandingPage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo"><img src={logo} alt="logo" /></span>
          <span className="brand-name"><b>Snug</b> fit, Smart <b>Look</b></span>
        </div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Try Before You Buy</li>
            <li>How It Works</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#" className="login-link">Login / Sign up</a>
        </div>
      </header>

      {/* Main Banner */}
      <section className="main-banner">
        <div className="banner-content">
          <h2>MODANO</h2>
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="banner-model">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Model" />
        </div>
      </section>

      {/* About Try-On */}
      <section className="about-tryon">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" alt="Virtual Try-On" />
        </div>
        <div className="about-text">
          <p>
            Shop Look lets you try on clothes online — with your own 3D model. Just enter your measurements to create a virtual model for yourself, and see exactly how clothes will look and fit before you buy. No more size guessing, no more returns — just your perfect fit, every time.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="brands">
        <div className="brand-box">HUSTLE</div>
        <div className="brand-box">MODANO</div>
        <div className="brand-box hai-day">HAI DAY</div>
        <div className="brand-box dior">Dior <span className="arrow">&rarr;</span></div>
      </section>

      {/* Categories - Try Before You Buy */}
      <section className="categories">
        <div className="category">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Men" />
          <button className="category-btn">Men</button>
        </div>
        <div className="category">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Women" />
          <button className="category-btn">Women</button>
        </div>
        <div className="category">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Kids" />
          <button className="category-btn">Kids</button>
        </div>
      </section>
      <div className="try-before-buy">
        <h3>Try Before You Buy.</h3>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span className="logo">SL</span>
          <span>© 2025 ShopLook</span>
        </div>
        <div className="footer-right">
          <span>Privacy Policy | Terms</span>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/PayPal_logo.svg" alt="PayPal" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;