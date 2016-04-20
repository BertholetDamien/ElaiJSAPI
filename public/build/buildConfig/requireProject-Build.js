({
    baseUrl: "./../../js/",
    include: [
      'widgets/body',
      'widgets/navigationArea',
      'widgets/home',
      'widgets/download',
      'widgets/documentation',
      'plugins/i18nPolymerWidget',
      'elaiJSAPI/languageManager',
      'elaiJSAPI/navigationManager',
      'elaiJSApiMain'
    ],
    "paths": {
      "elaiJS": "empty:"
    },
    out: "../requireProject.min.js"
})