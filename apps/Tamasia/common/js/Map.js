function initialize() {
	var mapOptions = {
		zoom : 16,
		center : new google.maps.LatLng(-6.654622, 106.851912),
		mapTypeId : google.maps.MapTypeId.ROADMAP
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