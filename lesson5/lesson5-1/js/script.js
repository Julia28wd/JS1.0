let item2 = document.getElementsByTagName('li')[2];
let item3 = document.getElementsByTagName('li')[1];
let item5 = document.createElement('li');
let menu = document.getElementsByTagName('ul');
item5.classList.add('menu-item');
item5.textContent = 'Пятый пункт';

menu[0].insertBefore(item2, item3);
menu[0].appendChild(item5);

document.body.style.background = 'url(' + 'img/apple_true.jpg' + ') center no-repeat';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.getElementsByClassName('adv');
let column = document.getElementsByClassName('column')[1];
column.removeChild(adv[0]);

let promptBlock = document.getElementById('prompt');
let answer = prompt("Как Вы относитесь к технике Apple?");
promptBlock.textContent = answer;
