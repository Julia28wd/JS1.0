window.addEventListener('DOMContentLoaded', function() { //пока не загрузятся все элемнты DOM

	let tab = document.getElementsByClassName('info-header-tab'), //заголовки пунктов подменю
		tabContent = document.getElementsByClassName('info-tabcontent'), //обертка для дивов с содержанием
		info = document.getElementsByClassName('info-header')[0]; //обертка для заголовков подменю

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

	let deadline = '2018-04-13';
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

	//Modal

	let more = document.querySelector('.more'),
		moreTab = document.querySelectorAll('.description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (var i = 0; i < moreTab.length; i++){
	    moreTab[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
	        });
	    }


	// Отправка данных
	let message = new Object ();
	message.loading = "Загрузка...";
	message.sucsess = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
			input = form.getElementsByTagName('input'),
			contactForm = document.getElementsByClassName('contact-form')[0],
			contactFormInput = contactForm.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	function submitContacts (input){
		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.sucsess;
					//добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}

			}
		};
		for (let i = 0; i < input.length; i++) {
			input[i].value = ''; //очистка полей ввода
		}
	}

	//отправка данных из модального окна
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		submitContacts(input);
	});
	
	//отправка данных из контактной формы
	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);
		submitContacts(contactFormInput);
	});

	//закрытие модального окна и удаление сообщения
	close.addEventListener('click', function () {
		more.classList.remove('more-splash');
		overlay.style.display = 'none';
		document.body.style.overflow = "";
		form.removeChild(statusMessage);
	});
	// удаление сообщения при вводе других данных в контактной форме

	contactForm.addEventListener('change', function(event) {
		if (event.target && event.target.matches('input')){
			contactForm.removeChild(statusMessage);
		}
	});

	//Slider
	
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);
	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}
		slides[slideIndex-1].style.display = 'block';
		dots[slideIndex-1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	//Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function() {
			personSum =+ this.value;
			total = (daysSum + personSum) * 4000;
			if (restDays.value === '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function() {
			daysSum =+ this.value;
			total = (daysSum + personSum) * 4000;
			if (persons.value === '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function() {
			if (restDays.value === '' || persons.value === '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
});



