class Product {
    constructor(name, price, category) {
        // console.log('敏感肌にも優しい100%天然由来のシャンプーです。');
        // this.name = 'シャンプー';
        // this.price = 500;
        // this.category = '生活雑貨';
        this.name = name;
        this.price = price;
        this.category = category;
    }

    describe() {
        console.log('この商品は' + this.name + 'です。');
    }
}


const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

console.log(shampoo);
shampoo.describe();

console.log(coffee);
coffee.describe();

const user = {
    name: '侍太郎',
    age: 36,
    greet: () => {
        console.log('よろしくお願いします！')
    }
    
}

user.greet();


console.log(user);

const test = { test1: '1', test2: '2', test3: '3'}

console.log(test);