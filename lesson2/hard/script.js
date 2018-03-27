let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let now = new Date();
let dayWeek = now.getDay();
for(let i = 0; i < week.length; i++) {
	if(week[i] == 'суббота' || week[i] == 'воскресенье') {
		document.write (week[i].bold() + '<br />');
	} else if(i == (dayWeek - 1)) {
		document.write (week[i].italics() + '<br />');
		} else {
			document.write (week[i] + '<br />');
			} 
}


let arr = ['545454', '79798956565', '3646565', '55655', '6654478', '3335', '656565'];
for(let i = 0; i < arr.length; i++) {
	if(arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7') {
		console.log(arr[i]);
		}
	}