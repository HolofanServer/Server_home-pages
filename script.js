window.onload = function() {
    const animationElement = document.getElementById('animation');
    setTimeout(() => {
        animationElement.classList.add('mask-animation');
    }, 500); // 0.5秒後にアニメーションを開始（必要に応じて調整）
};