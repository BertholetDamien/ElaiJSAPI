define(["elaiJS/webservice"], function(webservice) {
  'use strict';
  
	return function() {
	  
	  this._initialize = this.refreshData;
	  
	  this._fetchData = function(callback) {
      webservice.loadAPI(this.params.name, callback);
	  };
	  
	  this.processRowData = function() {
	    var data = this.rowData;
	    
	    data.descriptionKey = data.name.toLowerCase();
	    
	    for(var i in data.methods)
	      processRowMethod(data.methods[i], data.descriptionKey);
	    
	    return data;
	  };
	  
	  function processRowMethod(method, baseKey) {
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
	  
	  this.afterSetData = function() {
	    this.viewData = this.data;
	  };
	};
});