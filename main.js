function mainText(text) {

    let innerHtml = `<div style="font-size: 6rem">`;
    if (text) {
        const answers = text.split(';');

        innerHtml += `Možné odpovede:</div><div id="container">`;
        let idx = 1;
        for (let a of answers) {
            innerHtml += `<div class="main-text">${idx}. ${a}</div>`
            idx++;
        }
        innerHtml += `</div>`;
    } else {
        innerHtml += `Pri tejto hádanke nie sú ponúkané možnosti.</div>`;
    }
    const element = document.getElementById("outer");
    element.innerHTML = innerHtml;
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    mainText(urlSearchParams.get('answers'));
}

init();
