import React from "react";
import SummaryPanel from "./components/summary/SummaryPanel";
import ProductPanel from "./components/products/ProductPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { selectedItems } = props.checkout;
    this.state = {
      isreadyToCheckout: false,
      selectedItems,
      couponList: this.getCouponsFromItems(selectedItems)
    };
  }

  handleProductAdded = product => {
    this.props.checkout.scan(product.name);
    this.updateSelectedItems();
  };

  handleProductRemoved = product => {
    this.props.checkout.discart(product.name);
    this.updateSelectedItems();
  };

  updateSelectedItems() {
    const selectedItems = this.props.checkout.selectedItems;
    const coupons = this.getCouponsFromItems(selectedItems);
    this.setState({
      selectedItems,
      couponList: coupons
    });
  }

  getCouponsFromItems(items = this.state.selectedItems) {
    return items.filter(product => product.coupon).map(({ coupon }) => coupon);
  }

  getPriceWithoutDiscount() {
    return this.state.selectedItems.reduce((prev, product) => {
      return prev + product.price;
    }, 0);
  }

  getTotal() {
    return this.props.checkout.total();
  }

  onCheckout = () => {
    this.setState({
      isreadyToCheckout: true
    });

    const selectedItems = [...this.state.selectedItems];
    selectedItems.forEach(({ name }) => {
      this.props.checkout.discart(name);
    });

    this.updateSelectedItems();

    setTimeout(() => {
      this.setState({
        isreadyToCheckout: false
      });
    }, 4000);
  };

  render() {
    if (!this.state.isreadyToCheckout) {
      return (
        <div className="App">
          <ProductPanel
            handleProductAdded={this.handleProductAdded}
            handleProductRemoved={this.handleProductRemoved}
            productsList={this.props.checkout.productsList}
          />
          <SummaryPanel
            priceWithoutDiscount={this.getPriceWithoutDiscount()}
            coupons={this.state.couponList}
            selectedItems={this.state.selectedItems}
            totalToPay={this.getTotal()}
            onCheckout={this.onCheckout}
          />
        </div>
      );
    } 
  }
}

export default App;
