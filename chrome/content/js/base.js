const OXFORD_DICT_URL = 'http://oald8.oxfordlearnersdictionaries.com/dictionary/'

function openTab(url) {
    var browser = top.document.getElementById("content");
    var tab = browser.addTab(url);
    browser.selectedTab = tab;
}

function showOALD() {
    url = OXFORD_DICT_URL + content.getSelection();
    openTab(url);
}
