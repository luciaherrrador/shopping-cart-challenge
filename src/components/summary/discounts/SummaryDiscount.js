import React from "react";

function SummaryDiscount({ discountName, discountQuantity }) {
  return (
    <li>
      <span>{discountName}</span>
      <span>{discountQuantity} €</span>
    </li>
  );
}

export default SummaryDiscount;
