function mainText(text) {
    const element = document.getElementById("main-text");
    element.innerText = `${text}`;
}

function additionalText(text) {
    const element = document.getElementById("additional-text");
    element.innerText = `${text}`;
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    mainText(urlSearchParams.get('h1'));
    additionalText(urlSearchParams.get('h2'));
}

init();
