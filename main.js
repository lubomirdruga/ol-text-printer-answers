function mainText(text) {

    const answers = text.split(';');

    let innerHtml = '';
    let idx = 1;
    for (let a of answers) {
        innerHtml += `<div class="main-text">${idx}. ${a}</div>`
        idx++;
    }
    const element = document.getElementById("container");
    element.innerHTML = innerHtml;
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    mainText(urlSearchParams.get('answers'));
}

init();
