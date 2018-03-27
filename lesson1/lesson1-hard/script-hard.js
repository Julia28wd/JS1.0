var num = '33721';
var res = 1;
var i = 0;
var length = String(num).length;
// do {
// 	res *= num % 10;
// 	num = Math.floor(num/10);
// 		console.log(res);
// 	i++;
// }
// while (i < length);
// 	alert(Math.pow(res, 3));

// var digit5 = num % 10;
// var digit4 = Math.floor(num % 100 / 10);
// var digit3 = Math.floor(num % 1000 / 100);
// var digit2 = Math.floor(num % 10000 / 1000);
// var digit1 = Math.floor(num % 100000 / 10000);
// var sum = digit5 * digit4 * digit3 * digit2 * digit1;

// var sum = eval(eval("'33721'.split('').join('*');"));


for(i = 0; i < num.length; i++) {
	res *= +num.charAt(i);
	console.log(res);
}
alert(Math.pow(res, 3));