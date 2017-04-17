define(["elaiJS/webservice", "elaiJS/helper"], function(webservice, helper) {
  'use strict';
  
	return function() {
	  
	  this._initialize = this.refreshData;
	  
	  this._fetchData = function _fetchData() {
      return webservice.loadAPI(this.params.name);
	  };
	  
	  this._processRawData = function _processRawData() {
	    var data = helper.clone(this.rawData);
	    data.descriptionKey = data.name.toLowerCase();
	    
	    for(var i in data.methods)
	      processRawMethod(data.methods[i], data.descriptionKey);
	    
	    return data;
	  };
	  
	  function processRawMethod(method, baseKey) {
      var methodKey = baseKey + "_" + method.name;
      method.descriptionKey = methodKey;
      
      for(var i in method.parameters) {
        var parameter = method.parameters[i];
        parameter.descriptionKey = methodKey + "_" + parameter.name;
      }
      
      if(method.returns) {
        method.returns = {type: method.returns};
        method.returns.descriptionKey = methodKey + "_returns";
      }
	  }
	  
	  this.afterSetData = function afterSetData() {
	    this.viewData = this.data;
	  };
	};
});