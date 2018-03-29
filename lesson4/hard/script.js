var arr = new Array(+prompt("Сколько массивов будет внутри arr?"));
var sum = 0;
// console.log(arr.length);
for(var num = 0; num < arr.length; num++)
	arr[num] = new Array(Math.floor(Math.random()*(5 - 0) + 1));		// В каждой строке от 1 до 5 столбцов

for(var i = 0, str = ''; i < arr.length; i++) {
	for(var j = 0; j < arr[i].length; j++) {
		arr[i][j] = Math.floor(Math.random()*(101 - 1) + 1);           // присваиваем элементу массива случ значение от 1 до 100
		sum += arr[i][j];
		str += arr[i][j] + '  ';
	}
	console.log(str + '\n');

	str = '';
}
console.log("Сумма элементов массива равна: " + sum);
