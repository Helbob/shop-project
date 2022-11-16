import React from "react";
import { insertOrder } from "../modules/db";
import { useRef, useState } from "react";

function Checkout(props) {
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      adress: theForm.current.elements.adress.value,
      basket: props.cart,
    });
    if (response && response.length) {
      setPaymentCompleted(true);
    }
  }
  return (
    <>
      {paymentCompleted ? (
        <p>Thank you for your order!</p>
      ) : (
        <form onSubmit={submit} ref={theForm}>
          <div className="form-control">
            <label htmlFor="form-name">Name</label>
            <input required type="text" name="name" id="form-name" />
          </div>
          <div className="form-control">
            <label htmlFor="form-email">Email</label>
            <input required type="email" name="email" id="form-email" />
          </div>
          <div className="form-control">
            <label htmlFor="form-adress">Adress</label>
            <textarea required type="" name="adress" id="form-adress" />
            <button>Pay</button>
          </div>
        </form>
      )}
    </>
  );
}

export default Checkout;
