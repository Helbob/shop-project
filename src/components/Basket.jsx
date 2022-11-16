import React from "react";
import { useState } from "react";
import Checkout from "./Checkout";

function Basket(props) {
  const [showForm, setShowForm] = useState(false);

  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x{item.amount} {item.amount * item.price}
            ,-
            <button
              className="remove"
              onClick={() => props.removeFromCart(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()},-</h3>
      {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
      {showForm && <Checkout cart={props.cart}></Checkout>}
    </section>
  );
}

export default Basket;
