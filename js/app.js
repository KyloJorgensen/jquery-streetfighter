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

	$("body").keydown(function(event) {
		console.log('keydown');
		if (event.which == 88) {
			console.log('x is pressed');
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			playCool();
			$('.ryu-cool').show();	
			while $('body').keypress(function(event){
				if (event.which == 88) {}
			});
		}
	})
	 .keyup(function(event) {
		console.log('keyup');
		if (event.which == 88) {
			console.log('x is leased');
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		} 
	});



	function playHadouken () {
 		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
 		$('#hadouken-sound')[0].play();
 	}

 	function playCool () {
 		$('#cool-sound')[0].volume = 0.5;
  		$('#cool-sound')[0].load();
 		$('#cool-sound')[0].play();
 	}


});