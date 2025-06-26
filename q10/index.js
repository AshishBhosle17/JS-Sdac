class Product {
    name;
    productId;
    price;

    constructor(name,productId,price) {
        this.name=name;
        this.productId=productId;
        this.price=price;
    }

    displayDetail() {
        console.log(name);
        console.log(productId);
        console.log(price);
              
    }
}
const prod = new Product("xyz", 9, 1200)
console.log(prod.name); // xyz
console.log(Product.displayDetail); // undefined ???
