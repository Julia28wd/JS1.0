let money, 
	name, 
	time,
	price
var i = 0;

function start() {
	money = prompt("Ваш бюджет?");
	while(isNaN(money) || money === null || money === '') {
		money = prompt("Ваш бюджет?");
		}
	name = prompt("Название Вашего магазина?").toUpperCase();
	price = prompt("Введите цену");
	while(isNaN(price) || price === null || price === '') {
		price = prompt("Введите цену");
		}
	time = 21;
}

start();

let mainList = {
	budget: money, 
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} 
		// else if((typeof(a)) !== 'string' || (typeof(a)) === null || a === '') {
		// 	console.log("Пожалуйста, введите тип товара");
		// 	} else if(a.length > 50) {
		// 		console.log("Слишком длинное наименование");
		// 		}
		else {
			i = i - 1;
			console.log("Пожалуйста, введите тип товара не более 50 символов");
		}
	}
}

chooseGoods(); 



function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть");
	} else if(time > 8 && time < 20) {
		console.log("Время работать!");
		} else if(time < 24) {
			console.log("Уже слишком поздно!");
			} else {
				console.log("В сутках только 24 часа!");
				}
}

workTime(21);

function calcDailyBudget() {
	alert("Бюджет на 1 день равен " + mainList.budget / 30);
	}

calcDailyBudget();

function calcDiscount(discount) {
	if(discount === true) {
		price *= 0.8;
		alert("Цена товара с учетом скидки составит: " + price);
		} else {
			alert("Цена товара составит: " + price);
			}

}

calcDiscount(true);

console.log(mainList);

function addEmployer() {
	for (let j = 0; j < 4; j++) {
		let b = prompt("Введите имя сотрудника");
		if((typeof(b)) === 'string' && (typeof(b)) !== null && b !== '') {
			mainList.employers[j] = b;
		} else {
			j = j - 1;
			console.log("Необходимо ввести имя сотрудника");
		}
	}
}

addEmployer();