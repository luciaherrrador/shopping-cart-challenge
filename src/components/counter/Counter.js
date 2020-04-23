import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    minValue: PropTypes.number
  };

  static defaultProps = {
    minValue: 0
  };

  add = () => {
    const value = this.props.value + 1;
    this.props.handleAdd(value);
  };

  subtract = () => {
    let currentValue = this.props.value - 1;
    const minValue = this.props.minValue;
    currentValue = currentValue <= minValue ? minValue : currentValue;

    this.props.handleSubtract(currentValue);
  };

  render() {
    return (
      <>
        <button className="count" onClick={this.subtract}>
          -
        </button>
        <input
          type="text"
          className="product-quantity"
          value={this.props.value}
          readOnly
        />
        <button className="count" onClick={this.add}>
          +
        </button>
      </>
    );
  }
}

export default Counter;
