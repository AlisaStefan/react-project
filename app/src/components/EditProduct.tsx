import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../style/edit.css";

interface EditProductProps extends RouteComponentProps<{ id: string }> {}

type Product = {
  productId: string;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  starRating: number;
};

function EditProduct(props: EditProductProps) {
  const [product, setProduct] = useState<Product>({
    productId: "",
    productName: "",
    productCode: "",
    releaseDate: "",
    price: 0,
    starRating: 0,
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      `http://localhost:3333/product/${props.match.params.id}`
    );
    const data = await response.json();
    setProduct(data);
  };

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    updateProduct(product);
    props.history.push("/products");
  };

  const updateProduct = async (product) => {
    const response = await fetch(
      `http://localhost:3333/product/${props.match.params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price),
          starRating: parseFloat(product.starRating),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className="form-container">
          <div className="form-item">
            <label>Product</label>
            <input
              className="inputField"
              name="productName"
              type="text"
              value={product.productName}
              onChange={onChange}
            ></input>
          </div>

          <div className="form-item">
            <label>Code</label>
            <input
              className="inputField"
              name="productCode"
              type="text"
              value={product.productCode}
              onChange={onChange}
            ></input>
          </div>

          <div className="form-item">
            <label>Available</label>
            <input
              className="inputField"
              name="releaseDate"
              type="text"
              value={product.releaseDate}
              onChange={onChange}
            ></input>
          </div>

          <div className="form-item">
            <label>Price</label>
            <input
              className="inputField"
              name="price"
              type="text"
              value={product.price}
              onChange={onChange}
            ></input>
          </div>

          <div className="form-item">
            <label>5 Star Rating</label>
            <input
              className="inputField"
              name="starRating"
              type="text"
              value={product.starRating}
              onChange={onChange}
            ></input>
          </div>
          <button className="button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
