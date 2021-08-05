// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

//   -- отримує текст з параграфа з id "content"

let pElem = document.getElementById('content');
console.log(pElem.innerText);

//   -- отримує текст з блоку з id "rules"

let divElem = document.getElementsByTagName('div')[0];
console.log(divElem.innerText);

//   -- замініть текст параграфа з id 'content' на будь-який інший

pElem.innerText = 'This is new text in a paragraph';

//   -- замініть текст параграфа з id 'rules' на будь-який інший

divElem.innerText = 'This is new text in div element';

//   -- змініть кожному елементу колір фону на червоний

const elements = document.querySelectorAll('body > *');

for (const elem of elements) {
    elem.style.backgroundColor = 'red';
}

//   -- змініть кожному елементу колір тексту на синій

for (const elem of elements) {
    elem.style.color = 'blue';
}

//   -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let divClassList = document.getElementById('rules').classList;

for (const className of divClassList) {
    console.log(className);
}

//   -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

let fcRulesElems = document.getElementsByClassName('fc_rules');

for (const elem of fcRulesElems) {
    elem.addEventListener('click', printText);
    elem.addEventListener('click', changeText);
}

function printText(ev) {
    console.log(ev.target.innerText);
}

function changeText(ev) {
    ev.target.innerText = 'This is new text in element with class fc_rules';
}

//   -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const elem of fcRulesElems) {
    elem.style.color = 'red';
    elem.style.backgroundColor = 'white';
}
