let openShop = document.getElementById('open-btn');
console.log(openShop);

let mainItems = document.getElementsByClassName('main-info');
for(let i = 0; i < mainItems.length; i++) {
	console.log(mainItems[i]);
	}

let goodItems = document.getElementsByClassName('goods-item');
for(let i = 0; i < goodItems.length; i++) {
	console.log(goodItems[i]);
	}

let main = document.getElementsByClassName('main')[0];
let buttons = main.getElementsByTagName('button');
for(let i = 0; i < buttons.length; i++) {
	console.log(buttons[i]);
}

let item1 = document.querySelector('.choose-item');
let item2 = document.querySelector('.time-value');
let item3 = document.querySelector('.count-budget-value');
console.log(item1, item2, item3);

let employers = document.querySelectorAll('.hire-employers-item');
for(let i = 0; i < employers.length; i++) {
	console.log(employers[i]);
	}