class Checkout {
  constructor(productsList) {
    this.productsList = productsList;
    this.selectedItems = [];

    return this;
  }

  scan(productName) {
    const product = this.findProductByName(productName);
    this.selectedItems.push(product);

    return this;
  }

  discart(productName) {
    const product = this.findProductByName(productName);
    const index = this.selectedItems.findIndex(
      prod => prod.code === product.code
    );

    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }

    return this;
  }

  discartAll() {
    this.selectedItems = [];
  }

  getGroupedProductsByCode() {
    const group = {};

    this.selectedItems.forEach(product => {
      const { code } = product;
      if (!(code in group)) {
        group[code] = [];
      }

      group[code].push(product);
    });

    return group;
  }

  getTotalPriceFromProducts(products) {
    return products.reduce((prev, product) => {
      return prev + product.price;
    }, 0);
  }

  getTotalPriceFromProductsWithCoupon(products) {
    const firstProduct = products[0];

    if (!firstProduct) {
      return 0;
    }

    const coupon = firstProduct.coupon;
    return coupon.calculateDiscount(firstProduct.price, products.length);
  }

  hasProductsCoupon(products) {
    return products[0] && products[0].coupon;
  }

  total() {
    const groups = this.getGroupedProductsByCode();
    const total = Object.values(groups).reduce((prev, arrayProduct) => {
      let productTotal = 0;

      if (this.hasProductsCoupon(arrayProduct)) {
        productTotal = this.getTotalPriceFromProductsWithCoupon(arrayProduct);
      } else {
        productTotal = this.getTotalPriceFromProducts(arrayProduct);
      }

      return prev + productTotal;
    }, 0);
    
    return total;
  }

  findProductByName(name) {
    return this.productsList.find(product => {
      return product.name.toLowerCase() === name.toLowerCase();
    });
  }
}

export default Checkout;
