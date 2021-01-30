document.getElementById("burger").onclick = function () {
    open()
};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("burger").classList.toggle("position");
};