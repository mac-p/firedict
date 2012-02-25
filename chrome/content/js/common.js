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
	var lookup_menu = document.getElementById("firedict-lookup");
	var putdown_menu = document.getElementById("firedict-putdown");
	lookup_menu.hidden = !gContextMenu.isTextSelected;
	putdown_menu.hidden= !gContextMenu.isTextSelected;
    }
    return pub;
}();

window.addEventListener("load", pl.firedict.common.initMenu, false);