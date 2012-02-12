const OXFORD_DICT_URL = 'http://oald8.oxfordlearnersdictionaries.com/dictionary/'

function showOALD() {
    url = OXFORD_DICT_URL + content.getSelection();
    findOrCreateTab('oald', url)
}

function findTab(marker) {
    var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
	.getService(Components.interfaces.nsIWindowMediator);

    var tabBrowser = wm.getEnumerator('navigator:browser').getNext().gBrowser;
    var childNodes = tabBrowser.tabContainer.childNodes
    for (var index = 0; index < childNodes.length; index++) {
	var tab = childNodes[index];
	if (tab['firedict-marker'] == marker) {
	    return tab;
	}
    }
    return null;
}

function findOrCreateTab(marker, url) {
    var tabBrowser = top.document.getElementById("content");
    tab = findTab(marker);

    if (tab) {
	tabBrowser.getBrowserForTab(tab).loadURI(url);
    } else {
	tab = tabBrowser.addTab(url);
	tab['firedict-marker'] = marker;
    }
    tabBrowser.selectedTab = tab;
}
