define([  "elaiJS/multicallback", "elaiJS/navigator"],
          function(multicallback, navigator) {
	'use strict';
  return function() {
    
    this.afterCreate = function () {
      navigator.bind(navigator.EVENT.pageChanged, pageChanged, undefined, this);
    };
    
		this._initialize = function _initialize(callback) {
		  var multiCBFct = multicallback(2, callback);
      this.createChild("navigationArea", "navigationArea", undefined, multiCBFct);
		  createPageWidget.call(this, multiCBFct);
		};
		
		this.findDOMElement = function findDOMElement() {
			return document.body;
		};
		
		function pageChanged() {
		  this.destroyChildByID("page");
		  createPageWidget.call(this, function(widget) {
		    widget.render();
		  });
		}
		
		function createPageWidget(callback) {
		  var pageInfo = navigator.getCurrentPageInfo();
		  var pageName = pageInfo.page;
		  this.createChild(pageName, "page", pageInfo, callback);
		}
	};
});