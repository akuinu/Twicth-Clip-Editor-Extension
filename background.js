chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	if(details.url == "https://clips.twitch.tv/create"){
		chrome.tabs.executeScript(null,{file:"contentscript.js"});
	}
});
