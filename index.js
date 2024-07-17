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

src="https://code.jquery.com/jquery-3.1.1.min.js"
crossorigin="anonymous"

function getStoredValue() {
    conts StoredValue =
    localStorage.getItem('counterValue')
    return StoredValue === null
    ? 0
    : Number(StoredValue);
}

function handleClickCounter() {
    const StoredValue =  getStoredValue();
    const newValue = StoredValue + 1;
    // update button text
    const elButton =
    document.getElementById('btnCounter')
    elButton.innerHTML = newValue;
    // Store new value
    localStorage.setItem('counterValue', newValue);
}

$(document).ready(() => {
    const elButton =
    document.getElementById('btnCounter');
    elButton.innerHTML = getStoredValue();
});

//const elBtnHello = document.getElementById('btnHello');
//const sayHello = () => alert('Hello');

// Menambahkan event handler sendiri
//elBtnHello.addEventListener('click', sayHello)


