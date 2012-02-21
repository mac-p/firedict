const FILES = {
    english: 'firedict-english.txt',
    german: 'firedict-german.txt'
}

//Appends string to file (on user's Desktop)
function appendToFile(filename, data) {
    Components.utils.import("resource://gre/modules/FileUtils.jsm");
    Components.utils.import("resource://gre/modules/NetUtil.jsm");

    var file = FileUtils.getFile("Desk", [filename]);
    var ostream = FileUtils.openFileOutputStream(file, FileUtils.MODE_WRONLY | FileUtils.MODE_CREATE | FileUtils.MODE_APPEND);

    var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].
	createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
    converter.charset = "UTF-8";
    var istream = converter.convertToInputStream(data + "\n");

    NetUtil.asyncCopy(istream, ostream, function(status) {
	if (!Components.isSuccessCode(status)) {
	    // Handle error!
	    alert("Writing to file failed. Status: " + status + ".");
	    return;
	}
    });
}

function putDown(language) {
    text = content.getSelection();
    filename = FILES[language];
    appendToFile(filename, text);
}
