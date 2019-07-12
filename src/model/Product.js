class Product {
    constructor(name, sellIn, price) {
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getSellIn() {
        return this.sellIn;
    }

    setSellIn(newSellIn) {
        this.sellIn = newSellIn;
    }

    getPrice() {
        return this.price;
    }
    
    setPrice(newPrice) {
        this.price = newPrice;
    }
  }

module.exports = Product;