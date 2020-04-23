import React from "react";

class SummaryDiscounts extends React.Component {
  render() {
    return (
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default SummaryDiscounts;
