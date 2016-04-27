define([  "elaiJS/webservice", "elaiJS/ressources"],
          function(webservice, res) {
	'use strict';

	function initialize() {
    webservice.addService("loadAPI", loadAPI, true);
	}
	
	function loadAPI(name, callback, errCallback) {
    var url = res.get("api", {name: name});
    webservice.loadJSONFile(url, callback, errCallback);
	}
	
	return {initialize: initialize};
});