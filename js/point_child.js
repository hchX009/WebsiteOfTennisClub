$(document).ready(function($) {

	var url = window.location.search.substr(1);
	var params = decodeURIComponent(url).split('&');
	var num = 300;
	var newsText = new Array(num + 1).join("这是内容");

	var pic_src = params[0].split("=")[1];
	var title = params[1].split("=")[1];
	var text = params[2].split("=")[1];

	text = text + newsText + "。";

	$('img').attr('src', pic_src);
	$('h1').text(title);
	$('p').text(text);
});