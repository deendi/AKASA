function init() {
    document.body.insertAdjacentHTML(
        'beforeend',
        [
            '<div style="color: Blue">',
            '<b>Saya tambahkan dari external script</b>',
            '</div>',
        ].join('')
    );
}

window.addEventListener('load', init, false);
