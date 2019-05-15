chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	//chrome.extension.getBackgroundPage().console.log(details);
	if(details.url == "https://clips.twitch.tv/create"){
		chrome.tabs.executeScript(details.tabId,{file:"content.js"});
	}
});
