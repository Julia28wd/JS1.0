window.addEventListener('DOMContentLoaded', function() { //пока не загрузятся все элемнты DOM

	let tab = document.getElementsByClassName('info-header-tab'), //заголовки пунктов подменю
		tabContent = document.getElementsByClassName('info-tabcontent'), //обертка для дивов с содержанием
		info = document.getElementsByClassName('info-header')[0], //обертка для заголовков подменю
		pos = tabContent[0].clientHeight;
		tabContent[0].style.marginTop = 0;

	function hideTabContent(a) { //функция для скрытия ненужных дивов с контентом
		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show'); //удаляем класс show
			tabContent[i].classList.add('hide'); //добавляем класс hide
		}

	}
	hideTabContent(1); //по умолчанию первый контент показывать, поэтому его не трогать

	function showTabContent(b) { //функция для показа нужных дивов с контентом
		if(tabContent[b].classList.contains('hide')) { //если див скрыт ...
			hideTabContent(0); //скрываем первый
			tabContent[b].classList.remove('hide'); //удаляем класс hide
			tabContent[b].classList.add('show'); //добавляем класс show

				id = setInterval(frame, 100);

				function frame() {
					if(pos <= 0) {
						clearInterval(id);
						tabContent[i].style.marginTop = pos;
					} else {
						pos-=10;
						tabContent[b].style.marginTop = pos + 'px';
						console.log(tabContent[b].style.top);
					}
				}
		}

	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) { 
				if(target == tab[i]) { //при клике на i-й таб применяем функцию showTabContent

					showTabContent(i);
					break;
				}
			}
		}
	});

//Timer

	let deadline = '2018-04-05';
	function getTimeRemaining(endtime) {

		let now = new Date(),
			t = Date.parse(endtime) - Date.parse(now) - (3 * 60 * 60 * 1000),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		function setClock(id, endtime) {

			let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock() {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total <= 0) {
						clearInterval(timeInterval);
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					}
				}

				updateClock();
				var timeInterval = setInterval(updateClock, 1000);
		}

		setClock('timer', deadline);
});

