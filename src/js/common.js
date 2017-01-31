jQuery(document).ready(function($) {

	// Осуществление поддержки браузером Internet Explorer (версии ниже 9) свойства borderradius
	// Используется библиотека Modernizr https://modernizr.com/
	// Используется плагин PIE http://css3pie.com/
	if(!Modernizr.borderradius) {
		$('.rounded').each(function() {
				PIE.attach(this);
		});
	}
	
	// Осуществление поддержки браузером Internet Explorer (версии ниже 9) свойства box-shadow
	if(!Modernizr.boxshadow) {
		$('.autocomplete-suggestions').each(function() {
				PIE.attach(this);
		});
	}
});