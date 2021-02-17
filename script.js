// Бургер меню
document.getElementById("burger").onclick = function () {
    open()
};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("burger").classList.toggle("position");
};

//Вопрос ответ
document.getElementById("questions").onclick = function () {
    open0()
};

function open0() {
    document.getElementById("answer").classList.toggle("show-answer");
    document.getElementById("img").classList.toggle("reverse");
};
// 1

document.getElementById("questions1").onclick = function () {
    open1()
};

function open1() {
    document.getElementById("answer1").classList.toggle("show-answer");
    document.getElementById("img1").classList.toggle("reverse");
};
//2

document.getElementById("questions2").onclick = function () {
    open2()
};

function open2() {
    document.getElementById("answer2").classList.toggle("show-answer");
    document.getElementById("img2").classList.toggle("reverse");
};
//3

document.getElementById("questions3").onclick = function () {
    open3()
};

function open3() {
    document.getElementById("answer3").classList.toggle("show-answer");
    document.getElementById("img3").classList.toggle("reverse");
};
//4