function init() {
    setTimeout(() => {
    document.body.insertAdjacentHTML(
        'beforeend',
        [
            '<div style="color: Blue">',
            '<b>Saya tambahkan dari external script</b>',
            '</div>',
        ].join('')
    );
    }, 1000)
}

window.addEventListener('load', init, false);
