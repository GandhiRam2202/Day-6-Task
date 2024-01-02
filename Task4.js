// 4.write a class to calculate the Uber price.

class UberPrice {
    constructor(price , km , priceMin) {
        this.price = price,
        this.km = km;
        this.priceMin = priceMin
    }

    uberFare() {
        if (this.km <= 40) {
            return `Uber Price: ${this.price + this.priceMin * 2 + this.km * 20}`;
        } else if (this.km > 40 ) {
            return `Uber Price: ${this.price + this.priceMin * 2 + this.km * 18}`;
        }
    }
}

const spend = new UberPrice(20, 50, 20);
console.log(spend.uberFare());
