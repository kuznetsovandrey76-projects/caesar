(function () {	

	var input = document.getElementById('input'),
		output = document.getElementById('output'),
		msg = document.getElementById('message');

	// После нажатия на клавиатуры строка в выводе обновляется
	input.addEventListener('keyup', function() {

		var arr = [];
		var result = [];

		// number - на сколько символов вправо необходимо передвинуть букву 
		var number = document.getElementById('number');
		number = parseInt(number.value); // 32 == 0
		if (isNaN(number) || number > 32) {
			number = 0;
			msg.innerHTML = 'чтобы изменить строку введите <span>число</span> от 1 до 31';
		} else {
			msg.innerHTML = '';
		}
		
		// string - строка которую необходимо преобразовать
		var string = input.value;	

		// var alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ, абвгдежзийклмнопрстуфхцчшщъыьэюя';		
		// Над доработать код использующий букву Ёё 

		for (var i= 0; i < string.length; i++) {
			// Записываем в charCode код элемента
			var charCode = string.charCodeAt(i);
			// Отправляем каждый код в массив ()
			arr.push(charCode);
		}

		for (var j = 0; j < arr.length; j++) {
			var letter;
			// провекряем каждый эллемент arr
			var temp = arr[j];
			// Рассматриваем только буквы русского алфавита
			if (temp >= 1040 && temp <= 1103) {
				// Заглавные буквы
				if (temp < 1072) {
					if (temp + number > 1071) {
						// Если новое значение уходит за рамки русских букв, отправляем в начало алфавита
						letter = String.fromCharCode(temp + number - 32);
					} else {
						letter = String.fromCharCode(temp + number);
					}
				// прописные буквы	
				} else {
					if (temp + number > 1103) {
						// Если новое значение уходит за рамки русских букв, отправляем в начало алфавита
						letter = String.fromCharCode(temp + number - 32);
					} else {
						letter = String.fromCharCode(temp + number);
					}
				}
				
			} else { 
				// Симфолы не из русского алфавита оставляем без изменений
				letter = String.fromCharCode(temp);
			}
			// отправляем каждую букв в итоговый массив
			result.push(letter);
		}
		result = result.join('');
		// смотрим какие есть charCode в нашей строке
		// return arr.join(' ');
		
		// выводим результат без пробелов
		// return result.join('');		

		output.innerHTML = 'ROT' + number + ': ' + result;
	});




	// 2 часть, просмотр возможных шрифтов
	var fonts = ['Raleway', 'Muli', 'Dosis', 'Poppins', 'Oxygen', 'Josefin Sans', 'Maven Pro', 'Exo', 'Nobile', 'Antic', 'Ruluko'];

	for (var i = 0; i < fonts.length; i++) {
		other_fonts.innerHTML += '<p></p>';
	} 
	var out = document.querySelectorAll('p');
	
	input.addEventListener('keyup', addOut);

	function addOut() {
		for (var i = 0; i < fonts.length; i++) { 
			out[i].style.fontFamily = fonts[i];
			out[i].innerHTML = i + '. ' + fonts[i] + ': ' + input.value;
		}
	}





})()


