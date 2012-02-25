/*Create namespace*/
if (!pl) var pl = {};
if (!pl.firedict) pl.firedict = {};

pl.firedict.putdown = function() {
    var pub = {};
    var priv = {};
    const FILES = {
	english: 'firedict-english.txt',
	german: 'firedict-german.txt'
    }

    pub.putDown = function(language) {
	var text = content.getSelection();
	var filename = FILES[language];
	priv.appendToFile(filename, text);
    };

    //Appends string to file (on user's Desktop)
    priv.appendToFile = function(filename, data) {
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
    };
    return pub;
}();
