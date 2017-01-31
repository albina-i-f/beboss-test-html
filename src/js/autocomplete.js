// Скрипт, осуществляющий автозаполнение форм 
// Используется плагин jQuery-Autocomplete https://www.devbridge.com/sourcery/components/jquery-autocomplete/

jQuery(document).ready(function($) {

	// Массив имеющихся в базе данных названий
	var franchises = [
		"Проворный ткачик",
		"ПРОФИ-СПОРТ",
		"Проспект",
		"Просто Чудо",
		"Прокат Пони+"
	];
	
	// Автозаполнение поля "Название франшизы"
	$('#franchise').autocomplete({lookup: franchises});
});