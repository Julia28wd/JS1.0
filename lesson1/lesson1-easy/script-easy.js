let money = prompt("Ваш бюджет?");
let name = prompt("Название Вашего магазина?");

var mainList = {
	budget: money, 
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) !=== null && a !== '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		} else {
	}

alert(mainList.budget / 30);
console.log(mainList);


