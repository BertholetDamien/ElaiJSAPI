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
      if(config.pagesAvailable.indexOf(pageInfo.page) === -1)
        pageInfo.page = config.page404;
      
      return pageInfo;
    };
    
    navigator.initializeCurrentPage();
  }
  
  return {start: start};
});

/*
  TODO:
    Faire la banniere
    Faire le truc de recherche
    Faire Page 404
    Faire le mode phone
    
    Migrer les repos a Github
    
    Creer les pages necessaires
    Ecrire la page de Download
    Ecrire la page d'acceuil
    Ecrire la documentation
*/