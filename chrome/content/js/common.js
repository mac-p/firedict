window.addEventListener("load", initMenu, false);

function initMenu() {
    var menu = document.getElementById("contentAreaContextMenu");
    menu.addEventListener("popupshowing", showHideMenu, false);
}

function showHideMenu() {
    var lookup_menu = document.getElementById("firedict-lookup");
    var putdown_menu = document.getElementById("firedict-putdown");
    lookup_menu.hidden = !gContextMenu.isTextSelected;
    putdown_menu.hidden= !gContextMenu.isTextSelected;
}