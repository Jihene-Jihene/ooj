class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    
    addItem(product, quantity) {
        // Check if item already exists
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }


    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} x $${item.product.price} = $${item.getTotalPrice()}`);
        });
    }
}


const apple = new Product(1, 'Apple', 1.00);
const banana = new Product(2, 'Banana', 0.75);
const orange = new Product(3, 'Orange', 1.50);


const cart = new ShoppingCart();


cart.addItem(apple, 3);
cart.addItem(banana, 2);
cart.addItem(orange, 5);


console.log("Cart items:");
cart.displayItems();  


console.log(`Total price: $${cart.getTotal()}`); 

cart.removeItem(2);  


console.log("Cart items after removal:");
cart.displayItems();  


console.log(`Total price after removal: $${cart.getTotal()}`);  



