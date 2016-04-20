define(["elaiJS/widget", "elaiJSAPI/navigationManager", "elaiJSAPI/languageManager"],
        function(widgetManager, navigationManager, languageManager) {
  
  function start() {
    navigationManager.initialize();
    languageManager.initialize();
    widgetManager.createAndRender("body", "body");
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