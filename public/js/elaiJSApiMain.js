define(["elaiJS/configuration", "elaiJS/navigator", "elaiJS/widget"],
        function(config, navigator, widgetManager) {
  
  function start() {
    setDefaultConfig();
    widgetManager.createAndRender("body", "body");
  }
  
  function setDefaultConfig() {
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
    
    navigator.initializeCurrentPage();
  }
  
  return {start: start};
});

/*
  TODO:
    Overview
    RequireElaiJS
    Configuration
      DefaultConfiguration
    Binder
    Webservice
      DefaultWebservice
    Widget
      primaryWidget
    Plugin
    Renderer
      Mustacherend
      Polymer
    Navigation
    Internationalisation
      Language
      Localisation
    Ressources
    Mode
    Theme
    Helper
    DebugManager
    
    Storage ?
    
    Ecrire la page de Download
    Ecrire la page d'acceuil
    Ecrire la documentation
    
    Getting Started?
    
    Integrer ElaiJS avec bower
    Add ReadMe into GitHub
    Read about compression gzip to use properly
*/