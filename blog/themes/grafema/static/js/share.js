function copyLink(url) {
    navigator.clipboard.writeText(url).then(function () {
        var btn = document.getElementById('copy-btn');
        btn.classList.add('copied');
        setTimeout(function () {
            btn.classList.remove('copied');
        }, 2000);
    });
}
