$(document).ready(function($) {
	var nextId = 1;
	var cirId = 4;

	setInterval(function() {
		oneCirculation(cirId);
	}, 10000);

	function oneCirculation(id) {
		$("#mid_scoll_block_" + nextId).css({
			'top': '0',
			'left': '100%',
			'z-index': '1'
		});
		$("#mid_scoll_block_" + id).animate({
			'top': '0',
			'left': '-100%',
			'z-index': '1'
		}, 1050);
		$("#mid_scoll_block_" + nextId).animate({
			'top': '0',
			'left': '0',
			'z-index': '1'
		}, 1000);
		cirId = nextId;
		if (cirId < 4) {
			nextId = cirId + 1;
		} else {
			nextId = 1;
		}
	}
});