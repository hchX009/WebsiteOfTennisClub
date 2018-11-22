$(document).ready(function($) {

	var left;
	var div = $(document.body).width() * 0.2;

	var reg = /\d+/g;

	function findId(event) {
		var id = $(event).attr('id');
		id = id.match(reg)[0];
		id = parseInt(id);
		return id;
	}

	$(".card_slip_block").hover(function() {
		$("#change_card_body_" + findId(this)).animate({
				'top': '30%'
			},
			500,
			function() {
				/* stuff to do after animation is complete */
			});
	}, function() {
		$("#change_card_body_" + findId(this)).animate({
				'top': '100%'
			},
			500,
			function() {
				/* stuff to do after animation is complete */
			});
	});

	$("#right").click(function(event) {
		left = $("#card_slip_borad_time").css('left');
		left = left.match(reg)[0];
		left = parseInt(left);
		left += div;
		if (left < 8 * div) {
			$("#card_slip_borad_time").css('left', '-' + left + 'px');
		} else {
			$("#card_slip_borad_time").css('left', '-' + 8 * div + 'px');
		}
	});

	$("#left").click(function(event) {
		left = $("#card_slip_borad_time").css('left');
		left = left.match(reg)[0];
		left = parseInt(left);
		left -= div;
		if (left >= 0) {
			$("#card_slip_borad_time").css('left', '-' + left + 'px');
		} else {
			$("#card_slip_borad_time").css('left', '0px');
		}
	});
});