(function () {	

	var input = document.getElementById('input');
	var rot = document.getElementById('rot');

	rot.addEventListener("click", function(){

		var arr = [];
		var result = [];

		// number - на сколько символов вправо необходимо передвинуть букву 
		var number = document.getElementById('number');
		number = parseInt(number.value); // 32 == 0
		if (isNaN(number) || number > 32) {
			number = 0;
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
		
		// смотрим какие есть charCode в нашей строке
		// return arr.join(' ');
		
		// выводим результат без пробелов
		// return result.join('');

		document.getElementById('output').innerHTML = 'ROT' + number + ': ' + result.join('');
	});
})()