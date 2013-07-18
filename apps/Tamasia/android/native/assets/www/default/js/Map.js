
/* JavaScript content from js/Map.js in folder common */
/* API Google Maps untuk munculin Peta */
function initialize() {
	var mapOptions = {
		zoom : 16, /* Zoom untuk ngatur zoom level peta */
		center : new google.maps.LatLng(-6.654622, 106.851912), /* Center untuk ngatur koordinat tempat*/
		mapTypeId : google.maps.MapTypeId.ROADMAP /* Roadmap nunjukin defaultnya dia nunjuk peta*/
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.12&key=AIzaSyBHbbLO1sOiZ6PLAL23be1B6SEfppXmqRw&sensor=false&'
			+ 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;