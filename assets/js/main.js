/// START CONFIG ///
var config = {
	title: "Hypernova",
	requests_url: "https://REQUEST_SITE_URL",
	plex_url: "https://app.plex.tv/",
	status_url: "https://STATUS_PAGE_URL",
	keyword: "password"
};
/// END CONFIG ///

//Global Variables
var advanced = false;
var input = "";

/*
 * eventListener('keypress')
 *
 * Listens for keypresses and reacts to the keyword being typed
 */
document.body.addEventListener('keypress',function(ev) {
	//Hold the key that was pressed, and respond if the entire saved input contains the keyword
	input += String.fromCharCode(ev.which);
	if(input.toLowerCase().includes(config.keyword)) {
		//Clear the input, and actions according to advanced toggle
		input = "";
		advanced = !advanced;
		if(advanced) {
			console.log("Keyword Typed: Advanced Mode Enabled");
		} else {
			console.log("Keyword Typed: Advanced Mode Disabled");
		}
	}
});

/*
 * updatePageData()
 *
 * Runs on launch, updates the page elements according to the config object
 */
function updatePageData() {
	document.title = config.title;
	document.getElementById("splash-requests").href = config.requests_url;
	document.getElementById("splash-plex").href = config.plex_url;
	document.getElementById("splash-status").href = config.status_url;
}