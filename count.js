function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}

function startCountDown(minutes) {

    const countDownDate = addMinutes(new Date(), minutes);

    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("counter").innerHTML = `<div>Zostávajúci čas:</div>
             <div>${hours}h ${minutes}m ${seconds}s</div>`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "ČAS VYPRŠAL";
        }
    }, 1000);
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    startCountDown(urlSearchParams.get('time'));
}

init();
