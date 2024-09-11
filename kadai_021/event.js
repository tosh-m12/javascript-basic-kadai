const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const hTwoText = document.getElementById('text');
        hTwoText.textContent = 'ボタンをクリックしました';
    },2000);
});