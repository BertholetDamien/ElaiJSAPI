define(["elaiJS/configuration", "elaiJS/navigator", "elaiJS/widget"],
        function(config, navigator, widgetManager) {
  
  function start() {
    setDefaultConfig();
    widgetManager.createAndRender("body", "body");
  }
  
  function setDefaultConfig() {
    var basicExtractor = config.extractPageInfo;
    
    config.extractPageInfo = function (hash) {
      var pageInfo = basicExtractor(hash);
      if(!pageAvailable(pageInfo)) {
        pageInfo.page = config.page404;
        pageInfo.name = undefined;
      }
      
      return pageInfo;
    };
    
    function pageAvailable(pageInfo) {
      for(var i in config.menu) {
        var menu = config.menu[i];
        if(menu.key === pageInfo.page) {
          if(!menu.subMenus)
            return true;
          
          return menu.subMenus.indexOf(pageInfo.name) !== -1;
        }
      }
      
      return false;
    }
    
    navigator.initializeCurrentPage();
  }
  
  return {start: start};
});

/*
  TODO:
    Faire le mode phone
    
    Creer les pages necessaires
    Ecrire la page de Download
    Ecrire la page d'acceuil
    Ecrire la documentation
    
    Integrer ElaiJS avec bower
    Add ReadMe into GitHub
*/