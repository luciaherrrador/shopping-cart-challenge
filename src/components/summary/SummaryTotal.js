import React from "react";

function SummaryTotal({ total }) {
  return (
    <ul>
      <li>
        <span className="summary-total-cost">Total cost</span>
        <span className="summary-total-price">{total} €</span>
      </li>
    </ul>
  );
}

export default SummaryTotal;
