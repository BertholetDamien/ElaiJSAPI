define([  "elaiJS/webservice", "elaiJS/ressources"],
          function(webservice, res) {
	'use strict';

	function initialize() {
    webservice.addService("loadAPI", loadAPI, {useCache: true});
	}
	
	function loadAPI(name) {
    var url = res.get("api", {name: name});
    return webservice.loadJSONFile(url);
	}
	
	return {initialize: initialize};
});