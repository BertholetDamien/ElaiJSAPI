define([], function() {
  'use strict';
  
	var properties = {};
	properties.plugins = {
    "i18nPolymerWidget": {}
  };
  
	properties.builder = function() {
	  this.getWebComponentInfo = function() {
      return {
        name: this.params.name,
        lang: lang.getLanguage(),
        ressource: "documentation"
      };
    };
	};
  
  return properties;
});