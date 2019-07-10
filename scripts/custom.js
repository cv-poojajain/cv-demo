
$(function () {
	"use strict";

	$(document).ready(function(){
		
		$('.skillbar').each(function() {
			$(this).appear(function() {
				$(this).find('.count-bar').animate({
					width:$(this).attr('data-percent')
				},100);
				var percent = $(this).attr('data-percent');
				$(this).find('.count').html('<span>' + percent + '</span>');
			});
		});	
	});
	
}());
