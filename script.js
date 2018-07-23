console.log("Homework week 6");

$(document).ready function (){
$('#btnClick').click (function () {
	let resultElements = $(#hyfResults);

	$.Ajax( {

		url: 'https://api.github.com/orgs/HackYourFuture/repos';
		method: 'get';
		dataType: 'json';
		success : function (data) {
			resultElements.html('HYF data' + data)
		}
	})
}
}
