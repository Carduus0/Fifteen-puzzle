const body = document.querySelector('body');
const main = document.createElement('main');
main.classList.add('page');
body.appendChild(main);
const header = document.createElement('h1');
header.textContent = 'Fifteen puzzle';
main.insertAdjacentElement('afterbegin', header);
const div = document.createElement('div');
div.classList.add('table');
main.insertAdjacentElement('beforeend', div);
const btnStart = document.createElement('button');
btnStart.classList.add('start');
div.before(btnStart);


//Schuffle 50% do not vin
//for(let i = 0; i<10; i++){
 //   arr16.sort(()=> Math.random() - 0,5)
//}

// Заполняем массив из 16 мест нолями затем мапом каждое увеличиваем
let arr16 = new Array(16).fill(0).map((item, index) => index + 1);