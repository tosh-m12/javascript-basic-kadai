// outpu-btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入
const addBtn = document.getElementById('add-btn');


// お題
const parentList = document.getElementById('parent-list');

// 自力回答

// const li = document.createElement('li');
// li.textContent = 'これはリスト要素です';

// addBtn.addEventListener('click', () => {
//     document.querySelector('ul').appendChild(li);
// });

// 正解
// HTML要素がクリックされた時にイベント処理を実行
addBtn.addEventListener('click', () => {
    // li要素を新しく作成
    const childList = document.createElement('li');
    // 作成したLi要素にテキストを追加
    childList.textContent = 'これはリスト要素です'
    // 作成したli要素をul要素の子要素として末尾に追加
    parentList.appendChild(childList);
});

// count-btnというidを持つHTML要素を取得し、定数に代入
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされた時にイベント処理を実行
countBtn.addEventListener('click', () => {
    // テキストボックスに入力された文字列を取得する
    const text = document.forms.textForm.textBox.value;
    // 取得した文字列の文字数を出力する
    console.log(text.length + '文字')
});

const getAreaValue = document.getElementById('area-btn');

getAreaValue.addEventListener('click', () => {
    const areaValue = document.forms.areaForm.area.value;
    console.log(areaValue);
});

const osBtn = document.getElementById('os-btn');

osBtn.addEventListener('click', () => {
    const osChoices = document.forms.osForm.os;

    for (let i = 0; i < osChoices.length; i++) {
        if (osChoices[i].checked) {
            console.log(osChoices[i].value);
        }
    }
});

