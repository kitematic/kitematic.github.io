/*global $:false */

$(document).ready(function() {

	$('ul.polaroids').on('click', function (e) {
    e.preventDefault();
    var first = $('ul.polaroids li:first');
    var last = $('ul.polaroids li:last');
    first.insertAfter(last);
  });

	$('.signup-form').submit(function(event) {
    event.preventDefault();
    var $form = $(this);
		var action = $form.attr('action');
		$.ajax({
			url: action,
			type: 'POST',
			data: {
				email: $form.find('input[name="EMAIL"]').val()
			},
			success: function(data){
				console.log('success');
			},
			error: function() {
				console.log('Error occured');
			}
		});
    return false;
	});
});
