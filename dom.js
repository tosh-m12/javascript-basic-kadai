console.log(document.head);

console.log(document.body);

console.log(window);

console.log(document.getElementById('first-heading'));

console.log(document.getElementsByClassName('heading'));

const headings = document.getElementsByClassName('heading');

// 複数のHTML要素を一つずつ取得し、中身を出力
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

// const cssHeadings = document.querySelectorAll('.heading');
// const cssLists = document.querySelectorAll('li');

// for (let i = 0; i < cssHeadings.length; i++){
//     console.log(cssHeadings[i]);
// }

// for (let i = 0; i < cssLists.length; i++){
//     console.log(cssLists[i]);
// }

// 新しくli要素を追加、定数に代入
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);