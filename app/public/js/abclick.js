'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".clickBtn").click(likeClick);


}

function likeClick(e){
	e.preventDefault();
	console.log("location button clicked");
	//gtag("send", "event", "locationclick", "click");
	gtag('event', 'locationclick', {
		'event_category': 'click'
	});

	//route to chorelist
	window.location.href = '../chorelist.html';
}
