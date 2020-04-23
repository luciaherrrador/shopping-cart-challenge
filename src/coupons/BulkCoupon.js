import Coupon from "./Coupon";

class BulkCoupon extends Coupon {
  constructor(code, name, minItems = 3) {
    super(code, name, "Buy x3 items and get 10% discount on every item");
    this.minItems = minItems;
  }

  calculateDiscount(unitProductPrice, numberOfItems) {
    const DISCOUNT_PERCENT = 5;

    if (numberOfItems < this.minItems) {
      return unitProductPrice * numberOfItems;
    }

    unitProductPrice =
      unitProductPrice - unitProductPrice * (DISCOUNT_PERCENT / 100);

    return unitProductPrice * numberOfItems;
  }
}

export default BulkCoupon;
