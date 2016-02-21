define([], function() {
  'use strict';
  
	var properties = {};
	properties.plugins = {
    "i18nPolymerWidget": {}
  };
  
	properties.builder = function() {
	  this.getWebComponentInfo = function() {
      return this.name + "-" + this.params.name + "-" + lang.getLanguage();
    };
	};
  
  return properties;
});