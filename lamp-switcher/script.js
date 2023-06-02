function switcher(params1, params2) {
    const lamp = document.getElementById(params1);
    const toogle = document.getElementById(params2);

    toogle.checked ? (lamp.src = "img/on.png") : (lamp.src = "img/off.png");
}
function switcherGroup(params1, params2) {
    const lamps = document.querySelectorAll("." + params2);
    const toogle = document.getElementById(params1);

    for (const lamp of lamps) {
        toogle.checked ? (lamp.src = "img/on.png") : (lamp.src = "img/off.png");
    }
}
