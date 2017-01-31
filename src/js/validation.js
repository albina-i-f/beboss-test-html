// Скрипт, осуществляющий валидацию форм: 
//	- проверку на заполненность
//	- соответствие номера телефона требуемому формату

jQuery(document).ready(function($) {

	var form = $('.request-form');
	var btn = form.find('.btn');
		
	// Маска для поля ввода номера телефона (используется плагин MASKED INPUT PLUGIN http://digitalbush.com/projects/masked-input-plugin/ )
	$('#tel').mask("9 999 999 99 99",{placeholder:"", autoclear: false});
	// Требуемое количество символов в номере телефона с учётом пробелов маски
	var phLen = 15;
	
	// Каждому проверяемому полю добавляется указание, что поле пустое
	form.find('.request-field').addClass('empty');
	
	// Проверка полей в режиме реального времени	
	setInterval(function() {
		
		form.find('.request-field').each(function() {
			if($(this).val() != "" && $(this).val().indexOf(" ") != 0) {
				$(this).removeClass('empty');
			}
			else {
				$(this).addClass('empty');
			}
		});
		
		// Количество незаполненных полей
		var sizeEmpty = form.find('.empty').size();
				
		// Условие-триггер на кнопку отправки формы
		if(sizeEmpty > 0) {
			if(btn.hasClass('btn-disabled')) {
				return false;
			}
			else {
				btn.addClass('btn-disabled');
			}
		}
		else {
			btn.removeClass('btn-disabled');
		}
	},200);
	
	// Событие клика по кнопке отправить
	btn.click(function() {
		// Если есть незаполненные поля, форма не отправляется
		if($(this).hasClass('btn-disabled')) {
			return false;
		}
		// Если количество символов в номере телефона меньше требуемого, выводится сообщение об ошибке
		else if ($('#tel').val().length < phLen) {
			$('#tel').parent().addClass('incorrect');
			$('.error').css("display","block");
			return false;
		}
		// Если поля заполнены верно, форма отправляется
		else {
			form.submit();
		}
	});
});