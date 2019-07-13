class CarInsurance {
    constructor(products = []) {
      this.products = products;
    }
    updatePrice() { 
      this.products.forEach(product => {
        product.updatePrice();
      });
      return this.products;
    }

    getProducts() {
      return this.products;
    }

    
  }

  module.exports = CarInsurance;