import React from "react";
import PropTypes from "prop-types";
import Counter from "../counter/Counter";
import ProductDetail from "./ProductDetail";
import Product from "../../products/Product";
class ProductRow extends React.Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleSubtract: PropTypes.func.isRequired,
    product: PropTypes.shape(Product)
  };

  constructor(props) {
    super(props);
    const quantity = props.product.quantity || 0;

    this.state = {
      quantity,
      totalToPay: quantity * props.product.price
    };
  }

  addProduct = numberOfItem => {
    this.updateQuantity(numberOfItem, this.props.handleAdd.bind(this));
  };

  subtractProduct = numberOfItem => {
    this.updateQuantity(numberOfItem, this.props.handleSubtract.bind(this));
  };

  updateQuantity(numberOfItem, afterUpdate) {
    const priceToPay = this.calculatePrice(
      numberOfItem,
      this.props.product.price
    );

    this.setState(
      () => ({
        totalToPay: priceToPay,
        quantity: numberOfItem
      }),
      () => {
        afterUpdate(this.props.product);
      }
    );
  }

  clearQuantity = () => {
    const lastQuantitySelected = this.state.quantity;

    this.updateQuantity(0, product => {
      Array.from({ length: lastQuantitySelected }).forEach(() => {
        this.props.handleSubtract.call(this, product);
      });
    });
  };

  calculatePrice(numberOfItem, price) {
    return numberOfItem * price;
  }

  render() {
    return (
      <li className="product row">
        <div className="col-product">
          <ProductDetail
            image={this.props.product.image}
            name={this.props.product.name}
            code={this.props.product.code}
          />
        </div>
        <div className="col-quantity">
          <Counter
            handleAdd={this.addProduct}
            handleSubtract={this.subtractProduct}
            value={this.state.quantity}
          />
        </div>
        <div className="col-price">
          <span className="product-price">{this.props.product.price}</span>
          <span className="product-currency currency">€</span>
        </div>
        <div className="col-total">
          <span className="product-price">
            {this.props.product.numberOfItems}
          </span>
          <span className="product-currency currency">
            {this.state.totalToPay} €
          </span>
        </div>
        <div className="col-clear">
          <button className="clear" onClick={this.clearQuantity}>
            <span />
          </button>
        </div>
      </li>
    );
  }
}

export default ProductRow;
