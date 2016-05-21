$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		console.log('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
		$('.ryu').mouseleave(function() {
		console.log('mouse leaveing .ryu div');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

});