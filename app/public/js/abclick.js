'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".click").click(likeClick);


}

function likeClick(e){
	e.preventDefault();
	console.log("location button clicked");
	ga("send", "event", "locationclick", "click");

	//route to chorelist
	//window.location.href = '../chorelist.html';
}
