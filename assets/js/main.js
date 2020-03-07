/// START CONFIG ///
var config = {
	general: {
		title: "Hypernova",
		status_enabled: true
	},
	status: {
		url: "http://DIRECT_PLEX_SERVER_URL:32400/web/index.html",
		movies_num: "1200+",
		tv_num: "200+",
		anime_num: "50+",
		music_num: "50+"
	},
	url: {
		//Top splash blocks
		plex_url: "https://app.plex.tv/",
		requests_url: "https://REQUEST_URL",
		tautulli_url: "https://TAUTULLI_URL",
		//Automation software blocks [Row 1]
		sonarr_url: "https://SONARR_URL",
		radarr_url: "https://RADARR_URL",
		nzbget_url: "https://SABNZBD_URL",
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
	document.getElementById("header-title").innerHTML += config.general.title;
	//Update top three block links
	document.getElementById("splash-link-requests").href = config.url.requests_url;
	document.getElementById("splash-link-plex").href = config.url.plex_url;
	document.getElementById("splash-link-tautulli").href = config.url.tautulli_url;
	//Update automation software blocks [Row 1]
	document.getElementById("splash-link-sonarr").href = config.url.sonarr_url;
	document.getElementById("splash-link-radarr").href = config.url.radarr_url;
	document.getElementById("splash-link-nzbget").href = config.url.nzbget_url;
	//Update automation software blocks [Row 2]
	document.getElementById("splash-link-bittorrent").href = config.url.bittorrent_url;
	document.getElementById("splash-link-tvheadend").href = config.url.tvheadend_url;
	document.getElementById("splash-link-netdata").href = config.url.netdata_url;
	//Update or remove the status section
	if(config.general.status_enabled) {
		//Update the amount of media
		document.getElementById("status-text-movies-state").innerHTML += config.status.movies_num;
		document.getElementById("status-text-tv-state").innerHTML += config.status.tv_num;
		document.getElementById("status-text-anime-state").innerHTML += config.status.anime_num;
		document.getElementById("status-text-music-state").innerHTML += config.status.music_num;
		//Update the current state of the server
		server_state = document.getElementById("status-text-status-state");
		$.ajax({
			url: config.status.url,
			timeout: 200,
			type: "GET",
			success: function(result) {
				server_state.innerHTML += "ONLINE";
				server_state.style.color = "#00ff40";
			},
			error: function(error) {
				server_state.innerHTML += "OFFLINE";
				server_state.style.color = "#ff0000";
			}
		});
	} else {
		document.getElementById("status").style.display = "none";
	}
}

function animate() {
	window.sr = ScrollReveal({duration: 500});
	sr.reveal('.animate', 50);
	sr.reveal('.animate-header');
}

animate();
