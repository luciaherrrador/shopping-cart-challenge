import React from "react";

function ProductDetail({ image, name, code }) {
  return (
    <figure className="product-image">
      <img src={image} alt={name} />
      <div className="product-description">
        <h1>{name}</h1>
        <p className="product-code">Product code {code}</p>
      </div>
    </figure>
  );
}

export default ProductDetail;
