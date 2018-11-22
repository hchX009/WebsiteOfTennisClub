$(document).ready(function($) {
	var pastId = 1;
	var cirId = 1;

	oneCirculation(cirId);

	setInterval(function() {
		oneCirculation(cirId);
	}, 10000);

	$(".top_scoll_point").click(function(event) {
		var reg = /\d+/g;
		var id = $(event.target).attr('id');
		id = id.match(reg)[0];
		oneCirculation(id);
	});

	function oneCirculation(id) {
		id = parseInt(id);
		$("#top_scoll_block_" + id).fadeIn('slow', function() {
			$("#top_scoll_point_" + pastId).removeClass('on');
			$("#top_scoll_point_" + id).addClass('on');
			$("#top_scoll_block_" + pastId).css('z-index', '0');
			$("#top_scoll_block_" + id).css('z-index', '1');
			pastId = id;
			if (cirId < 4 && id < 4) {
				cirId = id + 1;
			} else {
				cirId = 1;
			}
		});
	}
});