import React from "react";

class SummaryItems extends React.Component {
  render() {
    return (
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">
            {this.props.itemsCount} items
          </span>
          <span className="summary-items-price">
            {this.props.price}
            <span className="currency">€</span>
          </span>
        </li>
      </ul>
    );
  }
}

export default SummaryItems;
