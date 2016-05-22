$(document).ready(function() {

	$('.ryu').mouseenter(function() {
		console.log('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		console.log('mouse leaveing .ryu div');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		console.log('mousedown');
		playSound('#hadouken-sound', 0.5);
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})

	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$("body").keydown(function(event) {
		console.log('keydown');
		if (event.which === 88) {
			console.log('x is pressed');
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
			playSound('#cool-sound', 0.5);
		}
	})
	 .keyup(function(event) {
		console.log('keyup');
		if (event.which === 88) {
			console.log('x is leased');
			playSound('#cool-sound', 0);
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		} 
	});

	function playSound (id, volume) {
		$(id)[0].volume = volume;
  		if ($(id)[0].paused){
  			$(id)[0].load();
 			$(id)[0].play();
 		}
	}



});