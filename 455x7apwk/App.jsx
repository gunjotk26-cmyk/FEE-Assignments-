import React, { useReducer } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 599, emoji: "👕" },
  { id: 2, name: "Shoes", price: 1499, emoji: "👟" },
  { id: 3, name: "Watch", price: 1999, emoji: "⌚" },
  { id: 4, name: "Headphones", price: 1299, emoji: "🎧" },
  { id: 5, name: "Backpack", price: 899, emoji: "🎒" },
  { id: 6, name: "Sunglasses", price: 499, emoji: "🕶️" }
];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const found = state.find(
        item => item.id === action.payload.id
      );

      if (found) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INCREASE":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const count = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div style={{ background: "#f4f3fa", minHeight: "100vh", fontFamily: "Arial", color: "#25213d" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        button { cursor: pointer; }
        .products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .product { background: white; padding: 18px; border-radius: 16px; border: 1px solid #e9e6f5; }
        .product:hover { box-shadow: 0 8px 24px #30206015; }
        .add { width: 100%; padding: 11px; background: #6750df; color: white; border: 0; border-radius: 9px; font-weight: bold; }
        .qty { padding: 5px 11px; background: #efecff; color: #5842cf; border: 0; border-radius: 6px; font-size: 17px; }
        @media(max-width: 700px) { .layout { grid-template-columns: 1fr !important; } }
        @media(max-width: 400px) { .products { grid-template-columns: 1fr; } }
      `}</style>

      <header style={{ background: "white", padding: "20px 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#6750df", margin: 0 }}>✦ ShopEasy</h2>
        <b style={{ background: "#efecff", color: "#5842cf", padding: "11px 15px", borderRadius: 25 }}>
          🛒 Cart ({count})
        </b>
      </header>

      <section style={{ margin: "28px auto", maxWidth: 1100, padding: 30, background: "linear-gradient(120deg,#e6e0ff,#fce8f5)", borderRadius: 20 }}>
        <p style={{ color: "#6750df", fontWeight: "bold", letterSpacing: 2 }}>WELCOME TO SHOPEASY</p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", margin: "10px 0" }}>Shopping made simple.</h1>
        <p style={{ color: "#66617b", lineHeight: 1.6 }}>Discover your favourites and add them to your cart.</p>
      </section>

      <main className="layout" style={{ maxWidth: 1100, margin: "auto", padding: 20, display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>
        <section>
          <h2>Explore Products</h2>
          <div className="products">
            {products.map(product => (
              <div className="product" key={product.id}>
                <div style={{ background: "#f1eeff", borderRadius: 12, padding: 20, textAlign: "center", fontSize: 55 }}>
                  {product.emoji}
                </div>
                <h3>{product.name}</h3>
                <h3>₹{product.price.toLocaleString("en-IN")}</h3>
                <button className="add" onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <aside style={{ background: "white", padding: 22, borderRadius: 16, border: "1px solid #e9e6f5" }}>
          <h2>🛍️ Your Cart</h2>
          <p style={{ color: "#858098" }}>{count} item(s)</p>

          {cart.length === 0 ? (
            <p style={{ textAlign: "center", padding: 25, color: "#858098" }}>🛒<br />Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ padding: "14px 0", borderBottom: "1px solid #eee" }}>
                <b>{item.emoji} {item.name}</b>
                <p>₹{item.price} × {item.quantity}</p>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button className="qty" onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>−</button>
                  <b>{item.quantity}</b>
                  <button className="qty" onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
                  <button style={{ marginLeft: "auto", border: 0, background: "white", color: "#d9435d" }} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>Remove</button>
                </div>
              </div>
            ))
          )}

          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "20px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, fontWeight: "bold" }}>
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <button className="add" disabled={cart.length === 0} style={{ marginTop: 20, opacity: cart.length === 0 ? 0.5 : 1 }} onClick={() => alert("Demo checkout! Total: ₹" + total)}>
            Proceed to Checkout →
          </button>

          <button disabled={cart.length === 0} style={{ width: "100%", padding: 11, marginTop: 10, border: "1px solid #ded8fa", background: "white", color: "#6750df", borderRadius: 9 }} onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </aside>
      </main>

      <footer style={{ textAlign: "center", padding: 25, color: "#858098" }}>
        © 2026 ShopEasy · Happy Shopping 💜
      </footer>
    </div>
  );
}
