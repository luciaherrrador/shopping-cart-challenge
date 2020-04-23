import React from "react";
import Panel from "../panel/Panel";
import SummaryItems from "./SummaryItems";
import SummaryTotal from "./SummaryTotal";
import SummaryDiscounts from "./discounts/SummaryDiscounts";
import SummaryDiscount from "./discounts/SummaryDiscount";

class SummaryPanel extends React.Component {
  getUniqueCouponsList() {
    const couponsList = this.props.coupons;
    return couponsList
      .map(coupon => coupon["code"])
      .map((name, index, coupons) => coupons.indexOf(name) === index && index)
      .filter(index => couponsList[index])
      .map(index => couponsList[index]);
  }

  getDiscountQuantityByCode(couponCode) {
    const itemsWithCoupon = this.props.selectedItems.filter(
      product => product.coupon && product.coupon.code === couponCode
    );

    const firstProduct = itemsWithCoupon[0];

    if (!firstProduct) {
      return 0;
    }

    const totalWithoutDiscount = itemsWithCoupon.reduce(
      (prev, product) => prev + product.price,
      0
    );

    const totalWithDiscount = firstProduct.coupon.calculateDiscount(
      firstProduct.price,
      itemsWithCoupon.length
    );

    return totalWithDiscount - totalWithoutDiscount;
  }

  getCouponsListRenderItems() {
    if (!this.props.coupons.length) {
      return null;
    }

    const sumaryDiscounts = Object.values(this.getUniqueCouponsList())
      .map(({ code, name }) => {
        const discountQuantity = this.getDiscountQuantityByCode(code);

        if (discountQuantity) {
          return (
            <SummaryDiscount
              key={code}
              discountName={name}
              discountQuantity={this.getDiscountQuantityByCode(code)}
            />
          );
        }

        return null;
      })
      .filter(x => x);

    if (sumaryDiscounts.length) {
      return <SummaryDiscounts>{sumaryDiscounts}</SummaryDiscounts>;
    }

    return null;
  }

  render() {
    return (
      <Panel title="Order Summary" className="summary">
        <SummaryItems
          itemsCount={this.props.selectedItems.length}
          price={this.props.priceWithoutDiscount}
        />

        {this.getCouponsListRenderItems()}

        <div className="summary-total wrapper">
          <SummaryTotal total={this.props.totalToPay} />
          <button type="submit" onClick={this.props.onCheckout}>
            Checkout
          </button>
        </div>
      </Panel>
    );
  }
}

export default SummaryPanel;
