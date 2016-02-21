define(["elaiJS/language"], function(lang) {
  'use strict';
  
	return function() {
		this._initialize = function _initialize(callback) {
		  this.viewEvents = {"languageSelected": languageChanged};
		  callback();
		};
		
		function languageChanged(newValue) {
      lang.setLanguage(newValue);
		}
  };
});