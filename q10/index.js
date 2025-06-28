class Product {
    
    constructor(name,productId,price) {
        this.name=name;
        this.productId=productId;
        this.price=price;
    }

    displayDetail() {
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
              
    }
}
const prod = new Product("xyz", 9, 1200)
console.log(prod.name); // xyz
prod.displayDetail()
