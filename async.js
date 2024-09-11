// 同期処理を実行する
console.log('処理1');
console.log('処理2');
console.log('処理3');


// 2秒の待ち時間設定
setTimeout(() => {
    console.log('処理4（非同期処理）');
}, 2000);

// 同期処理を実行
console.log('処理5');
console.log('処理6');