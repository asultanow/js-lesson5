// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').style.color = '#062021';

// b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul')[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListElems = document.getElementsByClassName('linkList');

for (const elem of linkListElems) {
    elem.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2Text = document.getElementsByClassName('listElement2')[0].innerText;
console.log(listElement2Text);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElems = document.getElementsByTagName('li');

for (const li of liElems) {
    li.style.background = 'lightgray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElems = document.getElementsByTagName('a');

for (const a of aElems) {
    a.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const a of aElems) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const a of aElems) {
    a.classList.add(`element_${a.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeaderElems = document.getElementsByClassName('sub-header');
let bgColor = prompt('Color:');

for (const elem of subHeaderElems) {
  elem.style.backgroundColor = bgColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let textColor = prompt('Color:');

for (const elem of subHeaderElems) {
  if (elem.innerText === 'content 2 segment') {
    elem.style.color = textColor;
  }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let pText = prompt('Text');

document.querySelector('.content_1 p').innerText = pText;

// l) отримати елементи p та змінити їм padding на 20px

let pElems = document.getElementsByTagName('p');

for (const p of pElems) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2Elem = document.getElementsByClassName('text2')[0];
text2Elem.innerText = 'monday-2021';
