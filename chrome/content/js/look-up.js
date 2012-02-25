/*Create namespace*/
if (!pl) var pl = {};
if (!pl.firedict) pl.firedict = {};


pl.firedict.lookup = function(){
    var pub = {};
    var priv = {};
    const DICTS = {
	oald: function(word) {
	    return 'http://oald8.oxfordlearnersdictionaries.com/dictionary/' + word; },
	pons: function(word) {
	    return 'http://de.pons.eu/englisch-deutsch/' + word;
	}
    }

    pub.lookUp = function(dictionary) {
	url = DICTS[dictionary](content.getSelection());
	priv.findOrCreateTab(dictionary, url)
    }

    priv.findTab = function(marker) {
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

    priv.findOrCreateTab = function(marker, url) {
	var tabBrowser = top.document.getElementById("content");
	tab = priv.findTab(marker);

	if (tab) {
	    tabBrowser.getBrowserForTab(tab).loadURI(url);
	} else {
	    tab = tabBrowser.addTab(url);
	    tab['firedict-marker'] = marker;
	}
	tabBrowser.selectedTab = tab;
    }
    return pub;
}();
