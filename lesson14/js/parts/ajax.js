function ajax () {
	let message = new Object ();
	let more = document.querySelector('.more');
	let moreTab = document.querySelectorAll('.description-btn');
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.popup-close');
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

}

module.exports = ajax;