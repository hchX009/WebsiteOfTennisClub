var pic_src;
var title;
var text;

function takeText(event) {
	pic_src = event.getElementsByTagName('img')[0].src;
	title = event.getElementsByTagName('h1')[0].innerText;
	text = event.getElementsByTagName('p')[0].innerText;
	window.location.href = "../html/point.html?src=" + pic_src + "&title=" + title + "&text=" + text;
}
