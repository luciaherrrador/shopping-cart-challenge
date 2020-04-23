import Coupon from "./Coupon";

class BuyTwoGetOne extends Coupon {
  constructor(code, name) {
    super(code, name, "Buy two, get one free");
  }

  calculateDiscount(unitProductPrice, numberOfItems) {
    const needToBuy = 2;
    const paid = 1;

    return unitProductPrice * Math.round(numberOfItems / needToBuy) * paid;
  }
}

export default BuyTwoGetOne;
