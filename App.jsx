import React from "react";
import "./styles.css";

function Product({ emoji, name, price, oldPrice }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span>{emoji}</span>
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <div className="stars">
          ★★★★★
          <span>(120)</span>
        </div>

        <div className="price-row">
          <strong>{price}</strong>
          <del>{oldPrice}</del>
        </div>

        <button className="add-btn">
          + Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          Shop<span>Ease</span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>

        <div className="nav-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">🛒 Cart</button>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            🔥 NEW COLLECTION
          </div>

          <h1>
            Upgrade Your
            <br />
            <span>Everyday Life.</span>
          </h1>

          <p>
            Discover premium products designed to make
            your everyday life smarter, easier and better.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Now →
            </button>

            <button className="secondary-btn">
              Explore Products
            </button>
          </div>

        </div>

        <div className="hero-product">
          <div className="circle"></div>
          <div className="headphone">🎧</div>
        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div>
            <h4>Free Shipping</h4>
            <p>On orders above ₹999</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🔒</div>
          <div>
            <h4>Secure Payment</h4>
            <p>100% secure checkout</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">↩️</div>
          <div>
            <h4>Easy Returns</h4>
            <p>7 day return policy</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⭐</div>
          <div>
            <h4>Top Quality</h4>
            <p>Premium products</p>
          </div>
        </div>

      </section>


      {/* PRODUCTS */}
      <section className="products-section">

        <div className="section-heading">

          <div>
            <p className="small-title">
              OUR COLLECTION
            </p>

            <h2>Featured Products</h2>
          </div>

          <button className="view-btn">
            View All →
          </button>

        </div>


        <div className="product-grid">

          <Product
            emoji="⌚"
            name="Smart Watch Pro"
            price="₹2,999"
            oldPrice="₹4,999"
          />

          <Product
            emoji="🎧"
            name="Wireless Headphones"
            price="₹4,999"
            oldPrice="₹6,999"
          />

          <Product
            emoji="📱"
            name="Smart Phone X"
            price="₹29,999"
            oldPrice="₹34,999"
          />

          <Product
            emoji="💻"
            name="Ultra Laptop"
            price="₹59,999"
            oldPrice="₹69,999"
          />

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="newsletter">

        <div>
          <h2>Stay in the loop.</h2>
          <p>
            Get updates about new products and exclusive offers.
          </p>
        </div>

        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>
        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          Shop<span>Ease</span>
        </div>

        <p>
          © 2026 ShopEase. All rights reserved.
        </p>

        <div className="socials">
          Instagram &nbsp; • &nbsp; Twitter &nbsp; • &nbsp; Facebook
        </div>

      </footer>

    </div>
  );
}
