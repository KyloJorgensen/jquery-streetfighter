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
		playHadouken();
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

	function playHadouken () {
 		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
 		$('#hadouken-sound')[0].play();
 	}
		
});