define(["elaiJS/language"], function(lang) {
  'use strict';
  
	return function() {
		this._create = function _create(callback) {
		  this.viewEvents = {"languageSelected": languageChanged};
		  callback();
		};
		
		function languageChanged(newValue) {
      lang.setLanguage(newValue);
		}
		
		this.changeNavigationOpacity = function(value) {
		  if(value)
		    this.elementPolymer.classList.add("minOpacity");
		  else
		    this.elementPolymer.classList.remove("minOpacity");
		};
  };
});