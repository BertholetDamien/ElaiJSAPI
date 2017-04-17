define(["elaiJS/language"], function(lang) {
  'use strict';
  
	return function() {
		this._create = function _create() {
		  this.viewEvents = {"languageSelected": languageChanged};
		};
		
		function languageChanged(newValue) {
      lang.setLanguage(newValue);
		}
		
		this.changeNavigationOpacity = function(value) {
			if(!this.elementPolymer)
				return;
			
		  if(value)
		    this.elementPolymer.classList.add("minOpacity");
		  else
		    this.elementPolymer.classList.remove("minOpacity");
		};
  };
});