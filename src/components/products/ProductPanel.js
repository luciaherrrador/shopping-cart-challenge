import React from "react";
import Panel from "../panel/Panel";
import ProductListHeader from "./ProductListHeader";
import ProductList from "./ProductList";

class ProductPanel extends React.Component {
  render() {
    return (
      <Panel title="Shopping cart" className="products">
        <ProductListHeader />
        <ProductList
          productsList={this.props.productsList}
          onProductAdded={this.props.handleProductAdded}
          onProductRemoved={this.props.handleProductRemoved}
        />
      </Panel>
    );
  }
}

export default ProductPanel;
