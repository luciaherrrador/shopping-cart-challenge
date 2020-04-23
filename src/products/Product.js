class Product {
  constructor(code, name, image, price, coupon = null) {
    this.code = code;
    this.name = name;
    this.image = image;
    this.price = price;
    this.coupon = coupon;
  }
}

export default Product;
