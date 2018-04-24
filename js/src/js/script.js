window.addEventListener('DOMContentLoaded', function(){
	let popupBtn = document.querySelector('#popup-btn'),
		overlay = document.querySelector('.overlay'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		customDiv = custom.children,
		createdName = document.querySelector('#name'),
		createdAge = document.querySelector('#age'),
		radio = document.querySelector('.radio'),
		createdSex = radio.querySelectorAll('input'),
		createdViews = document.querySelector('#select'),
		createdBio = document.querySelector('#bio'),
		createdSkin = document.querySelector('#person-skin'),
		createdClothes = document.querySelector('#person-clothes'),
		createdHair = document.querySelector('#person-hair'),
		createdShoes = document.querySelector('.person-shoes'),

		hairAll = document.querySelectorAll('.hair-style'),
		clothesAll = document.querySelectorAll('.clothes-style'),
		skin = document.querySelectorAll('.skin-color'),

		ready = document.querySelector('#ready'),
		mainCards = document.querySelector('.main-cards'),
		mainCardsItem = mainCards.querySelectorAll('.main-cards-item')[1],
		createdItem = mainCardsItem.cloneNode(true),

		name = createdItem.querySelector('.name'),
		age = createdItem.querySelector('.age'),
		sex = createdItem.querySelector('.sex'),
		views = createdItem.querySelector('.views'),
		bio = createdItem.querySelector('.bio'),

		votingBtn = document.querySelector('#voting'),
		crimeBtn = document.querySelector('#crime'),
		resetBtn = document.querySelector('#reset'),

		//объект Кандидат
		createdCandidate = {
			name:'',
			age: '',
			sex : 'Мужской',
			views: 'Либеральные',
			bio: '',
			skinNum: 1,
			hairNum: 1,
			clothesNum: 1
		};
	
	// кнопка "Создать нового кандидата"
	popupBtn.addEventListener('click', function() {
		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		for (let i = 0; i < customDiv.length; i++) {
			customDiv[i].style.display = 'block';
		} 
	});

	//проверка и перенос ФИО в объект
	createdName.addEventListener('change', function() {
		if (!isNaN(createdName.value) || (createdName.value === '')) {
			alert ('Необходимо указать ФИО кандидата, состоящее из букв');
			createdName.value = '';
		} else {
			createdCandidate.name = createdName.value.toUpperCase();
		}
	});

	//проверка и перенос возраста в объект
	createdAge.addEventListener('change', function() {
		if (createdAge.value === '') {
			alert('Необходимо указать возраст'); 
			createdAge.value = '';
		} else if (isNaN(createdAge.value)) {
			alert('Необходимо указать возраст в цифрах');
			createdAge.value = '';
		} else if (+createdAge.value < 35) {
			alert('Кандидат в президенты РФ должен быть не моложе 35 лет');
			createdAge.value = '';
		} else if (+createdAge.value > 65) {
			alert('Слишком старый кандидат');
			createdAge.value = '';
		} else { 
			if (+createdAge.value % 10 == 1) {
				createdCandidate.age = createdAge.value + ' год';
			} else if (+createdAge.value % 10 == 2 || createdAge.value%10 == 3 || createdAge.value%10 == 4) {
				createdCandidate.age = createdAge.value + ' года';
			} else {
				createdCandidate.age = createdAge.value + ' лет';
			}
		}
	});

	let hairWoman = document.querySelectorAll('.hair-woman'),
		hairMan = document.querySelectorAll('.hair-man'),
		hair = hairMan,
		clothesWoman = document.querySelectorAll('.clothes-woman'),
		clothesMan = document.querySelectorAll('.clothes-man'),
		clothes = clothesMan;

	//проверка и перенос пола в объект
	radio.addEventListener('change', function() {
		if (createdSex[0].checked) {
			createdSkin.style.backgroundImage = 'url("img/skin/skin-1.png")';
			createdClothes.style.backgroundImage = 'url("img/clothes/construct/clothes-1.png")';
			createdHair.style.backgroundImage = 'url("img/hair/construct/hair-1.png")';
			createdShoes.style.backgroundImage = 'url("img/clothes/construct/shoes.png)';
		
			hairMan[0].style.display = 'block';
			clothesMan[0].style.display = 'block';
			for (let i = 0; i < 3; i++) {
				hairWoman[i].style.display = 'none';
				clothesWoman[i].style.display = 'none';
				skin[i].style.display = 'none';
			}

			clothes = clothesMan;
			hair = hairMan;
			skin[0].style.display = 'block';

			createdCandidate.skinNum = 1;
			createdCandidate.hairNum = 1;
			createdCandidate.clothesNum = 1;
			createdCandidate.sex = 'Мужской';
			
		} else {
			createdSkin.style.backgroundImage = 'url("img/skin/skin-4.png")';
			createdClothes.style.backgroundImage = 'url("img/clothes/construct/clothes-4.png")';
			createdHair.style.backgroundImage = 'url("img/hair/construct/hair-4.png")';
			createdShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';
		
		hairWoman[0].style.display = 'block';
		clothesWoman[0].style.display = 'block';
		for (let i = 0; i < 3; i++) {
			hairMan[i].style.display = 'none';
			clothesMan[i].style.display = 'none';
			skin[i].style.display = 'none';
		}

		clothes = clothesWoman;
		hair = hairWoman;
		skin[0].style.display = 'block';

		createdCandidate.skinNum = 4;
		createdCandidate.hairNum = 4;
		createdCandidate.clothesNum = 4;
		createdCandidate.sex = 'Женский';
		}	
	});

	//перенос взглядов в объект
	createdViews.addEventListener('change', function() {
		createdCandidate.views = createdViews.value;
	});

	//перенос биографии в объект
	createdBio.addEventListener('change', function() {
		if (!isNaN(createdBio.value) || (createdBio.value === '')) {
			alert ('Необходимо корректно заполнить биографию кандидата');
			console.log(createdBio.value);
		} else {
			createdCandidate.bio = createdBio.value;
		}
	});

	let slideIndex = 1,
		showIndex = 1,
		prevSkin = document.querySelector('.skin>.prev'),
		nextSkin = document.querySelector('.skin>.next'),
		prevHair = document.querySelector('.hair>.prev'),
		nextHair = document.querySelector('.hair>.next'),
		prevClothes = document.querySelector('.clothes>.prev'),
		nextClothes = document.querySelector('.clothes>.next');

	//слайдер цвета кожи
	skinSlides(slideIndex);
	function skinSlides(id) {
		if (id > skin.length) {
			slideIndex = 1;
		}
		if (id < 1) { 
			slideIndex = skin.length;
		}

		for ( let i = 0; i < skin.length; i++) {
			skin[i].style.display = 'none'; 
		}
		skin[slideIndex-1].style.display = 'block';
		if (createdCandidate.sex === 'Мужской') {
			showIndex = slideIndex;
		} else {
			showIndex = slideIndex + 3;
		}
		createdCandidate.skinNum = showIndex;
		createdSkin.style.backgroundImage = 'url("img/skin/skin-' + showIndex + '.png")';
	}

	function plusSlidersSkin(id) {
		skinSlides(slideIndex += id);
	}

	prevSkin.addEventListener('click', function(){
		plusSlidersSkin(-1);
	});

	nextSkin.addEventListener('click', function(){
		plusSlidersSkin(1);
	});	


	//слайдер с волосами
	hairSlides(slideIndex);
	function hairSlides(id) {
		if (id > hair.length) {
			slideIndex = 1;
		}
		if (id < 1) { 
			slideIndex = hair.length;
		}

		for ( let i = 0; i < hair.length; i++) {
			hair[i].style.display = 'none'; 
		}
		hair[slideIndex-1].style.display = 'block';
		if (createdCandidate.sex === 'Мужской') {
			showIndex = slideIndex;
		} else {
			showIndex = slideIndex + 3;
		}
		createdCandidate.hairNum = showIndex;
		createdHair.style.backgroundImage = 'url("img/hair/construct/hair-' + showIndex + '.png")';
	}

	function plusSlidersHair(id) {
		hairSlides(slideIndex += id);
	}

	prevHair.addEventListener('click', function(){
		plusSlidersHair(-1);
	});

	nextHair.addEventListener('click', function(){
		plusSlidersHair(1);
	});	

	//слайдер с одеждой
	clothesSlides(slideIndex);
	function clothesSlides(id) {
		if (id > clothes.length) {
			slideIndex = 1;
		}
		if (id < 1) { 
			slideIndex = clothes.length;
		}

		for ( let i = 0; i < clothes.length; i++) {
			clothes[i].style.display = 'none'; 
		}
		clothes[slideIndex - 1].style.display = 'block';
		if (createdCandidate.sex === 'Мужской') {
			showIndex = slideIndex;
		} else {
			showIndex = slideIndex + 3;
		}
		createdCandidate.clothesNum = showIndex;
		createdClothes.style.backgroundImage = 'url("img/clothes/construct/clothes-'+ showIndex +'.png")';
	}

	function plusSlidersСlothes(id) {
		clothesSlides(slideIndex += id);
	}

	prevClothes.addEventListener('click', function(){
		plusSlidersСlothes(-1);
	});

	nextClothes.addEventListener('click', function(){
		plusSlidersСlothes(1);
	});	

	// кнопка Готово
	ready.addEventListener('click', function() {
		if ((createdCandidate.name === '')||(createdCandidate.age === '')||(createdCandidate.bio === '')) {
			alert('Необходимо заполнить все поля');
		} else {
			custom.style.display = 'none';
			main.style.display = 'block';

			//перенос данных на новую карточку
			name.textContent = createdCandidate.name;
			age.textContent = createdCandidate.age;
			sex.textContent = createdCandidate.sex;
			views.textContent = createdCandidate.views;
			bio.textContent = createdCandidate.bio;

			//перенос внешности на новую карточку
			createdItem.querySelector('.photo').classList.remove('photo-2');
			createdItem.querySelector('.photo').classList.add('photo-candidate');
			createdItem.querySelector('.photo').innerHTML = '<div class="photo-hair">' + 
			'</div>' + '<div class="photo-clothes">' + '</div>' + '<div class="photo-shoes">' + 
			'</div>';

			createdItem.querySelector('.photo-candidate').style.cssText = 'position: relative; background: url(img/skin/skin-' + 
			createdCandidate.skinNum + '.png) center no-repeat/cover';

			createdItem.querySelector('.photo-hair').style.cssText = 'position: absolute;	top: 0;	left: 0; width: 100%;' +
			'height: 100%; background: url(img/hair/construct/hair-' + createdCandidate.hairNum + 
			'.png) center no-repeat/cover';

			createdItem.querySelector('.photo-clothes').style.cssText = 'position: absolute;	top: 0;	left: 0; width: 100%;' +
			'height: 100%; background: url(img/clothes/construct/clothes-' + createdCandidate.clothesNum + 
			'.png) center no-repeat/cover';

			createdItem.querySelector('.photo-shoes').style.cssText ='position: absolute;	top: 0;	left: 0; width: 100%;' + 
			'height: 100%; background: url(img/clothes/construct/shoes.png) center no-repeat/cover';

			mainCardsItem.parentNode.insertBefore(createdItem, mainCardsItem);

			let result = document.querySelectorAll('.result-count'),
				progress = document.querySelectorAll('.progress-bar');

			for (let i = 0; i < mainCards.children.length; i++) {
				result[i].innerHTML = '0%';
				progress[i].style.height = 0 + '%';
			}
		}
	});

	//кнопка "Провести честное голосование"
	votingBtn.addEventListener('click', function(){
		results(0);  //ничего никому не прибавляем
	});

	// //кнопка "Вмешаться в выборы"
	crimeBtn.addEventListener('click', function(){
		results(25); //дарим 25% кандидату
	});

	//функция случайного распределения голосов
	function results (r) {
		let votingResults = [],
			result = document.querySelectorAll('.result-count'),
			progress = document.querySelectorAll('.progress-bar'),
			items = document.querySelectorAll('.main-cards-item');

		votingResults[0] = Math.ceil(Math.random() * (99 - r)),
		votingResults[1] = Math.ceil(Math.random() * ((100 - r) - votingResults[0])) + r,
		votingResults[2] = 100 - votingResults[0] - votingResults[1];

		for (let i = 0; i < mainCards.children.length; i++) {
			result[i].innerHTML = votingResults[i] + ' %';
			progress[i].style.height = votingResults[i] + '%';
			items[i].classList.remove('main-cards-item-active');
		}
		let v = votingResults[0],
			k = 0;
		for (let i = 1; i < votingResults.length; i++) {
			if (votingResults[i] > v) {
				v = votingResults[i];
				k = i;
			}
		}
		items[k].classList.add('main-cards-item-active');
	}

	//кнопка "Сбросить результаты"
	resetBtn.addEventListener('click', function() {
		createdCandidate.name = '';
		createdCandidate.age = '';
		createdCandidate.bio = '';
		createdCandidate.sex = 'Мужской';
		createdCandidate.views = 'Либеральные';
		createdCandidate.skinNum = 1;
		createdCandidate.hairNum = 1;
		createdCandidate.clothesNum = 1;

		//возврат исходных изображений на странице кастомизации
		createdSkin.style.backgroundImage = 'url("img/skin/skin-1.png")';
		createdClothes.style.backgroundImage = 'url("img/clothes/construct/clothes-1.png")';
		createdHair.style.backgroundImage = 'url("img/hair/construct/hair-1.png")';
		createdShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';
		
		for (let i = 0; i < 3; i++) {
			hairWoman[i].style.display = 'none';
			clothesWoman[i].style.display = 'none';
			skin[i].style.display = 'none';
			hairMan[i].style.display = 'none';
			clothesMan[i].style.display = 'none';
		}

		clothes = clothesMan;
		hair = hairMan;

		skin[0].style.display = 'block';
		hairMan[0].style.display = 'block';
		clothesMan[0].style.display = 'block';

		//обнуление данных на странице кастомизации
		createdName.value = '';
		createdAge.value = '';
		if (createdSex[1].checked) {
			createdSex[1].checked = false;
			createdSex[0].checked = true;
		}
		createdViews.value = "Либеральные";
		createdBio.value = '';

		//возврат на страницу кастомизации
		main.style.display = 'none';
		custom.style.display = 'flex';
		createdItem.parentNode.removeChild(createdItem);
	});
});

