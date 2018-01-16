/// START CONFIG ///
var config = {
	general: {
		title: "Hypernova"
	},
	url: {
		//Top splash blocks
		plex_url: "https://app.plex.tv/",
		requests_url: "https://REQUEST_URL",
		tautulli_url: "https://TAUTULLI_URL",
		//Automation software blocks [Row 1]
		sonarr_url: "https://SONARR_URL",
		radarr_url: "https://RADARR_URL",
		sabnzbd_url: "https://SABNZBD_URL",
		//Automation software blocks [Row 2]
		tvheadend_url: "https://TVHEADEND_URL",
		bittorrent_url: "https://BITTORRENT_URL",
		netdata_url: "https://NETDATA_URL"
	}
};
/// END CONFIG ///

/*
 * updatePageData()
 *
 * Runs on launch, updates the page elements according to the config object
 */
function updatePageData() {
	//Update page and header titles to server name
	document.title = config.general.title;
	document.getElementById("header-title").innerHTML += (config.general.title);
	//Update top three block links
	document.getElementById("splash-link-requests").href = config.url.requests_url;
	document.getElementById("splash-link-plex").href = config.url.plex_url;
	document.getElementById("splash-link-tautulli").href = config.url.tautulli_url;
	//Update advanced block links
	document.getElementById("splash-link-sonarr").href = config.url.sonarr_url;
	document.getElementById("splash-link-radarr").href = config.url.radarr_url;
	document.getElementById("splash-link-sabnzbd").href = config.url.sabnzbd_url;

	document.getElementById("splash-link-bittorrent").href = config.url.bittorrent_url;
	document.getElementById("splash-link-tvheadend").href = config.url.tvheadend_url;
	document.getElementById("splash-link-netdata").href = config.url.netdata_url;
}

function animate() {
	window.sr = ScrollReveal({duration: 500});
	sr.reveal('.header',200);
	sr.reveal('.col-md-4', 75);
}

animate();