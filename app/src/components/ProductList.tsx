import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3333/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th> Product </th>
                <th> Code </th>
                <th> Available </th>
                <th> Price </th>
                <th> 5 Star Rating </th>
              </tr>
            </thead>

            <tbody>
              {products.map((currentProduct, i) => {
                return <Product product={currentProduct} key={i} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProductList;
