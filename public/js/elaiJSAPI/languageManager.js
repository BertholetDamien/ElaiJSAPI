define(["elaiJS/configuration", "elaiJS/language", "elaiJS/localStorage"],
        function(config, lang, localStorage) {
  
  function initialize() {
    localStorage.bind(config.elaiJS.languageStorageKey, function(event) {
      lang.setLanguage(event.data.newValue);
    });
  }
  
  return {initialize: initialize};
});