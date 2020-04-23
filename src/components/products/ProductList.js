import React from "react";
import ProductRow from "./ProductRow";

class ProductList extends React.Component {
  render() {
    const list = this.props.productsList.map(product => (
      <ProductRow
        key={product.code}
        product={product}
        handleAdd={this.props.onProductAdded}
        handleSubtract={this.props.onProductRemoved}
      />
    ));
    return <ul className="products-list">{list}</ul>;
  }
}

export default ProductList;
