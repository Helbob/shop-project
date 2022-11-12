import React from "react";
import Product from "./Product";
function Products(props) {
  return (
    <main className="Products">
      {props.products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
    </main>
  );
}

export default Products;
