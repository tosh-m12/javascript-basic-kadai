const sayGoodMorning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

const sayGoodEvening = () => {
    console.log('こんばんは！');
    console.log('今日も一日お疲れさまでした。');
}

sayGoodMorning();

sayGoodEvening();


const calculateTotal = (price) => {
    console.log(price + 500 + '円');
}

calculateTotal(1200);


const addTwoArguments = (price, shippingFee) => {
    console.log(price + shippingFee + '円');
}

addTwoArguments(1200, 500);

const double = (num) => {
    return num * 2;
}

console.log(double(30));


// const userName = '侍太郎'

// console.log(userName)

const useVariable = () => {
    const userName = '侍太郎';
    console.log(userName);
}

useVariable();

console.log(userName);