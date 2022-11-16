import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  function addToCart(data) {
    //Have the product
    if (cart.find((item) => item.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((item) => {
          if (item.id !== data.id) {
            return item;
          }
          const copy = { ...item };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }

  function removeFromCart(id) {
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Products products={products} addToCart={addToCart}></Products>
      <Basket
        removeFromCart={removeFromCart}
        products={products}
        cart={cart}
      ></Basket>
    </div>
  );
}

export default App;
