define(["elaiJS/navigator", "elaiJS/promise"], function(navigator, Promise) {
	'use strict';
	return function() {

		this._create = function _create() {
			navigator.bind(navigator.EVENT.pageChanged, pageChanged, undefined, this);
			this.viewEvents = {"changeNavigationOpacity": changeNavigationOpacity};
		};

		function changeNavigationOpacity(value) {
			this.children.navigationArea.changeNavigationOpacity(value);
		}

		this._initialize = function _initialize() {
			return Promise.all([
				this.createChild("navigationArea", "navigationArea"),
				createPageWidget.call(this)
			]);
		};
		
		this.findDOMElement = function findDOMElement() {
			return document.body;
		};
		
		function pageChanged() {
			var promise = Promise.resolve();
			if(this.children.page)
				promise = this.children.page.destroy();
			
			return promise.then(function() {
				return createPageWidget.call(this).then(function(widget) {
					return widget.render(undefined, scrollTop);
				}.bind(this));
			}.bind(this));
		}
		
		function createPageWidget() {
			var pageInfo = navigator.getCurrentPageInfo();
			var pageName = pageInfo.page;
			return this.createChild(pageName, "page", pageInfo);
		}

		function scrollTop() {
			document.body.scrollTop = 0;
		}
	};
});