class Product {
    constructor(name, sellIn, price) {
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
    }

    updatePrice() {

        if (this.sellIn > 0 && this.price > 0) { 
            this.price -= 1;
        } else {
            if(this.price >= 2) {
                this.price -= 2;
            } else {
                this.price = 0;
            }
        }
        this.sellIn -= 1;
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