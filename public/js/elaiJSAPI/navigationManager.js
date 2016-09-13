define(["elaiJS/configuration", "elaiJS/navigator"],
        function(config, navigator) {
  
  function initialize() {
    var basicExtractor = config.elaiJS.extractPageInfo;
    
    config.elaiJS.extractPageInfo = function (hash) {
      var pageInfo = basicExtractor(hash);
      if(!pageAvailable(pageInfo)) {
        pageInfo.page = config.app.page404;
        pageInfo.name = undefined;
      }
      
      return pageInfo;
    };
    
    function pageAvailable(pageInfo) {
      for(var i in config.app.menu) {
        var menu = config.app.menu[i];
        if(menu.key === pageInfo.page) {
          if(!menu.subMenus)
            return true;
          
          return menu.subMenus.indexOf(pageInfo.name) !== -1;
        }
      }
      
      return false;
    }
    
    navigator.initialize();
  }
  
  return {initialize: initialize};
});