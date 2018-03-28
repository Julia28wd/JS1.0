let str = "урок-3-был слишком легким";
console.log(str);
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);
str = str.replace(/\-/g, ' ');
console.log(str);
str = str.slice(-6);
console.log(str);
str = str.slice(0, -2) + "o";
console.log(str);
alert(str);

var arr = [20, 33, 1, "Человек", 2, 3];
var res = 0;
for (let i = 0; i < arr.length; i++) {
	if(typeof(arr[i]) == "number") {
		res += Math.pow(arr[i], 3);
		}
	}
console.log(Math.pow(res, 0.5));
