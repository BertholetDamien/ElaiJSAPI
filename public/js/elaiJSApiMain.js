define(["elaiJS/widget", "elaiJSAPI/navigationManager",
        "elaiJSAPI/languageManager", "elaiJSAPI/elaiJSAPIServices"],
        function( widgetManager, navigationManager, languageManager,
                  elaiJSAPIServices) {
  
  function start() {
    navigationManager.initialize();
    languageManager.initialize();
    elaiJSAPIServices.initialize();
    widgetManager.createAndRender("body", "body");
  }
  
  return {start: start};
});

/*
  TODO:
    TO FIXED:
      Arranger saut de lignes multiples dans api
      Retour en haut de la scoll apres changements de pages !
      Bloquer scroll on menu pour parent
  
    TO WRITE:
      HomePage
        
      Documentation
        Overview
        RequireElaiJS
        Configuration
          DefaultConfiguration
        Binder
          Ajouter info
        Webservice
          DefaultWebservice
        Widget
          primaryWidget
        Plugin
        Renderer
          Mustacherend
          Polymer
        Navigation
        Mode
        DebugManager
      
      API
        Widget
        Plugin
        WidgetPrimaire
        Mode
      
      Téléchargement
    
    Getting Started?
    
    Integrer ElaiJS avec bower
    Add ReadMe into GitHub
    Read about compression gzip to use properly
*/