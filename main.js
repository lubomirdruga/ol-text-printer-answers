function mainText(text) {
    const element = document.getElementById("main-text");
    element.innerText = `${text}`;
    console.log(text);
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    mainText(urlSearchParams.get('h1'));
}

init();
