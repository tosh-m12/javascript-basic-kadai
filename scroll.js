// back-btnというidを持つHTML要素を取得し、定数に代入
const backBtn = document.getElementById('back-btn');

// 画面がスクロールされた時にイベント処理を実行する
window.addEventListener('scroll', () => {
    // 画面のスクロール量をpxで取得
    const scrollValue = document.scrollingElement.scrollTop;
    // 画面のスクロール量が300px以上であれば、「TOPに戻るボタンを表示する
    if (scrollValue >= 300) {
        backBtn.style.display = 'inline';
    }
    // 画面のスクロール量がそれ以外（300px未満）であれば、「TOPに戻る」ボタンを非表示
    else {
        backBtn.style.display = 'none';
    }
});