/*Create namespace*/
if (!pl) var pl = {};
if (!pl.firedict) pl.firedict = {};

pl.firedict.common = function() {
    var pub = {};
    var priv = {};

    pub.initMenu = function() {
	var menu = document.getElementById("contentAreaContextMenu");
	menu.addEventListener("popupshowing", priv.showHideMenu, false);
    };

    priv.showHideMenu = function() {
	var menuItems = [];
	menuItems.push(document.getElementById("firedict-lookup"));
	menuItems.push(document.getElementById("firedict-putdown"));
	menuItems.push(document.getElementById("firedict-menuseparator"));
	for (var i = 0, item; item = menuItems[i++];) {
	    item.hidden = !gContextMenu.isTextSelected;
	}
    }
    return pub;
}();

window.addEventListener("load", pl.firedict.common.initMenu, false);