
// Функция initMap которая отрисует карту на странице
function initMap() {
	
	// Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
	var isDraggable;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isDraggable = false;
	} else {
		isDraggable = true;
	}

	// Определяем точки которые хотим показать на карте
	var moscow = {lat:55.754765, lng: 37.620899};
	var bigTheatre =  {lat: 55.760186, lng: 37.618711};

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	myMap = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		
		// center - определяем точку на которой карта будет центрироваться
		// center: {lat:55.754765, lng: 37.620899},
		center: moscow,
		
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		// zoom: 12,
		zoom: 14,

		// Дополнительные настройки

		// Удалить элементы управления картой
		// disableDefaultUI: true,

		// Запретить увеличение карты по скроллу
		// scrollwheel: false,

		// Отключить перетаскивание для смартфонов. Часть 2.
		// draggable: isDraggable,


		// Добавляем свои стили для отображения карты
		// Скины брать здесь: https://snazzymaps.com/
		styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#61dac9"}]}]

	}); // map


	/* • • • • • Маркер и описание № 1 • • • • • */

	// Создаем маркер на карте
	var markerMoscow = new google.maps.Marker({

		// Определяем позицию маркера
	    position: moscow,

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: myMap,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Наш маркер: Красная Площадь',

	    // Укажем свою иконку для маркера
	    icon: 'img/pin-red.png'
	});

	// Создаем наполнение для информационного окна
	var contentStringMoscow = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Москва</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Красная пл., <br>' +
	      'Москва, Россия, 101000.</p>'+
	      '</div>'+
	      '</div>';
	
	// Создаем информационное окно
	var infowindowMoscow = new google.maps.InfoWindow({
		content: contentStringMoscow,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	markerMoscow.addListener('click', function() {
		infowindowMoscow.open(myMap, markerMoscow);
	});




	/* • • • • • Маркер и описание № 2 • • • • • */

	// Создаем маркер на карте
	var markerBigTheatre = new google.maps.Marker({

		// Определяем позицию маркера
	    position: bigTheatre,

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: myMap,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Большой Театр',

	    // Укажем свою иконку для маркера
	    icon: 'http://rightblog.ru/wp-content/uploads/2016/07/theatre_icon.png'
	});

	// Создаем наполнение для информационного окна
	var contentStringBigTheatre = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Большой театр</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Госуда́рственный академи́ческий Большо́й теа́тр Росси́и, или просто Большой театр — один из крупнейших' +
	      'в России и один из самых значительных в мире театров оперы и балета.</p>'+
	      '<p><b>Веб-сайт:</b> <a href="http://www.bolshoi.ru/" target="_blank">bolshoi.ru</a>'+
	      '</p>'+
	      '</div>'+
	      '</div>';

	// Создаем информационное окно
	var infowindowBigTheatre = new google.maps.InfoWindow({
		content: contentStringBigTheatre,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	markerBigTheatre.addListener('click', function() {
		infowindowBigTheatre.open(myMap, markerBigTheatre);
	});



}





	




