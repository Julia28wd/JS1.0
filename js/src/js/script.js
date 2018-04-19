window.addEventListener('DOMContentLoaded', function() {
	let popupBtn = document.querySelector('#popup-btn'),
		overlay = document.querySelector('.overlay'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		customDiv = custom.children;


		popupBtn.addEventListener('click', function() {

			overlay.style.display = 'none';
			main.style.display = 'none';
			custom.style.display = 'flex';

			for (let i = 0; i < customDiv.length; i++) {
				customDiv[i].style.display = 'block';
			}
		});


});