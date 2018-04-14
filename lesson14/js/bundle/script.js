window.addEventListener('DOMContentLoaded', function() { //пока не загрузятся все элемнты DOM

	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let	ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();
});



