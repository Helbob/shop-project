import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);

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
      <Products products={products}></Products>
      <Basket products={products}></Basket>
    </div>
  );
}

export default App;
