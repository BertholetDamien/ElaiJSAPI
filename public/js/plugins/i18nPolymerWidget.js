define(["elaiJS/helper", "elaiJS/language"], function(helper, lang) {
  'use strict';
  
  return function(widget) {
    if(!helper.isFunction(widget.getWebComponentInfo)) {
      widget.getWebComponentInfo = function() {
        return this.name + "-" + lang.getLanguage();
      };
    }
    
    function languageChanged() {
      widget.removeRender();
      widget.render();
    }
    
    lang.bind(lang.EVENT.languageChanged, languageChanged, undefined, widget);
    
    return {
      destroyAfterWidget: function() {
        lang.unbind(lang.EVENT.languageChanged, languageChanged);
      }
    };
  };
});