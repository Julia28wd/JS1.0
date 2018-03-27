let money = prompt("Ваш бюджет?");
let name = prompt("Название Вашего магазина?");
let time = 19;
var i = 0;

var mainList = {
	budget: money, 
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false
};

while ( i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;

		} 
		else if((typeof(a)) !== 'string' || (typeof(a)) === null || a === '') {
			console.log("Пожалуйста, введите тип товара");
			} 
			else if(a.length > 50) {
				console.log("Слишком длинное наименование");
				}
		i++;
}

// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;

// 		} 
// 		else if((typeof(a)) !== 'string' || (typeof(a)) === null || a === '') {
// 			console.log("Пожалуйста, введите тип товара");
// 			} 
// 			else if(a.length > 50) {
// 				console.log("Слишком длинное наименование");
// 				}
// 		i++;
// } while ( i < 5);

// for (let i = 0; i < 5; i++) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else if((typeof(a)) !== 'string' || (typeof(a)) === null || a === '') {
// 		console.log("Пожалуйста, введите тип товара");
// 		} else if(a.length > 50) {
// 			console.log("Слишком длинное наименование");
// 			}
// }

if (time < 0) {
	console.log("Такого просто не может быть");
} else if(time > 8 && time < 20) {
	console.log("Время работать!");
	} else if(time < 24) {
		console.log("Уже слишком поздно!");
		} else {
			console.log("В сутках только 24 часа!");
			}


alert(mainList.budget / 30);
console.log(mainList);


