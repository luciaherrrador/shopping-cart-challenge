import BuyTwoGetOne from "../coupons/BuyTwoGetOne";
import BulkCoupon from "../coupons/BulkCoupon";
import Product from "./Product";

const productItems = [
  new Product(
    "X7R2OPX",
    "Shirt",
    "assets/img/shirt.png",
    20,
    new BulkCoupon("cab-bulk-2019", "x3 Shirt offer")
  ),
  new Product(
    "X2G2OPZ",
    "Mug",
    "assets/img/mug.png",
    5,
    new BuyTwoGetOne("cabify2x1-2019", "2x1 Mug offer")
  ),
  new Product(
    "X3W2OPY", 
    "Cap", 
    "assets/img/cap.png", 
    10)
];

export default productItems;
